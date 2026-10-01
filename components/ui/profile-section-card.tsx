import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { MinusIcon } from '@/components/icons/menu-icons';

interface ProfileSectionCardProps {
  title: string;
  icon: React.ReactElement<SvgProps>;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ProfileSectionCard({
  title,
  icon,
  children,
  isExpanded,
  onToggle,
}: ProfileSectionCardProps) {
  return (
    <View
      className="rounded-[20px] border border-[#23232314] bg-white"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 12,
        elevation: 4,
      }}
    >
      <Pressable
        className="flex-row items-center justify-between p-4"
        onPress={onToggle}
        accessibilityRole="button"
        accessibilityLabel={`${isExpanded ? 'Collapse' : 'Expand'} ${title}`}
      >
        <View className="flex-row items-center gap-3">
          {icon}
          <Text className="font-figtree-semibold text-base text-[#232323]">
            {title}
          </Text>
        </View>
        {isExpanded && (
          <MinusIcon
            size={24}
            color="#292D32"
          />
        )}
      </Pressable>

      {isExpanded && <View className="px-4 pb-4">{children}</View>}
    </View>
  );
}
