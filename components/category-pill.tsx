import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Category } from '@/data/categories';

export interface CategoryPillProps {
  category: Category;
  selected?: boolean;
  onPress: () => void;
  className?: string;
}

export function CategoryPill({
  category,
  selected = false,
  onPress,
  className = '',
}: CategoryPillProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.82}
      className={`mr-2.5 flex-row items-center justify-center rounded-full px-4 py-2.5 ${
        selected
          ? 'border border-[#232323] bg-[#232323]'
          : 'border border-[#2323231F] bg-white'
      } ${className}`}
    >
      <Text className="text-sm mr-1.5">{category.icon}</Text>
      <Text
        className={`text-sm ${
          selected
            ? 'font-figtree-semibold text-white'
            : 'font-figtree-medium text-[#232323]'
        }`}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}
