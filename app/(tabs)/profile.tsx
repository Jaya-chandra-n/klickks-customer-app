import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useAuthStore } from '@/stores/auth';
import { ProfileAvatar } from '@/components/ui/profile-avatar';
import { ProfileSectionCard } from '@/components/ui/profile-section-card';
import { MenuCard, MenuRow, RowDivider, SectionTitle } from '@/components/ui/menu-primitives';
import { CUSTOMER_PROFILE_TABS, ProfileTabKey } from '@/components/ui/my-profile-tab-bar';
import {
  PersonalDetailsIcon,
  MessageIcon,
  HelpIcon,
} from '@/utils/icons';

export default function ProfileScreen() {
  const { customer, logout } = useAuthStore();
  const [activeSection, setActiveSection] = useState<ProfileTabKey>('profile');

  const [expandedCards, setExpandedCards] = useState({
    personal: true,
    contact: true,
  });

  const [name, setName] = useState(customer?.name ?? 'Jay');
  const [phone, setPhone] = useState(customer?.phone ?? '+91 98765 43210');
  const [email, setEmail] = useState(customer?.email ?? 'jay@email.com');
  const [location, setLocation] = useState(customer?.location ?? 'Bangalore, India');

  const toggleCard = (card: 'personal' | 'contact') => {
    setExpandedCards((prev) => ({ ...prev, [card]: !prev[card] }));
  };

  const handleLogout = async () => {
    await logout();
    router.replace('/(auth)/login');
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        {/* Combined Header & Pills in ONE Box matching Bookings Header */}
        <View className="px-5 py-4 bg-white border-b border-[#2323231F]">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="font-figtree-bold text-2xl text-[#232323]">
              My Profile
            </Text>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Help"
              style={({ pressed }) => ({
                width: 44,
                height: 44,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 22,
                opacity: pressed ? 0.7 : 1,
              })}
            >
              <HelpIcon size={36} color="#232323" />
            </Pressable>
          </View>

          {/* Profile Tab Switcher Pills */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: 'center' }}
          >
            {CUSTOMER_PROFILE_TABS.map((section) => {
              const isActive = activeSection === section.key;

              return (
                <TouchableOpacity
                  key={section.key}
                  onPress={() => setActiveSection(section.key)}
                  activeOpacity={0.82}
                  className={`mr-2 items-center justify-center rounded-full px-4 py-2.5 ${
                    isActive
                      ? 'border border-[#232323] bg-[#232323]'
                      : 'border border-[#2323231F] bg-white'
                  }`}
                >
                  <Text
                    className={`text-sm ${
                      isActive
                        ? 'font-figtree-semibold text-white'
                        : 'font-figtree-medium text-[#232323]'
                    }`}
                  >
                    {section.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 50 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Profile Avatar (220px x 220px) */}
          <ProfileAvatar initialImage={customer?.avatar} />

          {/* Active Section Content */}
          {activeSection === 'profile' && (
            <View className="pt-2 pb-4">
              <View className="mb-4">
                <ProfileSectionCard
                  title="Personal Details"
                  icon={<PersonalDetailsIcon size={22} color="#232323" />}
                  isExpanded={expandedCards.personal}
                  onToggle={() => toggleCard('personal')}
                >
                  <View className="pt-2">
                    <View className="mb-3">
                      <Text className="font-figtree text-xs text-[#232323]/60 mb-1">
                        Full Name
                      </Text>
                      <TextInput
                        className="h-12 border border-[#2323231F] rounded-xl px-4 font-figtree text-sm text-[#232323] bg-white"
                        value={name}
                        onChangeText={setName}
                      />
                    </View>
                    <View>
                      <Text className="font-figtree text-xs text-[#232323]/60 mb-1">
                        Location / City
                      </Text>
                      <TextInput
                        className="h-12 border border-[#2323231F] rounded-xl px-4 font-figtree text-sm text-[#232323] bg-white"
                        value={location}
                        onChangeText={setLocation}
                      />
                    </View>
                  </View>
                </ProfileSectionCard>
              </View>

              <View className="mb-4">
                <ProfileSectionCard
                  title="Contact Details"
                  icon={<MessageIcon size={22} color="#232323" />}
                  isExpanded={expandedCards.contact}
                  onToggle={() => toggleCard('contact')}
                >
                  <View className="pt-2">
                    <View className="mb-3">
                      <Text className="font-figtree text-xs text-[#232323]/60 mb-1">
                        Phone Number
                      </Text>
                      <TextInput
                        className="h-12 border border-[#2323231F] rounded-xl px-4 font-figtree text-sm text-[#232323] bg-white"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                      />
                    </View>
                    <View>
                      <Text className="font-figtree text-xs text-[#232323]/60 mb-1">
                        Email Address
                      </Text>
                      <TextInput
                        className="h-12 border border-[#2323231F] rounded-xl px-4 font-figtree text-sm text-[#232323] bg-white"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                      />
                    </View>
                  </View>
                </ProfileSectionCard>
              </View>

              {/* Menu Navigation Cards */}
              <View className="mb-4">
                <MenuCard>
                  <SectionTitle title="Quick Navigation" />
                  <MenuRow
                    label="My Bookings"
                    onPress={() => router.push('/(tabs)/bookings')}
                  />
                  <RowDivider />
                  <MenuRow
                    label="Saved Photographers"
                    onPress={() => router.push('/favorites')}
                  />
                  <RowDivider />
                  <MenuRow
                    label="Payment History"
                    onPress={() => setActiveSection('payments')}
                  />
                </MenuCard>
              </View>

              <View className="mb-4">
                <MenuCard>
                  <SectionTitle title="Legals & Terms" />
                  <MenuRow label="Terms and Conditions" onPress={() => {}} />
                  <RowDivider />
                  <MenuRow label="Privacy Policy" onPress={() => {}} />
                  <RowDivider />
                  <MenuRow label="User Data Deletion Policy" onPress={() => {}} />
                </MenuCard>
              </View>

              {/* Logout Button */}
              <Pressable
                onPress={handleLogout}
                className="h-14 rounded-2xl border border-[#E53935] justify-center items-center flex-row mt-2 bg-white"
                style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
              >
                <Text className="font-figtree-bold text-base text-[#E53935]">
                  Logout Account
                </Text>
              </Pressable>
            </View>
          )}

          {activeSection === 'bookings' && (
            <View className="pt-4">
              <MenuCard>
                <SectionTitle title="Bookings Overview" />
                <MenuRow
                  label="View All Upcoming & Past Bookings"
                  onPress={() => router.push('/(tabs)/bookings')}
                />
              </MenuCard>
            </View>
          )}

          {activeSection === 'favorites' && (
            <View className="pt-4">
              <MenuCard>
                <SectionTitle title="Saved Photographers" />
                <MenuRow
                  label="Go to Favorites List"
                  onPress={() => router.push('/favorites')}
                />
              </MenuCard>
            </View>
          )}

          {activeSection === 'payments' && (
            <View className="pt-4">
              <MenuCard>
                <SectionTitle title="Payment Methods & History" />
                <MenuRow label="Saved UPI IDs" onPress={() => {}} />
                <RowDivider />
                <MenuRow label="Cards & Net Banking" onPress={() => {}} />
                <RowDivider />
                <MenuRow label="Invoices & Receipts" onPress={() => {}} />
              </MenuCard>
            </View>
          )}

          {activeSection === 'settings' && (
            <View className="pt-4">
              <MenuCard>
                <SectionTitle title="Account Settings" />
                <MenuRow label="Login Details" onPress={() => {}} />
                <RowDivider />
                <MenuRow label="Security & Verification" onPress={() => {}} />
                <RowDivider />
                <MenuRow label="Notification Preferences" onPress={() => {}} />
              </MenuCard>

              <Pressable
                onPress={handleLogout}
                className="h-14 rounded-2xl border border-[#E53935] justify-center items-center flex-row mt-4 bg-white"
                style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
              >
                <Text className="font-figtree-bold text-base text-[#E53935]">
                  Logout Account
                </Text>
              </Pressable>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
