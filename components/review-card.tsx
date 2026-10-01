import React from 'react';
import { View, Text } from 'react-native';
import { Review } from '@/data/reviews';
import { Avatar } from './ui/avatar';
import { RatingStars } from './ui/rating-stars';

export interface ReviewCardProps {
  review: Review;
  className?: string;
}

export function ReviewCard({ review, className = '' }: ReviewCardProps) {
  return (
    <View
      className={`bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 mb-3 ${className}`}
    >
      <View className="flex-row items-center justify-between mb-2">
        <View className="flex-row items-center space-x-3">
          <Avatar url={review.avatar} name={review.customerName} size="sm" />
          <View className="ml-2">
            <Text className="text-sm font-bold text-slate-900 dark:text-slate-100">
              {review.customerName}
            </Text>
            <Text className="text-[10px] text-slate-400">{review.date}</Text>
          </View>
        </View>

        <RatingStars rating={review.rating} showText={false} />
      </View>

      <Text className="text-xs text-slate-600 dark:text-slate-300 leading-5">
        "{review.comment}"
      </Text>
    </View>
  );
}
