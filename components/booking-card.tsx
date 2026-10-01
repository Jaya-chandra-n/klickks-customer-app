import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Booking } from '@/data/bookings';
import { Avatar } from './ui/avatar';
import { Badge, BadgeVariant } from './ui/badge';
import { CalendarIcon, ClockIcon, MapPinIcon, MessageSquareIcon, ChevronRightIcon } from '@/utils/icons';

export interface BookingCardProps {
  booking: Booking;
  onPress: () => void;
  onMessagePress?: () => void;
  className?: string;
}

export function BookingCard({
  booking,
  onPress,
  onMessagePress,
  className = '',
}: BookingCardProps) {
  const getStatusBadge = () => {
    let variant: BadgeVariant = 'slate';
    let label = 'Upcoming';

    if (booking.status === 'completed') {
      variant = 'emerald';
      label = 'Completed';
    } else if (booking.status === 'cancelled') {
      variant = 'rose';
      label = 'Cancelled';
    }

    return <Badge label={label} variant={variant} size="sm" />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      className={`bg-white rounded-[20px] p-4 border border-[#23232314] mb-4 ${className}`}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 12,
        elevation: 4,
      }}
    >
      <View className="flex-row items-center justify-between pb-3 border-b border-[#2323231F]">
        <View className="flex-row items-center space-x-2">
          <Text className="font-figtree-semibold text-xs text-[#232323]/50">ID: {booking.bookingId}</Text>
        </View>
        {getStatusBadge()}
      </View>

      <View className="flex-row items-center my-3">
        <Avatar
          url={booking.photographerAvatar}
          name={booking.photographerName}
          size="lg"
        />
        <View className="ml-3 flex-1">
          <Text className="font-figtree-bold text-base text-[#232323]" numberOfLines={1}>
            {booking.photographerName}
          </Text>
          <Text className="font-figtree-semibold text-xs text-[#232323]/70 mt-0.5">
            {booking.serviceName}
          </Text>
        </View>
        <ChevronRightIcon size={20} color="#232323" />
      </View>

      <View className="bg-slate-50 p-3 rounded-xl space-y-2 mb-3 border border-[#23232314]">
        <View className="flex-row items-center">
          <CalendarIcon size={14} color="#232323" />
          <Text className="font-figtree-semibold text-xs text-[#232323] ml-2">
            {booking.date}
          </Text>
          <View className="mx-2 w-1 h-1 rounded-full bg-[#232323]/30" />
          <ClockIcon size={14} color="#232323" />
          <Text className="font-figtree-semibold text-xs text-[#232323] ml-2">
            {booking.time}
          </Text>
        </View>

        <View className="flex-row items-center mt-1">
          <MapPinIcon size={14} color="#6C6C6C" />
          <Text className="font-figtree text-xs text-[#232323]/60 ml-2" numberOfLines={1}>
            {booking.location}
          </Text>
        </View>
      </View>

      <View className="flex-row items-center justify-between pt-1">
        <View>
          <Text className="font-figtree-semibold text-[10px] uppercase text-[#232323]/50">Total Paid</Text>
          <Text className="font-figtree-bold text-base text-[#232323]">
            ₹{booking.totalAmount.toLocaleString('en-IN')}
          </Text>
        </View>

        {booking.status === 'upcoming' && onMessagePress && (
          <TouchableOpacity
            onPress={onMessagePress}
            className="flex-row items-center bg-[#232323] px-4 py-2.5 rounded-full"
            activeOpacity={0.7}
          >
            <MessageSquareIcon size={14} color="#FFFFFF" />
            <Text className="font-figtree-bold text-xs text-white ml-1.5">
              Message
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}
