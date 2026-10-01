import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBookingsListStore } from '@/stores/bookings-list';
import { useSnackbarStore } from '@/stores/snackbar';
import { BackHeader } from '@/components/ui/back-header';
import { Badge, BadgeVariant } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  MessageSquareIcon,
  PhoneIcon,
  CloseCircle,
} from '@/utils/icons';

export default function BookingDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { bookings, cancelBooking } = useBookingsListStore();
  const { showSuccess } = useSnackbarStore();

  const booking = bookings.find((b) => b.id === id || b.bookingId === id) || bookings[0];

  const handleCancel = () => {
    cancelBooking(booking.id);
    showSuccess('Booking cancelled and refund initiated.');
  };

  const getStatusBadge = () => {
    let variant: BadgeVariant = 'slate';
    if (booking.status === 'completed') variant = 'emerald';
    if (booking.status === 'cancelled') variant = 'rose';
    return <Badge label={booking.status.toUpperCase()} variant={variant} />;
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <View className="px-4 border-b border-black/10">
        <BackHeader title={`Booking ${booking.bookingId}`} />
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }} className="flex-1 pb-24">
        {/* Status Header */}
        <View className="flex-row items-center justify-between bg-slate-50 p-4 rounded-2xl border border-black/10 mb-5">
          <View>
            <Text className="font-figtree-bold text-[10px] uppercase text-slate-400">Current Status</Text>
            <Text className="font-figtree-bold text-base text-[#232323] mt-0.5">
              {booking.status === 'upcoming'
                ? 'Confirmed & Upcoming'
                : booking.status === 'completed'
                ? 'Successfully Completed'
                : 'Cancelled & Refunded'}
            </Text>
          </View>
          {getStatusBadge()}
        </View>

        {/* Photographer Card */}
        <View className="bg-white p-4 rounded-2xl border border-black/10 mb-5">
          <Text className="font-figtree-bold text-xs text-slate-400 uppercase mb-3">Photographer Details</Text>
          <View className="flex-row items-center">
            <Image
              source={{ uri: booking.photographerAvatar }}
              className="w-14 h-14 rounded-2xl"
            />
            <View className="ml-3 flex-1">
              <Text className="font-figtree-bold text-base text-[#232323]">
                {booking.photographerName}
              </Text>
              <Text className="font-figtree-semibold text-xs text-[#232323]/60 mt-0.5">
                {booking.serviceName}
              </Text>
            </View>
          </View>

          <View className="flex-row gap-3 mt-4 pt-3 border-t border-black/10">
            <TouchableOpacity
              onPress={() => router.push('/chat/conv1')}
              className="flex-1 flex-row items-center justify-center py-2.5 bg-[#232323] rounded-xl"
            >
              <MessageSquareIcon size={16} color="#FFFFFF" />
              <Text className="font-figtree-bold text-xs text-white ml-2">Chat</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 flex-row items-center justify-center py-2.5 bg-slate-100 rounded-xl border border-black/10">
              <PhoneIcon size={16} color="#232323" />
              <Text className="font-figtree-bold text-xs text-[#232323] ml-2">
                Call
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Event Schedule */}
        <View className="bg-white p-4 rounded-2xl border border-black/10 mb-5 gap-3">
          <Text className="font-figtree-bold text-xs text-slate-400 uppercase mb-1">Shoot Schedule</Text>

          <View className="flex-row items-center">
            <CalendarIcon size={16} color="#232323" />
            <Text className="font-figtree-semibold text-xs text-[#232323] ml-2.5">
              Date: {booking.date}
            </Text>
          </View>

          <View className="flex-row items-center">
            <ClockIcon size={16} color="#232323" />
            <Text className="font-figtree-semibold text-xs text-[#232323] ml-2.5">
              Time: {booking.time}
            </Text>
          </View>

          <View className="flex-row items-center">
            <MapPinIcon size={16} color="#6C6C6C" />
            <Text className="font-figtree-medium text-xs text-[#232323] ml-2.5 flex-1">
              Venue: {booking.location}
            </Text>
          </View>

          {booking.eventNotes ? (
            <View className="pt-2 border-t border-black/10">
              <Text className="font-figtree-bold text-[10px] text-slate-400 uppercase">Notes</Text>
              <Text className="font-figtree text-xs text-[#232323]/70 mt-0.5">
                {booking.eventNotes}
              </Text>
            </View>
          ) : null}
        </View>

        {/* Pricing Summary */}
        <View className="bg-white p-4 rounded-2xl border border-black/10 mb-6 gap-2">
          <Text className="font-figtree-bold text-xs text-slate-400 uppercase mb-1">Payment Breakdown</Text>

          <View className="flex-row justify-between py-0.5">
            <Text className="font-figtree text-xs text-slate-500">Service Fee</Text>
            <Text className="font-figtree-semibold text-xs text-[#232323]">
              ₹{booking.servicePrice.toLocaleString('en-IN')}
            </Text>
          </View>

          <View className="flex-row justify-between py-0.5">
            <Text className="font-figtree text-xs text-slate-500">Travel & Logistics</Text>
            <Text className="font-figtree-semibold text-xs text-[#232323]">
              ₹{booking.travelFee.toLocaleString('en-IN')}
            </Text>
          </View>

          <View className="flex-row justify-between py-0.5">
            <Text className="font-figtree text-xs text-slate-500">Platform Fee</Text>
            <Text className="font-figtree-semibold text-xs text-[#232323]">
              ₹{booking.platformFee.toLocaleString('en-IN')}
            </Text>
          </View>

          <View className="flex-row justify-between pt-2 border-t border-black/10">
            <Text className="font-figtree-bold text-sm text-[#232323]">Total Paid</Text>
            <Text className="font-figtree-bold text-base text-[#232323]">
              ₹{booking.totalAmount.toLocaleString('en-IN')}
            </Text>
          </View>
        </View>

        {/* Cancel Action */}
        {booking.status === 'upcoming' && (
          <Button
            title="Cancel Booking"
            variant="danger"
            onPress={handleCancel}
            leftIcon={<CloseCircle size={18} color="#FFFFFF" />}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
