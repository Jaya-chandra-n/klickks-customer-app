import React from 'react';
import { Tabs } from 'expo-router';
import {
  HomeIcon,
  SearchIcon,
  BookingIcon,
  MessageIcon,
  PersonIcon,
} from '@/utils/icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#8C8C8C',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          minHeight: 72,
          height: 78,
          paddingTop: 8,
          paddingBottom: 10,
          borderTopColor: '#E6E6E6',
          borderTopWidth: 1,
          backgroundColor: '#FFFFFF',
        },
        tabBarItemStyle: {
          paddingVertical: 2,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Figtree_500Medium',
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color }) => <SearchIcon color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color }) => <BookingIcon color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color }) => <MessageIcon color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <PersonIcon color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}
