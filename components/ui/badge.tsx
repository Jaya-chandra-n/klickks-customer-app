import React from 'react';
import { View, Text } from 'react-native';

export type BadgeVariant = 'violet' | 'amber' | 'emerald' | 'rose' | 'slate' | 'sky';

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export function Badge({
  label,
  variant = 'slate',
  size = 'md',
  icon,
  className = '',
}: BadgeProps) {
  const getContainerStyle = () => {
    let style = 'flex-row items-center rounded-full self-start ';
    style += size === 'sm' ? 'px-2.5 py-0.5 ' : 'px-3 py-1 ';

    switch (variant) {
      case 'emerald':
        style += 'bg-black text-white dark:bg-white ';
        break;
      case 'rose':
        style += 'bg-slate-100 text-black border border-black/10 ';
        break;
      case 'slate':
      default:
        style += 'bg-black text-white dark:bg-white ';
        break;
    }

    return style;
  };

  const getTextStyle = () => {
    let style = 'font-bold ';
    style += size === 'sm' ? 'text-[10px] ' : 'text-xs ';

    switch (variant) {
      case 'rose':
        style += 'text-black dark:text-white ';
        break;
      case 'emerald':
      case 'slate':
      default:
        style += 'text-white dark:text-black ';
        break;
    }

    return style;
  };

  return (
    <View className={`${getContainerStyle()} ${className}`}>
      {icon && <View className="mr-1">{icon}</View>}
      <Text className={getTextStyle()}>{label}</Text>
    </View>
  );
}
