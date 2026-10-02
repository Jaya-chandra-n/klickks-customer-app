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
import { PhotographerCardSkeleton, CategoryPillSkeleton } from '@/components/ui/skeleton';
import { MomentizzLogo } from '@/components/ui/momentizz-logo';
import { useAuthStore } from '@/stores/auth';
import { useLocationStore } from '@/stores/location';
import {
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadLocation();
    const timer = setTimeout(() => setIsLoading(false), 350);
    return () => clearTimeout(timer);
  }, [loadLocation, selectedCity]);

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
  const topRatedArtists = [...displayPhotographers].sort((a, b) => b.rating - a.rating).slice(0, 10);

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
      <View className="px-4 py-3 bg-white border-b border-[#2323231F]">
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <View style={{ flexShrink: 0, marginRight: 8, justifyContent: 'center' }}>
            <MomentizzLogo showTagline size="sm" />
          </View>

          {/* Right Action Icons */}
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <TouchableOpacity
              onPress={() => router.push('/favorites')}
              style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: '#F8F9FA', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#23232314' }}
              activeOpacity={0.7}
            >
              <HeartIcon size={16} color="#232323" fill="#232323" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/(tabs)/profile')}
              activeOpacity={0.8}
            >
              <Avatar url={customer?.avatar} name={customer?.name || 'Jay'} size="sm" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Location selector */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4, flexWrap: 'wrap' }}>
          <LocationIcon color="#6C6C6C" />
          <Text allowFontScaling={false} style={{ fontFamily: 'Figtree_400Regular', fontSize: 12, color: '#23232399', marginLeft: 6 }}>
            Deliver Shoots to:
          </Text>
          <TouchableOpacity
            onPress={() => setIsLocationModalOpen(true)}
            activeOpacity={0.7}
            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 4, gap: 4 }}
          >
            <Text allowFontScaling={false} style={{ fontFamily: 'Figtree_700Bold', fontSize: 13, color: '#232323' }}>
              {activeLocationLabel}
            </Text>
            <ArrowDownIcon size={14} color="#232323" />
          </TouchableOpacity>
        </View>

        {/* Studio Styled Search Bar */}
        <TouchableOpacity
          onPress={() => router.push('/(tabs)/explore')}
          activeOpacity={0.9}
          style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, height: 48, marginTop: 12, borderRadius: 16, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#2323231F' }}
        >
          <SearchIcon size={18} color="#6C6C6C" />
          <Text allowFontScaling={false} style={{ flex: 1, fontFamily: 'Figtree_400Regular', fontSize: 13, color: '#8C8C8C', marginLeft: 12 }}>
            Search photographers, cities, or events...
          </Text>
          <SlidersIcon size={18} color="#232323" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Categories Section */}
        <View className="pb-5 pt-4">
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 12 }}>
            <Text allowFontScaling={false} style={{ fontFamily: 'Figtree_700Bold', fontSize: 15, color: '#232323' }}>
              Browse Categories
            </Text>
            <TouchableOpacity onPress={() => router.push('/(tabs)/explore')}>
              <Text allowFontScaling={false} style={{ fontFamily: 'Figtree_700Bold', fontSize: 12, color: '#232323', textDecorationLine: 'underline' }}>
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {isLoading ? (
              <>
                <CategoryPillSkeleton />
                <CategoryPillSkeleton />
                <CategoryPillSkeleton />
                <CategoryPillSkeleton />
              </>
            ) : (
              categories.map((cat) => (
                <CategoryPill
                  key={cat.id}
                  category={cat}
                  selected={selectedCat === cat.name}
                  onPress={() => handleCategoryPress(cat.name)}
                />
              ))
            )}
          </ScrollView>
        </View>

        {/* Featured Photographers Horizontal Carousel */}
        <View className="mb-6">
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 12 }}>
            <Text allowFontScaling={false} style={{ fontFamily: 'Figtree_700Bold', fontSize: 15, color: '#232323' }}>
              Top 10 Rated Artists
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 10 }}
          >
            {isLoading ? (
              <>
                <PhotographerCardSkeleton horizontal />
                <PhotographerCardSkeleton horizontal />
                <PhotographerCardSkeleton horizontal />
              </>
            ) : (
              topRatedArtists.map((item) => (
                <PhotographerCard
                  key={item.id}
                  photographer={item}
                  horizontal
                  onPress={() => router.push(`/photographer/${item.id}`)}
                />
              ))
            )}
          </ScrollView>
        </View>

        {/* All Nearby Photographers */}
        <View className="px-5 pb-8">
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <Text allowFontScaling={false} style={{ fontFamily: 'Figtree_700Bold', fontSize: 15, color: '#232323', flexShrink: 1, marginRight: 8 }}>
              Featured Studios ({displayPhotographers.length})
            </Text>
            <Text allowFontScaling={false} style={{ fontFamily: 'Figtree_400Regular', fontSize: 12, color: '#23232380' }}>
              In {selectedCity}
            </Text>
          </View>

          {isLoading ? (
            <>
              <PhotographerCardSkeleton />
              <PhotographerCardSkeleton />
              <PhotographerCardSkeleton />
            </>
          ) : (
            <>
              {displayPhotographers.slice(0, 10).map((item) => (
                <PhotographerCard
                  key={item.id}
                  photographer={item}
                  onPress={() => router.push(`/photographer/${item.id}`)}
                />
              ))}

              {displayPhotographers.length > 10 && (
                <TouchableOpacity
                  onPress={() => router.push('/(tabs)/explore')}
                  activeOpacity={0.8}
                  className="bg-[#232323] py-3.5 px-6 rounded-2xl items-center justify-center mt-2 shadow-sm"
                >
                  <Text className="font-figtree-bold text-sm text-white">
                    Explore All {displayPhotographers.length} Photographers →
                  </Text>
                </TouchableOpacity>
              )}
            </>
          )}
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
