import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { BackIcon, HelpIcon } from '@/utils/icons';

export function MyProfileHeader({
  title = 'My Profile',
  showBack = false,
  onBack,
}: {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
}) {
  const handleBack = onBack ?? (() => router.back());

  return (
    <View className="px-5 py-4 bg-white border-b border-[#2323231F]">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-3">
          {showBack && (
            <Pressable
              onPress={handleBack}
              accessibilityRole="button"
              accessibilityLabel="Go back"
              style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
            >
              <BackIcon size={40} color="#232323" />
            </Pressable>
          )}
          <Text className="font-figtree-bold text-2xl text-[#232323]">
            {title}
          </Text>
        </View>

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
    </View>
  );
}
