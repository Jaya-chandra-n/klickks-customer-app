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
  const fontSize = size === 'sm' ? 14 : size === 'lg' ? 24 : size === 'xl' ? 32 : 18;

  return (
    <View style={{ flexShrink: 1, alignItems: 'flex-start' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text
          numberOfLines={1}
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
          numberOfLines={1}
          style={{
            fontFamily: 'Figtree_600SemiBold',
            fontSize: 9.5,
            color: color === '#232323' ? '#6C6C6C' : 'rgba(255,255,255,0.7)',
            letterSpacing: 1.0,
            marginTop: 1,
          }}
        >
          Discover. Book. Capture.
        </Text>
      )}
    </View>
  );
}
