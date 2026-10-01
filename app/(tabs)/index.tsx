import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { photographers } from '@/data/photographers';
import { categories } from '@/data/categories';
import { PhotographerCard } from '@/components/photographer-card';
import { CategoryPill } from '@/components/category-pill';
import { Avatar } from '@/components/ui/avatar';
import { LocationModal } from '@/components/ui/location-modal';
import { useAuthStore } from '@/stores/auth';
import { useLocationStore } from '@/stores/location';
import {
  KlickksLogo,
  StudioLogo,
  SearchIcon,
  LocationIcon,
  HeartIcon,
  SlidersIcon,
  ArrowDownIcon,
  SparklesIcon,
  HelpIcon,
} from '@/utils/icons';

export default function HomeScreen() {
  const router = useRouter();
  const { customer } = useAuthStore();
  const { selectedCity, activeDeliveryLocation, loadLocation } = useLocationStore();

  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  useEffect(() => {
    loadLocation();
  }, [loadLocation]);

  // Filter photographers by selected city (or all if selectedCity is 'All Cities')
  const cityPhotographers =
    selectedCity === 'All Cities'
      ? photographers
      : photographers.filter(
          (p) =>
            p.city.toLowerCase() === selectedCity.toLowerCase() ||
            p.deliverLocations?.some((loc) => loc.toLowerCase().includes(selectedCity.toLowerCase()))
        );

  const displayPhotographers = cityPhotographers.length > 0 ? cityPhotographers : photographers;
  const featuredPhotographers = displayPhotographers.filter((p) => p.rating >= 4.7);
  const offerPhotographers = displayPhotographers.filter((p) => !!p.offerTag);

  const handleCategoryPress = (catName: string) => {
    setSelectedCat(catName);
    router.push({ pathname: '/(tabs)/explore', params: { category: catName } });
  };

  const activeLocationLabel = activeDeliveryLocation
    ? `${activeDeliveryLocation.area}, ${activeDeliveryLocation.city}`
    : selectedCity;

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Studio Header matching Profile Header */}
      <View className="px-5 py-4 bg-white border-b border-[#2323231F]">
        <View className="flex-row items-center justify-between mb-3">
          <View className="gap-0.5">
            <KlickksLogo color="#232323" />
            <StudioLogo color="#232323" />
          </View>

          {/* Right Action Icons with explicit 12px gap spacing */}
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <TouchableOpacity
              onPress={() => router.push('/favorites')}
              className="w-10 h-10 rounded-full bg-[#F8F9FA] items-center justify-center border border-[#23232314]"
              activeOpacity={0.7}
            >
              <HeartIcon size={18} color="#232323" fill="#232323" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/(tabs)/profile')}
              activeOpacity={0.8}
            >
              <Avatar url={customer?.avatar} name={customer?.name || 'Jay'} size="md" />
            </TouchableOpacity>

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
        </View>

        {/* Location selector */}
        <View className="flex-row items-center mt-1">
          <LocationIcon color="#6C6C6C" />
          <Text className="font-figtree text-xs text-[#232323]/60 ml-1.5">Deliver Shoots to:</Text>
          <TouchableOpacity
            onPress={() => setIsLocationModalOpen(true)}
            className="flex-row items-center ml-1"
            activeOpacity={0.7}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
          >
            <Text className="font-figtree-bold text-sm text-[#232323] ml-1">
              {activeLocationLabel}
            </Text>
            <ArrowDownIcon size={14} color="#232323" />
          </TouchableOpacity>
        </View>

        {/* Studio Styled Search Bar */}
        <TouchableOpacity
          onPress={() => router.push('/(tabs)/explore')}
          activeOpacity={0.9}
          className="flex-row items-center px-4 h-12 mt-3 rounded-2xl bg-white border border-[#2323231F]"
        >
          <SearchIcon size={18} color="#6C6C6C" />
          <Text className="flex-1 font-figtree text-sm text-[#8C8C8C] ml-3">
            Search photographers, cities, or events...
          </Text>
          <SlidersIcon size={18} color="#232323" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Categories Section */}
        <View className="pb-5 pt-4">
          <View className="flex-row items-center justify-between px-5 mb-3">
            <Text className="font-figtree-bold text-base text-[#232323]">
              Browse Categories
            </Text>
            <TouchableOpacity onPress={() => router.push('/(tabs)/explore')}>
              <Text className="font-figtree-bold text-xs text-[#232323] underline">
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {categories.map((cat) => (
              <CategoryPill
                key={cat.id}
                category={cat}
                selected={selectedCat === cat.name}
                onPress={() => handleCategoryPress(cat.name)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Special Offers Carousel */}
        {offerPhotographers.length > 0 && (
          <View className="mb-6">
            <View className="flex-row items-center justify-between px-5 mb-3">
              <View className="flex-row items-center" style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <SparklesIcon size={18} color="#00A03C" />
                <Text className="font-figtree-bold text-base text-[#232323]">
                  Exclusive Studio Offers & Deals 🏷️
                </Text>
              </View>
              <TouchableOpacity onPress={() => router.push('/(tabs)/explore')}>
                <Text className="font-figtree-bold text-xs text-[#232323] underline">
                  View All ({offerPhotographers.length})
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 20 }}
            >
              {offerPhotographers.map((item) => (
                <PhotographerCard
                  key={item.id}
                  photographer={item}
                  horizontal
                  onPress={() => router.push(`/photographer/${item.id}`)}
                />
              ))}
            </ScrollView>
          </View>
        )}

        {/* Featured Photographers Horizontal Carousel */}
        <View className="mb-6">
          <View className="flex-row items-center justify-between px-5 mb-3">
            <Text className="font-figtree-bold text-base text-[#232323]">
              Top Rated Artists ⭐
            </Text>
            <TouchableOpacity onPress={() => router.push('/(tabs)/explore')}>
              <Text className="font-figtree-bold text-xs text-[#232323] underline">
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {featuredPhotographers.map((item) => (
              <PhotographerCard
                key={item.id}
                photographer={item}
                horizontal
                onPress={() => router.push(`/photographer/${item.id}`)}
              />
            ))}
          </ScrollView>
        </View>

        {/* All Nearby Photographers */}
        <View className="px-5 pb-8">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="font-figtree-bold text-base text-[#232323]">
              Photographers ({displayPhotographers.length})
            </Text>
            <Text className="font-figtree text-xs text-[#232323]/50">
              In {selectedCity}
            </Text>
          </View>

          {displayPhotographers.map((item) => (
            <PhotographerCard
              key={item.id}
              photographer={item}
              onPress={() => router.push(`/photographer/${item.id}`)}
            />
          ))}
        </View>
      </ScrollView>

      {/* Location Modal */}
      <LocationModal
        visible={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />
    </SafeAreaView>
  );
}
