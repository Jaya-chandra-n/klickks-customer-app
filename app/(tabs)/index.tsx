import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
  StyleSheet,
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
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Top Header */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View style={styles.logoContainer}>
            <MomentizzLogo showTagline size="sm" />
          </View>

          <View style={styles.headerActions}>
            <TouchableOpacity
              onPress={() => router.push('/favorites')}
              style={styles.iconButton}
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
        <View style={styles.locationRow}>
          <LocationIcon color="#6C6C6C" />
          <Text allowFontScaling={false} style={styles.deliverLabel}>
            Deliver Shoots to:
          </Text>
          <TouchableOpacity
            onPress={() => setIsLocationModalOpen(true)}
            activeOpacity={0.7}
            style={styles.locationButton}
          >
            <Text allowFontScaling={false} style={styles.locationText} numberOfLines={1}>
              {activeLocationLabel}
            </Text>
            <ArrowDownIcon size={14} color="#232323" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <TouchableOpacity
          onPress={() => router.push('/(tabs)/explore')}
          activeOpacity={0.9}
          style={styles.searchBar}
        >
          <SearchIcon size={18} color="#6C6C6C" />
          <Text allowFontScaling={false} style={styles.searchText} numberOfLines={1}>
            Search photographers, cities, or events...
          </Text>
          <SlidersIcon size={18} color="#232323" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollArea}>
        {/* Categories Section */}
        <View style={styles.categoriesSection}>
          <View style={styles.sectionHeaderRow}>
            <Text allowFontScaling={false} style={styles.sectionTitle}>
              Browse Categories
            </Text>
            <TouchableOpacity onPress={() => router.push('/(tabs)/explore')}>
              <Text allowFontScaling={false} style={styles.seeAllText}>
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScrollContent}
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

        {/* Top 10 Rated Artists */}
        <View style={styles.topArtistsSection}>
          <View style={styles.sectionHeaderRow}>
            <Text allowFontScaling={false} style={styles.sectionTitle}>
              Top 10 Rated Artists
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScrollContentWithBottom}
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

        {/* Featured Studios Section */}
        <View style={styles.featuredSection}>
          <View style={styles.sectionHeaderRow}>
            <Text allowFontScaling={false} style={styles.sectionTitleFlex}>
              Featured Studios ({displayPhotographers.length})
            </Text>
            <Text allowFontScaling={false} style={styles.cityText}>
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
                  style={styles.exploreAllButton}
                >
                  <Text allowFontScaling={false} style={styles.exploreAllText}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(35, 35, 35, 0.12)',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  logoContainer: {
    flexShrink: 0,
    marginRight: 8,
    justifyContent: 'center',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F8F9FA',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(35, 35, 35, 0.08)',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    flexWrap: 'wrap',
  },
  deliverLabel: {
    fontFamily: 'Figtree_400Regular',
    fontSize: 12,
    color: 'rgba(35, 35, 35, 0.6)',
    marginLeft: 6,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
    gap: 4,
  },
  locationText: {
    fontFamily: 'Figtree_700Bold',
    fontSize: 13,
    color: '#232323',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 48,
    marginTop: 12,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(35, 35, 35, 0.12)',
  },
  searchText: {
    flex: 1,
    fontFamily: 'Figtree_400Regular',
    fontSize: 13,
    color: '#8C8C8C',
    marginLeft: 12,
  },
  scrollArea: {
    flex: 1,
  },
  categoriesSection: {
    paddingTop: 16,
    paddingBottom: 20,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: 'Figtree_700Bold',
    fontSize: 15,
    color: '#232323',
  },
  sectionTitleFlex: {
    fontFamily: 'Figtree_700Bold',
    fontSize: 15,
    color: '#232323',
    flexShrink: 1,
    marginRight: 8,
  },
  seeAllText: {
    fontFamily: 'Figtree_700Bold',
    fontSize: 12,
    color: '#232323',
    textDecorationLine: 'underline',
  },
  cityText: {
    fontFamily: 'Figtree_400Regular',
    fontSize: 12,
    color: 'rgba(35, 35, 35, 0.5)',
  },
  horizontalScrollContent: {
    paddingHorizontal: 20,
  },
  horizontalScrollContentWithBottom: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  topArtistsSection: {
    marginBottom: 24,
  },
  featuredSection: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  exploreAllButton: {
    backgroundColor: '#232323',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  exploreAllText: {
    fontFamily: 'Figtree_700Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});

