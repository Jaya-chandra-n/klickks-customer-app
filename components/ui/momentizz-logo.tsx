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
  const fontSize = size === 'sm' ? 12.5 : size === 'lg' ? 22 : size === 'xl' ? 30 : 16;

  return (
    <View style={{ flexShrink: 0, alignItems: 'flex-start' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text
          numberOfLines={1}
          allowFontScaling={false}
          adjustsFontSizeToFit={true}
          minimumFontScale={0.7}
          style={{
            fontFamily: 'Unbounded_900Black',
            fontSize: fontSize,
            color: color,
            letterSpacing: -0.6,
          }}
        >
          MOMENTZZ
        </Text>
      </View>
      {showTagline && (
        <Text
          numberOfLines={1}
          allowFontScaling={false}
          adjustsFontSizeToFit={true}
          minimumFontScale={0.7}
          style={{
            fontFamily: 'Figtree_600SemiBold',
            fontSize: size === 'sm' ? 8.5 : 9.5,
            color: color === '#232323' ? '#6C6C6C' : 'rgba(255,255,255,0.7)',
            letterSpacing: 0.1,
            marginTop: 1,
          }}
        >
          Discover. Book. Capture.
        </Text>
      )}
    </View>
  );
}

