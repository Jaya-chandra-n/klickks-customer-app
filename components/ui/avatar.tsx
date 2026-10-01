import React from 'react';
import { View, Image, Text } from 'react-native';

export interface AvatarProps {
  url?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Avatar({ url, name = '', size = 'md', className = '' }: AvatarProps) {
  const getSizeStyle = () => {
    switch (size) {
      case 'sm':
        return 'w-8 h-8 rounded-full';
      case 'lg':
        return 'w-14 h-14 rounded-full';
      case 'xl':
        return 'w-20 h-20 rounded-full';
      case 'md':
      default:
        return 'w-10 h-10 rounded-full';
    }
  };

  const getInitials = (n: string) => {
    if (!n) return 'U';
    const parts = n.split(' ');
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return n.slice(0, 2).toUpperCase();
  };

  if (url) {
    return (
      <Image
        source={{ uri: url }}
        className={`${getSizeStyle()} bg-slate-200 dark:bg-slate-800 ${className}`}
        resizeMode="cover"
      />
    );
  }

  return (
    <View
      className={`${getSizeStyle()} bg-violet-100 dark:bg-violet-950 items-center justify-center border border-violet-200 dark:border-violet-800 ${className}`}
    >
      <Text className="text-xs font-bold text-violet-700 dark:text-violet-300">
        {getInitials(name)}
      </Text>
    </View>
  );
}
