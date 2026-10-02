import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { photographers } from '@/data/photographers';
import { useBookingFlowStore } from '@/stores/booking';
import { useBookingsListStore } from '@/stores/bookings-list';
import { BackHeader } from '@/components/ui/back-header';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { useSnackbarStore } from '@/stores/snackbar';
import {
  CheckCircleIcon,
  ClockIcon,
  MapPinIcon,
  SparklesIcon,
  ChevronRightIcon,
} from '@/utils/icons';

// Generate next 14 days for date selection
function getNext14Days() {
  const days = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const dateStr = d.toISOString().split('T')[0]; // YYYY-MM-DD
    const dayName = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short' });
    const formattedDate = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    days.push({ dateStr, dayName, formattedDate });
  }
  return days;
}

const timeSlots = [
  '09:00 AM',
  '10:30 AM',
  '01:00 PM',
  '03:30 PM',
  '05:00 PM',
  '07:00 PM',
];

const paymentMethods = [
  { id: 'upi', name: 'UPI (GPay, PhonePe, Paytm)', icon: '📱', desc: 'Instant 0% fee payment' },
  { id: 'card', name: 'Credit / Debit Card', icon: '💳', desc: 'Visa, Mastercard, RuPay' },
  { id: 'netbanking', name: 'Net Banking', icon: '🏦', desc: 'All major Indian banks' },
  { id: 'pay_later', name: 'Pay at Location (Deposit 20%)', icon: '💵', desc: 'Pay remaining after shoot completion' },
];

