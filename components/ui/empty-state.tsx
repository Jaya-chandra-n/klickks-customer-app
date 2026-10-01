import React from 'react';
import { View, Text } from 'react-native';
import { Button } from './button';

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  className = '',
}: EmptyStateProps) {
  return (
    <View className={`items-center justify-center py-12 px-6 ${className}`}>
      {icon && (
        <View className="w-16 h-16 rounded-full bg-violet-50 dark:bg-violet-950/50 items-center justify-center mb-4">
          {icon}
        </View>
      )}

      <Text className="text-lg font-bold text-slate-900 dark:text-slate-100 text-center mb-2">
        {title}
      </Text>

      <Text className="text-sm text-slate-500 dark:text-slate-400 text-center mb-6 max-w-[280px] leading-5">
        {description}
      </Text>

      {actionLabel && onAction && (
        <Button title={actionLabel} onPress={onAction} size="sm" fullWidth={false} />
      )}
    </View>
  );
}
