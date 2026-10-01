import React from 'react';
import { View, ViewProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';

export interface CardProps extends ViewProps {
  onPress?: () => void;
  className?: string;
}

export function Card({ children, onPress, className = '', style, ...props }: CardProps) {
  const baseClassName = `bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm ${className}`;

  if (onPress) {
    return (
      <TouchableOpacity
        className={baseClassName}
        onPress={onPress}
        activeOpacity={0.85}
        style={style}
        {...(props as TouchableOpacityProps)}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View className={baseClassName} style={style} {...props}>
      {children}
    </View>
  );
}
