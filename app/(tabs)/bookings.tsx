import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBookingsListStore } from '@/stores/bookings-list';
import { BookingCard } from '@/components/booking-card';
import { EmptyState } from '@/components/ui/empty-state';
import { CalendarIcon, HelpIcon } from '@/utils/icons';

type BookingTab = 'upcoming' | 'completed' | 'cancelled';

export default function BookingsScreen() {
  const router = useRouter();
  const { bookings } = useBookingsListStore();
  const [activeTab, setActiveTab] = useState<BookingTab>('upcoming');

  const filteredBookings = bookings.filter((b) => b.status === activeTab);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header matching Profile header (No Shadows) */}
      <View className="px-5 py-4 bg-white border-b border-[#2323231F]">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="font-figtree-bold text-2xl text-[#232323]">
            My Bookings
          </Text>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Help"
            style={({ pressed }) => ({
              width: 44,
              height: 44,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 22,
              opacity: pressed ? 0.7 : 1,
            })}
          >
            <HelpIcon size={36} color="#232323" />
          </Pressable>
        </View>

        {/* Tab Switcher Pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center' }}
        >
          <TouchableOpacity
            onPress={() => setActiveTab('upcoming')}
            className={`mr-2.5 items-center justify-center rounded-full px-5 py-3 ${
              activeTab === 'upcoming'
                ? 'border border-[#232323] bg-[#232323]'
                : 'border border-[#2323231F] bg-white'
            }`}
          >
            <Text
              className={`text-[14px] ${
                activeTab === 'upcoming'
                  ? 'font-figtree-bold text-white'
                  : 'font-figtree-medium text-[#232323]'
              }`}
            >
              Upcoming ({bookings.filter((b) => b.status === 'upcoming').length})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab('completed')}
            className={`mr-2.5 items-center justify-center rounded-full px-5 py-3 ${
              activeTab === 'completed'
                ? 'border border-[#232323] bg-[#232323]'
                : 'border border-[#2323231F] bg-white'
            }`}
          >
            <Text
              className={`text-[14px] ${
                activeTab === 'completed'
                  ? 'font-figtree-bold text-white'
                  : 'font-figtree-medium text-[#232323]'
              }`}
            >
              Completed ({bookings.filter((b) => b.status === 'completed').length})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab('cancelled')}
            className={`mr-2.5 items-center justify-center rounded-full px-5 py-3 ${
              activeTab === 'cancelled'
                ? 'border border-[#232323] bg-[#232323]'
                : 'border border-[#2323231F] bg-white'
            }`}
          >
            <Text
              className={`text-[14px] ${
                activeTab === 'cancelled'
                  ? 'font-figtree-bold text-white'
                  : 'font-figtree-medium text-[#232323]'
              }`}
            >
              Cancelled ({bookings.filter((b) => b.status === 'cancelled').length})
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Bookings List */}
      <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>
        {filteredBookings.length > 0 ? (
          filteredBookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              onPress={() => router.push(`/booking-detail/${booking.id}`)}
              onMessagePress={() => router.push(`/chat/conv1`)}
            />
          ))
        ) : (
          <EmptyState
            icon={<CalendarIcon size={28} color="#232323" />}
            title={`No ${activeTab} bookings`}
            description={
              activeTab === 'upcoming'
                ? 'You do not have any upcoming photo shoot bookings right now.'
                : `You have no ${activeTab} bookings in your history.`
            }
            actionLabel={activeTab === 'upcoming' ? 'Discover Photographers' : undefined}
            onAction={
              activeTab === 'upcoming' ? () => router.push('/(tabs)/explore') : undefined
            }
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
