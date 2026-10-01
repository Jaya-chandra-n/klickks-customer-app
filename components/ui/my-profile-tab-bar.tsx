import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

export type ProfileTabKey = 'profile' | 'bookings' | 'favorites' | 'payments' | 'settings';

export type ProfileTabItem = {
  key: ProfileTabKey;
  label: string;
};

export const CUSTOMER_PROFILE_TABS: ProfileTabItem[] = [
  { key: 'profile', label: 'Profile Details' },
  { key: 'bookings', label: 'My Bookings' },
  { key: 'favorites', label: 'Saved Photographers' },
  { key: 'payments', label: 'Payment Details' },
  { key: 'settings', label: 'Account Settings' },
];

type Props = {
  activeSection: ProfileTabKey;
  onPress: (section: ProfileTabKey) => void;
};

export function MyProfileTabBar({ activeSection, onPress }: Props) {
  return (
    <View className="justify-center pb-3 pt-2 mb-2 bg-white border-b border-[#2323231F]">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          alignItems: 'center',
        }}
      >
        {CUSTOMER_PROFILE_TABS.map((section) => {
          const isActive = activeSection === section.key;

          return (
            <Pressable
              key={section.key}
              onPress={() => onPress(section.key)}
              className={`mr-2 items-center justify-center rounded-full px-4 py-2.5 ${
                isActive
                  ? 'border border-[#232323] bg-[#232323]'
                  : 'border border-[#2323231F] bg-white'
              }`}
              style={({ pressed }) => ({
                opacity: pressed ? 0.82 : 1,
              })}
            >
              <Text
                className={`text-sm ${
                  isActive
                    ? 'font-figtree-semibold text-white'
                    : 'font-figtree-medium text-[#232323]'
                }`}
              >
                {section.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}
