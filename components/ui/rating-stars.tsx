import React from 'react';
import { View, Text } from 'react-native';
import { StarIcon } from '@/utils/icons';

export interface RatingStarsProps {
  rating: number;
  reviewCount?: number;
  size?: number;
  showText?: boolean;
  className?: string;
}

export function RatingStars({
  rating,
  reviewCount,
  size = 14,
  showText = true,
  className = '',
}: RatingStarsProps) {
  return (
    <View className={`flex-row items-center space-x-1 ${className}`}>
      <StarIcon size={size} color="#F59E0B" fill="#F59E0B" />
      {showText && (
        <Text className="text-sm font-semibold text-slate-900 dark:text-slate-100 ml-1">
          {rating.toFixed(1)}
        </Text>
      )}
      {reviewCount !== undefined && (
        <Text className="text-xs text-slate-500 dark:text-slate-400 ml-0.5">
          ({reviewCount})
        </Text>
      )}
    </View>
  );
}
