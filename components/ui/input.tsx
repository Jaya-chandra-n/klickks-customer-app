import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  containerClassName?: string;
}

export function Input({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  onRightIconPress,
  containerClassName = '',
  className = '',
  onFocus,
  onBlur,
  secureTextEntry,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  return (
    <View className={`w-full mb-4 ${containerClassName}`}>
      {label && (
        <Text className="text-sm font-medium text-[#232323]/70 dark:text-slate-300 mb-2">
          {label}
        </Text>
      )}

      <View
        className={`flex-row items-center px-4 rounded-xl border bg-white dark:bg-slate-900 h-14 ${
          error
            ? 'border-[#E53935]'
            : isFocused
            ? 'border-[#232323] dark:border-slate-100'
            : 'border-[#232323]/60 dark:border-slate-800'
        }`}
      >
        {leftIcon && <View className="mr-3">{leftIcon}</View>}

        <TextInput
          className={`flex-1 text-base text-[#232323] dark:text-slate-100 py-2 ${className}`}
          placeholderTextColor="#8C8C8C"
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={secureTextEntry}
          {...props}
        />

        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            disabled={!onRightIconPress}
            className="ml-3"
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>

      {error ? (
        <Text className="text-xs text-[#E53935] mt-1.5 font-medium">{error}</Text>
      ) : helperText ? (
        <Text className="text-xs text-[#232323]/50 dark:text-slate-400 mt-1.5">
          {helperText}
        </Text>
      ) : null}
    </View>
  );
}
