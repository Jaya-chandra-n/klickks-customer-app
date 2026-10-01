import { Platform } from 'react-native';

const tintColorLight = '#232323';
const tintColorDark = '#FFFFFF';

export const Colors = {
  light: {
    text: '#11181C',
    textMuted: '#6C6C6C',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    card: '#FFFFFF',
    border: '#232323',
    borderMuted: 'rgba(35, 35, 35, 0.1)',
    tabBarBorder: '#E6E6E6',
    tabBarBackground: '#FFFFFF',
    tabBarActive: '#232323',
    tabBarInactive: '#8C8C8C',
    iconStroke: '#232323',
    buttonPrimary: '#232323',
    buttonPrimaryText: '#FFFFFF',
    buttonSecondaryBorder: 'rgba(35, 35, 35, 0.6)',
    buttonSecondaryText: '#232323',
    promoBackground: '#232323',
    promoText: '#FFFFFF',
    promoSubtleText: 'rgba(255, 255, 255, 0.8)',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#8C8C8C',
    tabIconSelected: '#232323',
  },
  dark: {
    text: '#FFFFFF',
    textMuted: '#A6ADB2',
    background: '#202427',
    surface: '#202427',
    card: '#000000',
    border: '#FFFFFF',
    borderMuted: 'rgba(236, 237, 238, 0.2)',
    tabBarBorder: '#2B2F33',
    tabBarBackground: '#202427',
    tabBarActive: '#FFFFFF',
    tabBarInactive: '#9BA1A6',
    iconStroke: '#ECEDEE',
    buttonPrimary: '#FFFFFF',
    buttonPrimaryText: '#232323',
    buttonSecondaryBorder: 'rgba(236, 237, 238, 0.6)',
    buttonSecondaryText: '#ECEDEE',
    promoBackground: '#FFFFFF',
    promoText: '#232323',
    promoSubtleText: '#232323',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'Figtree',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
});