export default function BookingFlowScreen() {
  const router = useRouter();
  const { id, serviceId } = useLocalSearchParams<{ id: string; serviceId?: string }>();

  const photographer = photographers.find((p) => p.id === id) || photographers[0];

  const bookingStore = useBookingFlowStore();
  const { addBooking } = useBookingsListStore();

  const [step, setStep] = useState<'service' | 'datetime' | 'details' | 'summary' | 'payment' | 'confirmed'>('service');

  // Form State
  const [selectedService, setSelectedService] = useState(
    serviceId ? photographer.services.find((s) => s.id === serviceId) || photographer.services[0] : photographer.services[0]
  );
  const [selectedDate, setSelectedDate] = useState(getNext14Days()[1].dateStr);
  const [selectedTime, setSelectedTime] = useState(timeSlots[1]);

  const [eventName, setEventName] = useState('');
  const [eventLocation, setEventLocation] = useState(photographer.location || photographer.city);
  const [eventNotes, setEventNotes] = useState('');
  const [formErrors, setFormErrors] = useState<{ eventName?: string; eventLocation?: string }>({});

  const [selectedPayment, setSelectedPayment] = useState('upi');
  const [confirmedBookingId, setConfirmedBookingId] = useState('');

  useEffect(() => {
    bookingStore.setPhotographer(photographer.id, photographer.name, photographer.avatar);
    if (selectedService) {
      bookingStore.setService(selectedService.id, selectedService.name, selectedService.price);
    }
  }, [photographer]);

  const availableDays = getNext14Days();

  // Price calculations
  const servicePrice = selectedService?.price || photographer.startingPrice;
  const travelFee = 1000;
  const platformFee = 500;
  const totalAmount = servicePrice + travelFee + platformFee;

  const handleServiceSelect = (srv: typeof photographer.services[0]) => {
    setSelectedService(srv);
    bookingStore.setService(srv.id, srv.name, srv.price);
  };

  const handleNextFromService = () => {
    if (!selectedService) {
      useSnackbarStore.getState().showError('Please select a service package');
      return;
    }
    setStep('datetime');
  };

  const handleNextFromDateTime = () => {
    if (!selectedDate || !selectedTime) {
      useSnackbarStore.getState().showError('Please select date and time');
      return;
    }
    bookingStore.setDate(selectedDate);
    bookingStore.setTime(selectedTime);
    setStep('details');
  };

  const handleNextFromDetails = () => {
    const errs: { eventName?: string; eventLocation?: string } = {};
    if (!eventName.trim()) {
      errs.eventName = 'Event or shoot title is required';
    }
    if (!eventLocation.trim()) {
      errs.eventLocation = 'Venue address or location is required';
    }

    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      useSnackbarStore.getState().showError('Please fill in the required event details');
      return;
    }

    setFormErrors({});
    bookingStore.setEventDetails({
      eventName,
      location: eventLocation,
      eventType: selectedService?.name || 'Photography',
      hours: 4,
      notes: eventNotes,
    });
    setStep('summary');
  };

  const handleConfirmPayment = () => {
    const newBookingId = 'KX-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmedBookingId(newBookingId);

    // Save to global list store
    addBooking({
      id: 'b-' + Date.now(),
      bookingId: newBookingId,
      photographerId: photographer.id,
      photographerName: photographer.name,
      photographerAvatar: photographer.avatar,
      serviceName: selectedService.name,
      servicePrice,
      travelFee,
      platformFee,
      totalAmount,
      date: selectedDate,
      time: selectedTime,
      location: eventLocation || photographer.city,
      eventName,
      eventNotes,
      status: 'upcoming',
      paymentStatus: 'paid',
      paymentMethod: selectedPayment.toUpperCase(),
      createdAt: new Date().toISOString(),
    });

    setStep('confirmed');
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        {/* Header */}
        <BackHeader
          title={
            step === 'confirmed'
              ? 'Booking Confirmed 🎉'
              : `Book ${photographer.name}`
          }
          subtitle={`Step ${
            step === 'service'
              ? '1 of 5: Choose Package'
              : step === 'datetime'
              ? '2 of 5: Date & Time'
              : step === 'details'
              ? '3 of 5: Event Details'
              : step === 'summary'
              ? '4 of 5: Review Booking'
              : step === 'payment'
              ? '5 of 5: Payment'
              : 'Complete'
          }`}
          onBack={() => {
            if (step === 'datetime') setStep('service');
            else if (step === 'details') setStep('datetime');
            else if (step === 'summary') setStep('details');
            else if (step === 'payment') setStep('summary');
            else if (step === 'confirmed') router.replace('/(tabs)/bookings');
            else router.back();
          }}
        />

        {/* Progress Bar */}
        {step !== 'confirmed' && (
          <View className="px-5 py-2 bg-white border-b border-[#23232314]">
            <View className="h-1.5 w-full bg-[#F3F4F6] rounded-full overflow-hidden">
              <View
                className="h-full bg-[#232323] rounded-full"
                style={{
                  width:
                    step === 'service'
                      ? '20%'
                      : step === 'datetime'
                      ? '40%'
                      : step === 'details'
                      ? '60%'
                      : step === 'summary'
                      ? '80%'
                      : '95%',
                }}
              />
            </View>
          </View>
        )}

        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1 px-5 pt-4"
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          {/* STEP 1: SERVICE SELECTION */}
          {step === 'service' && (
            <View>
              <Text className="font-figtree-bold text-xl text-[#232323] mb-1">
                Select Service Package 📸
              </Text>
              <Text className="font-figtree text-sm text-[#6C6C6C] mb-4">
                Choose the service package that fits your event requirements.
              </Text>

              {photographer.services.map((srv) => {
                const isSelected = selectedService?.id === srv.id;
                return (
                  <TouchableOpacity
                    key={srv.id}
                    onPress={() => handleServiceSelect(srv)}
                    activeOpacity={0.88}
                    className={`p-4 rounded-2xl border mb-3 ${
                      isSelected
                        ? 'border-[#232323] bg-[#23232308]'
                        : 'border-[#2323231F] bg-white'
                    }`}
                  >
                    <View className="flex-row items-start justify-between mb-2">
                      <View className="flex-1 mr-2">
                        <Text className="font-figtree-bold text-base text-[#232323]">
                          {srv.name}
                        </Text>
                        <Text className="font-figtree text-xs text-[#6C6C6C] mt-0.5">
                          ⏱️ Duration: {srv.duration}
                        </Text>
                      </View>

                      <View className="items-end">
                        <Text className="font-figtree-bold text-lg text-[#232323]">
                          ₹{srv.price.toLocaleString('en-IN')}
                        </Text>
                        {srv.originalPrice && (
                          <Text className="font-figtree text-xs text-[#6C6C6C] line-through">
                            ₹{srv.originalPrice.toLocaleString('en-IN')}
                          </Text>
                        )}
                      </View>
                    </View>

                    <Text className="font-figtree text-xs text-[#232323]/70 leading-relaxed">
                      {srv.description}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}

          {/* STEP 2: DATE & TIME SELECTION */}
          {step === 'datetime' && (
            <View>
              <Text className="font-figtree-bold text-xl text-[#232323] mb-1">
                Select Date & Start Time 🗓️
              </Text>
              <Text className="font-figtree text-xs text-[#6C6C6C] mb-4">
                Pick an available slot for {photographer.name}.
              </Text>

              {/* Date Selector */}
              <Text className="font-figtree-semibold text-sm text-[#232323] mb-2.5">
                Select Date
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="mb-5"
              >
                {availableDays.map((item) => {
                  const isSelected = selectedDate === item.dateStr;
                  return (
                    <TouchableOpacity
                      key={item.dateStr}
                      onPress={() => setSelectedDate(item.dateStr)}
                      className={`mr-2.5 px-4 py-3 rounded-2xl items-center border ${
                        isSelected
                          ? 'border-[#232323] bg-[#232323]'
                          : 'border-[#2323231F] bg-white'
                      }`}
                    >
                      <Text
                        className={`font-figtree-medium text-xs mb-1 ${
                          isSelected ? 'text-white/80' : 'text-[#6C6C6C]'
                        }`}
                      >
                        {item.dayName}
                      </Text>
                      <Text
                        className={`font-figtree-bold text-sm ${
                          isSelected ? 'text-white' : 'text-[#232323]'
                        }`}
                      >
                        {item.formattedDate}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>

              {/* Time Slots */}
              <Text className="font-figtree-semibold text-sm text-[#232323] mb-2.5">
                Select Start Time
              </Text>
              <View className="flex-row flex-wrap gap-2.5">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTime === slot;
                  return (
                    <TouchableOpacity
                      key={slot}
                      onPress={() => setSelectedTime(slot)}
                      className={`px-4 py-3 rounded-xl border ${
                        isSelected
                          ? 'border-[#232323] bg-[#232323]'
                          : 'border-[#2323231F] bg-white'
                      }`}
                    >
                      <Text
                        className={`font-figtree-semibold text-sm ${
                          isSelected ? 'text-white' : 'text-[#232323]'
                        }`}
                      >
                        {slot}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}

          {/* STEP 3: EVENT DETAILS */}
          {step === 'details' && (
            <View>
              <Text className="font-figtree-bold text-xl text-[#232323] mb-1">
                Event & Venue Details 📍
              </Text>
              <Text className="font-figtree text-xs text-[#6C6C6C] mb-4">
                Provide details so the photographer can prepare gear & itinerary.
              </Text>

              {/* Event Name */}
              <View className="mb-4">
                <View className="flex-row items-center justify-between mb-1.5">
                  <Text className="font-figtree-semibold text-xs text-[#232323]">
                    Event / Shoot Title <Text className="text-red-500">*</Text>
                  </Text>
                  {formErrors.eventName && (
                    <Text className="font-figtree-medium text-xs text-red-500">
                      {formErrors.eventName}
                    </Text>
                  )}
                </View>
                <TextInput
                  value={eventName}
                  onChangeText={(val) => {
                    setEventName(val);
                    if (formErrors.eventName) {
                      setFormErrors((prev) => ({ ...prev, eventName: undefined }));
                    }
                  }}
                  placeholder="e.g. Rahul & Priya Wedding Ceremony"
                  placeholderTextColor="#8C8C8C"
                  className={`px-4 py-3.5 rounded-xl border font-figtree text-sm text-[#232323] ${
                    formErrors.eventName
                      ? 'border-red-500 bg-red-50/40'
                      : 'border-[#2323231F] bg-white'
                  }`}
                />
              </View>

              {/* Venue Address */}
              <View className="mb-4">
                <View className="flex-row items-center justify-between mb-1.5">
                  <Text className="font-figtree-semibold text-xs text-[#232323]">
                    Venue Address / Location <Text className="text-red-500">*</Text>
                  </Text>
                  {formErrors.eventLocation && (
                    <Text className="font-figtree-medium text-xs text-red-500">
                      {formErrors.eventLocation}
                    </Text>
                  )}
                </View>
                <TextInput
                  value={eventLocation}
                  onChangeText={(val) => {
                    setEventLocation(val);
                    if (formErrors.eventLocation) {
                      setFormErrors((prev) => ({ ...prev, eventLocation: undefined }));
                    }
                  }}
                  placeholder="e.g. Taj Hotel, Koramangala, Bangalore"
                  placeholderTextColor="#8C8C8C"
                  className={`px-4 py-3.5 rounded-xl border font-figtree text-sm text-[#232323] ${
                    formErrors.eventLocation
                      ? 'border-red-500 bg-red-50/40'
                      : 'border-[#2323231F] bg-white'
                  }`}
                />
              </View>

              {/* Special Notes */}
              <View className="mb-4">
                <Text className="font-figtree-semibold text-xs text-[#232323] mb-1.5">
                  Special Notes & Requirements (Optional)
                </Text>
                <TextInput
                  value={eventNotes}
                  onChangeText={setEventNotes}
                  multiline
                  numberOfLines={3}
                  placeholder="e.g. Traditional mandap shots + candid family portraits required."
                  placeholderTextColor="#8C8C8C"
                  className="px-4 py-3 rounded-xl border border-[#2323231F] font-figtree text-sm text-[#232323] bg-white h-24 textAlignVertical-top"
                />
              </View>
            </View>
          )}

          {/* STEP 4: BOOKING SUMMARY */}
          {step === 'summary' && (
            <View>
              <Text className="font-figtree-bold text-xl text-[#232323] mb-1">
                Booking Summary 📄
              </Text>
              <Text className="font-figtree text-xs text-[#6C6C6C] mb-4">
                Please verify all booking details before proceeding to payment.
              </Text>

              {/* Photographer Card Mini */}
              <View className="flex-row items-center p-3.5 bg-[#F8F9FA] rounded-2xl border border-[#23232314] mb-4">
                <Avatar url={photographer.avatar} name={photographer.name} size="lg" />
                <View className="ml-3 flex-1">
                  <Text className="font-figtree-bold text-base text-[#232323]">
                    {photographer.name}
                  </Text>
                  <Text className="font-figtree text-xs text-[#6C6C6C]">
                    ⭐ {photographer.rating} ({photographer.reviewCount} reviews) • {photographer.city}
                  </Text>
                </View>
              </View>

              {/* Event Details Card */}
              <View className="p-4 bg-white rounded-2xl border border-[#2323231F] mb-4">
                <Text className="font-figtree-bold text-sm text-[#232323] mb-2">
                  Event Schedule & Location
                </Text>

                <View className="flex-row items-center mb-2">
                  <Text className="text-sm mr-2">📅</Text>
                  <Text className="font-figtree-semibold text-xs text-[#232323]">
                    {selectedDate} at {selectedTime}
                  </Text>
                </View>

                <View className="flex-row items-center mb-2">
                  <Text className="text-sm mr-2">📸</Text>
                  <Text className="font-figtree-semibold text-xs text-[#232323]">
                    {selectedService?.name} ({selectedService?.duration})
                  </Text>
                </View>

                <View className="flex-row items-start">
                  <Text className="text-sm mr-2">📍</Text>
                  <Text className="font-figtree text-xs text-[#6C6C6C] flex-1">
                    {eventLocation}
                  </Text>
                </View>
              </View>

              {/* Cost Breakdown */}
              <View className="p-4 bg-white rounded-2xl border border-[#2323231F]">
                <Text className="font-figtree-bold text-sm text-[#232323] mb-3">
                  Payment Breakdown
                </Text>

                <View className="flex-row justify-between mb-2">
                  <Text className="font-figtree text-xs text-[#6C6C6C]">
                    Service Package ({selectedService?.name})
                  </Text>
                  <Text className="font-figtree-semibold text-xs text-[#232323]">
                    ₹{servicePrice.toLocaleString('en-IN')}
                  </Text>
                </View>

                <View className="flex-row justify-between mb-2">
                  <Text className="font-figtree text-xs text-[#6C6C6C]">
                    Travel & Equipment Logistics
                  </Text>
                  <Text className="font-figtree-semibold text-xs text-[#232323]">
                    ₹{travelFee.toLocaleString('en-IN')}
                  </Text>
                </View>

                <View className="flex-row justify-between mb-3">
                  <Text className="font-figtree text-xs text-[#6C6C6C]">
                    Studio Platform Fee
                  </Text>
                  <Text className="font-figtree-semibold text-xs text-[#232323]">
                    ₹{platformFee.toLocaleString('en-IN')}
                  </Text>
                </View>

                <View className="flex-row justify-between pt-3 border-t border-[#2323231F]">
                  <Text className="font-figtree-bold text-base text-[#232323]">
                    Total Amount
                  </Text>
                  <Text className="font-figtree-bold text-xl text-[#00A03C]">
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </Text>
                </View>
              </View>
            </View>
          )}

          {/* STEP 5: PAYMENT SELECTION */}
          {step === 'payment' && (
            <View>
              <Text className="font-figtree-bold text-xl text-[#232323] mb-1">
                Choose Payment Method 💳
              </Text>
              <Text className="font-figtree text-xs text-[#6C6C6C] mb-4">
                Total Payable: ₹{totalAmount.toLocaleString('en-IN')}
              </Text>

              {paymentMethods.map((method) => {
                const isSelected = selectedPayment === method.id;
                return (
                  <TouchableOpacity
                    key={method.id}
                    onPress={() => setSelectedPayment(method.id)}
                    activeOpacity={0.88}
                    className={`p-4 rounded-2xl border mb-3 flex-row items-center ${
                      isSelected
                        ? 'border-[#232323] bg-[#23232308]'
                        : 'border-[#2323231F] bg-white'
                    }`}
                  >
                    <Text className="text-2xl mr-3">{method.icon}</Text>
                    <View className="flex-1">
                      <Text className="font-figtree-bold text-sm text-[#232323]">
                        {method.name}
                      </Text>
                      <Text className="font-figtree text-xs text-[#6C6C6C]">
                        {method.desc}
                      </Text>
                    </View>
                    <View
                      className={`w-5 h-5 rounded-full border items-center justify-center ${
                        isSelected
                          ? 'border-[#232323] bg-[#232323]'
                          : 'border-[#23232340]'
                      }`}
                    >
                      {isSelected && <View className="w-2 h-2 rounded-full bg-white" />}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}

          {/* STEP 6: CONFIRMED */}
          {step === 'confirmed' && (
            <View className="items-center py-6">
              <View className="w-20 h-20 rounded-full bg-emerald-100 items-center justify-center mb-4">
                <CheckCircleIcon size={48} color="#00A03C" />
              </View>

              <Text className="font-figtree-bold text-2xl text-[#232323] text-center mb-1">
                Booking Confirmed!
              </Text>
              <Text className="font-figtree text-sm text-[#6C6C6C] text-center mb-4">
                Your shoot with {photographer.name} is scheduled.
              </Text>

              <View className="p-4 bg-[#F8F9FA] rounded-2xl border border-[#23232314] w-full mb-6">
                <Text className="font-figtree-semibold text-xs text-[#6C6C6C] uppercase mb-1">
                  Booking Reference ID
                </Text>
                <Text className="font-figtree-bold text-xl text-[#232323] tracking-wider mb-3">
                  {confirmedBookingId}
                </Text>

                <View className="flex-row items-center mb-2">
                  <Text className="text-sm mr-2">📅</Text>
                  <Text className="font-figtree-medium text-xs text-[#232323]">
                    {selectedDate} at {selectedTime}
                  </Text>
                </View>

                <View className="flex-row items-center mb-2">
                  <Text className="text-sm mr-2">📸</Text>
                  <Text className="font-figtree-medium text-xs text-[#232323]">
                    {selectedService?.name}
                  </Text>
                </View>

                <View className="flex-row items-center">
                  <Text className="text-sm mr-2">💰</Text>
                  <Text className="font-figtree-bold text-xs text-[#00A03C]">
                    ₹{totalAmount.toLocaleString('en-IN')} (Paid via {selectedPayment.toUpperCase()})
                  </Text>
                </View>
              </View>

              <View className="w-full gap-3">
                <Button
                  title="View My Bookings"
                  onPress={() => router.replace('/(tabs)/bookings')}
                  size="lg"
                />
                <TouchableOpacity
                  onPress={() => router.replace('/(tabs)')}
                  className="py-3 items-center"
                >
                  <Text className="font-figtree-bold text-sm text-[#232323]">
                    Back to Home
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ScrollView>

        {/* Floating Bottom Action Bar */}
        {step !== 'confirmed' && (
          <View className="absolute bottom-0 left-0 right-0 px-5 py-3.5 bg-white border-t border-[#2323231F] flex-row items-center justify-between">
            <View className="mr-3">
              <Text className="font-figtree-semibold text-[10px] uppercase text-[#6C6C6C]">Total Payable</Text>
              <Text className="font-figtree-bold text-xl text-[#232323]">
                ₹{totalAmount.toLocaleString('en-IN')}
              </Text>
            </View>

            <View className="flex-1">
              {step === 'service' && (
                <Button
                  title="Continue to Date & Time"
                  onPress={handleNextFromService}
                  size="md"
                  fullWidth
                  rightIcon={<ChevronRightIcon size={16} color="#FFFFFF" />}
                />
              )}
              {step === 'datetime' && (
                <Button
                  title="Continue to Details"
                  onPress={handleNextFromDateTime}
                  size="md"
                  fullWidth
                  rightIcon={<ChevronRightIcon size={16} color="#FFFFFF" />}
                />
              )}
              {step === 'details' && (
                <Button
                  title="Review Booking"
                  onPress={handleNextFromDetails}
                  size="md"
                  fullWidth
                  rightIcon={<ChevronRightIcon size={16} color="#FFFFFF" />}
                />
              )}
              {step === 'summary' && (
                <Button
                  title="Proceed to Payment"
                  onPress={() => setStep('payment')}
                  size="md"
                  fullWidth
                  rightIcon={<ChevronRightIcon size={16} color="#FFFFFF" />}
                />
              )}
              {step === 'payment' && (
                <Button
                  title="Pay & Confirm"
                  onPress={handleConfirmPayment}
                  size="md"
                  fullWidth
                  rightIcon={<ChevronRightIcon size={16} color="#FFFFFF" />}
                />
              )}
            </View>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
