import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { BackIcon, HelpIcon } from '@/utils/icons';

export interface BackHeaderProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  rightAction?: React.ReactNode;
  transparent?: boolean;
  hideBack?: boolean;
  hideRightAction?: boolean;
  noBorder?: boolean;
}

export function BackHeader({
  title,
  subtitle,
  onBack,
  rightAction,
  transparent = false,
  hideBack = false,
  hideRightAction = false,
  noBorder = false,
}: BackHeaderProps) {
  const router = useRouter();
  const handleBack = onBack ?? (() => router.back());

  if (transparent) {
    return (
      <View className="flex-row items-center justify-between px-5 py-3 bg-transparent">
        <View className="flex-row items-center gap-3 flex-1 mr-2">
          <Pressable
            onPress={handleBack}
            hitSlop={12}
            accessibilityLabel="Go back"
            accessibilityRole="button"
            style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
          >
            <BackIcon size={40} color="#232323" />
          </Pressable>
          <View className="flex-1">
            <Text className="font-figtree-bold text-2xl text-[#232323]" numberOfLines={1}>
              {title}
            </Text>
            {subtitle ? (
              <Text className="font-figtree text-xs text-[#232323]/60" numberOfLines={1}>
                {subtitle}
              </Text>
            ) : null}
          </View>
        </View>
        {rightAction ? (
          <View>{rightAction}</View>
        ) : (
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
        )}
      </View>
    );
  }

  return (
    <View className={`flex-row items-center justify-between px-5 py-4 bg-white ${noBorder ? '' : 'border-b border-[#2323231F]'}`}>
      <View className="flex-row items-center gap-3 flex-1 mr-2">
        {!hideBack && (
          <Pressable
            onPress={handleBack}
            hitSlop={12}
            accessibilityLabel="Go back"
            accessibilityRole="button"
            style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
          >
            <BackIcon size={40} color="#232323" />
          </Pressable>
        )}
        <View className="flex-1">
          <Text className="font-figtree-bold text-2xl text-[#232323]" numberOfLines={1}>
            {title}
          </Text>
          {subtitle ? (
            <Text className="font-figtree text-xs text-[#232323]/60" numberOfLines={1}>
              {subtitle}
            </Text>
          ) : null}
        </View>
      </View>

      {rightAction ? (
        <View>{rightAction}</View>
      ) : !hideRightAction ? (
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
      ) : null}
    </View>
  );
}
