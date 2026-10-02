import React from 'react';
import { Platform } from 'react-native';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  HomeIcon,
  SearchIcon,
  BookingIcon,
  MessageIcon,
  PersonIcon,
} from '@/utils/icons';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  // Dynamic bottom padding to handle Android gesture bars, hardware keys & iOS Home indicator
  const bottomInset = insets.bottom > 0 ? insets.bottom : 8;
  const tabHeight = Platform.OS === 'ios' ? 56 + insets.bottom : 64 + bottomInset;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#232323',
        tabBarInactiveTintColor: '#8C8C8C',
        tabBarHideOnKeyboard: true,
        tabBarAllowFontScaling: false,
        tabBarStyle: {
          height: tabHeight,
          paddingTop: 6,
          paddingBottom: bottomInset,
          borderTopColor: '#2323231A',
          borderTopWidth: 1,
          backgroundColor: '#FFFFFF',
          elevation: 10,
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.06,
          shadowRadius: 10,
        },
        tabBarItemStyle: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 0,
          marginHorizontal: 0,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: 'Figtree_600SemiBold',
          letterSpacing: -0.2,
          marginTop: 2,
          paddingHorizontal: 0,
          marginHorizontal: 0,
          textAlign: 'center',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={22} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <SearchIcon color={color} size={22} />,
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color }) => <BookingIcon color={color} size={22} />,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color }) => <MessageIcon color={color} size={22} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <PersonIcon color={color} size={22} />,
        }}
      />
    </Tabs>
  );
}

