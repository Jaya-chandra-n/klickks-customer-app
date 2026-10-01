import React from 'react';
import {
  Pressable,
  Text,
  ActivityIndicator,
  PressableProps,
  View,
} from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends PressableProps {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export function Button({
  title,
  variant = 'primary',
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = true,
  disabled,
  style,
  className = '',
  ...props
}: ButtonProps) {
  const getContainerStyle = () => {
    let base = 'flex-row items-center justify-center rounded-2xl border ';

    if (fullWidth) base += 'w-full ';

    // Sizes
    switch (size) {
      case 'sm':
        base += 'px-4 py-2.5 h-11 ';
        break;
      case 'lg':
        base += 'px-6 py-4 h-14 ';
        break;
      case 'md':
      default:
        base += 'px-5 py-3.5 h-13 ';
        break;
    }

    // Pure Black & White Studio Theme
    switch (variant) {
      case 'secondary':
      case 'outline':
        base += 'bg-white border-[#000000] dark:bg-slate-900 dark:border-slate-100 ';
        break;
      case 'ghost':
        base += 'bg-transparent border-transparent ';
        break;
      case 'danger':
        base += 'bg-[#E53935] border-[#E53935] ';
        break;
      case 'primary':
      default:
        base += 'bg-[#000000] border-[#000000] dark:bg-white dark:border-white ';
        break;
    }

    if (disabled || loading) {
      base += 'opacity-45 ';
    }

    return base;
  };

  const getTextStyle = () => {
    let base = 'font-bold text-center ';

    switch (size) {
      case 'sm':
        base += 'text-xs ';
        break;
      case 'lg':
        base += 'text-base ';
        break;
      case 'md':
      default:
        base += 'text-sm ';
        break;
    }

    switch (variant) {
      case 'secondary':
      case 'outline':
      case 'ghost':
        base += 'text-[#000000] dark:text-white ';
        break;
      case 'danger':
        base += 'text-white ';
        break;
      case 'primary':
      default:
        base += 'text-white dark:text-black ';
        break;
    }

    return base;
  };

  return (
    <Pressable
      className={`${getContainerStyle()} ${className}`}
      disabled={disabled || loading}
      style={({ pressed }) => [
        pressed && !disabled && !loading ? { opacity: 0.85 } : {},
        typeof style === 'function' ? style({ pressed }) : style,
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? '#FFFFFF' : '#000000'}
        />
      ) : (
        <View className="flex-row items-center justify-center space-x-2">
          {leftIcon && <View className="mr-2">{leftIcon}</View>}
          <Text className={getTextStyle()}>{title}</Text>
          {rightIcon && <View className="ml-2">{rightIcon}</View>}
        </View>
      )}
    </Pressable>
  );
}
