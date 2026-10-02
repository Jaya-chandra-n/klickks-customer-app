import React from 'react';
import { View, Text } from 'react-native';

export interface MomentizzLogoProps {
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export function MomentizzLogo({
  color = '#232323',
  size = 'md',
  showTagline = false,
}: MomentizzLogoProps) {
  const fontSize = size === 'sm' ? 16 : size === 'lg' ? 26 : size === 'xl' ? 34 : 21;

  return (
    <View className="items-start">
      <View className="flex-row items-center" style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text
          style={{
            fontFamily: 'Unbounded_900Black',
            fontSize: fontSize,
            color: color,
            letterSpacing: -0.5,
          }}
        >
          MOMENTIZZ
        </Text>
        
      </View>
      {showTagline && (
        <Text
          style={{
            fontFamily: 'Figtree_600SemiBold',
            fontSize: Math.max(10, fontSize * 0.38),
            color: color === '#232323' ? '#6C6C6C' : 'rgba(255,255,255,0.7)',
            letterSpacing: 1.2,
            marginTop: 2,
          }}
        >
          Discover. Book. Capture.
        </Text>
      )}
    </View>
  );
}
