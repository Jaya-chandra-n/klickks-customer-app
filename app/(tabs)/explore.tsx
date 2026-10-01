import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { photographers } from '@/data/photographers';
import { categories } from '@/data/categories';
import { PhotographerCard } from '@/components/photographer-card';
import { CategoryPill } from '@/components/category-pill';
import { EmptyState } from '@/components/ui/empty-state';
import { SearchIcon, CloseIcon, SlidersIcon, HelpIcon } from '@/utils/icons';

type SortOption = 'rating' | 'price_asc' | 'price_desc';

export default function ExploreScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(
    (params.category as string) || 'All'
  );
  const [sortBy, setSortBy] = useState<SortOption>('rating');
  const [showSortMenu, setShowSortMenu] = useState(false);

  const filteredPhotographers = useMemo(() => {
    let list = [...photographers];

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.specialties.some((s) => s.toLowerCase().includes(q))
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== 'All') {
      list = list.filter((p) =>
        p.specialties.some(
          (s) => s.toLowerCase() === selectedCategory.toLowerCase()
        )
      );
    }

    // Sort
    if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'price_asc') {
      list.sort((a, b) => a.startingPrice - b.startingPrice);
    } else if (sortBy === 'price_desc') {
      list.sort((a, b) => b.startingPrice - a.startingPrice);
    }

    return list;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header matching Profile Header (No Shadows) */}
      <View className="px-5 py-4 bg-white border-b border-[#2323231F]">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="font-figtree-bold text-2xl text-[#232323]">
            Discover
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

        <View className="flex-row items-center px-4 h-12 rounded-2xl bg-white border border-[#2323231F]">
          <SearchIcon size={18} color="#6C6C6C" />
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search photographer name, city, or style..."
            placeholderTextColor="#8C8C8C"
            className="flex-1 font-figtree text-sm text-[#232323] ml-2 py-0"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <CloseIcon size={18} color="#232323" />
            </TouchableOpacity>
          )}
        </View>

        {/* Category Horizontal Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-3"
          contentContainerStyle={{ paddingRight: 20 }}
        >
          <TouchableOpacity
            onPress={() => setSelectedCategory('All')}
            className={`mr-3 flex-row items-center justify-center rounded-full px-5 py-3 ${
              selectedCategory === 'All'
                ? 'border border-[#232323] bg-[#232323]'
                : 'border border-[#2323231F] bg-white'
            }`}
          >
            <Text
              className={`text-[14px] ${
                selectedCategory === 'All'
                  ? 'font-figtree-bold text-white'
                  : 'font-figtree-medium text-[#232323]'
              }`}
            >
              All Categories
            </Text>
          </TouchableOpacity>

          {categories.map((cat) => (
            <CategoryPill
              key={cat.id}
              category={cat}
              selected={selectedCategory.toLowerCase() === cat.name.toLowerCase()}
              onPress={() => setSelectedCategory(cat.name)}
            />
          ))}
        </ScrollView>
      </View>

      {/* Sort & Count Bar */}
      <View className="flex-row items-center justify-between px-5 py-3 bg-white border-b border-[#2323231F]">
        <Text className="font-figtree-semibold text-xs text-[#232323]/60">
          {filteredPhotographers.length} Photographers Available
        </Text>

        <TouchableOpacity
          onPress={() => setShowSortMenu(!showSortMenu)}
          className="flex-row items-center bg-[#F8F9FA] px-3 py-1.5 rounded-lg border border-[#2323231F]"
        >
          <SlidersIcon size={14} color="#232323" />
          <Text className="font-figtree-bold text-xs text-[#232323] ml-1.5">
            {sortBy === 'rating'
              ? 'Top Rated'
              : sortBy === 'price_asc'
              ? 'Price: Low to High'
              : 'Price: High to Low'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sort Dropdown Menu */}
      {showSortMenu && (
        <View className="bg-white px-5 py-3 border-b border-[#2323231F] flex-row justify-around">
          <TouchableOpacity
            onPress={() => {
              setSortBy('rating');
              setShowSortMenu(false);
            }}
            className={`px-3 py-1.5 rounded-lg ${
              sortBy === 'rating' ? 'bg-[#232323]' : ''
            }`}
          >
            <Text
              className={`font-figtree-semibold text-xs ${
                sortBy === 'rating' ? 'text-white' : 'text-[#232323]'
              }`}
            >
              ⭐ Top Rated
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSortBy('price_asc');
              setShowSortMenu(false);
            }}
            className={`px-3 py-1.5 rounded-lg ${
              sortBy === 'price_asc' ? 'bg-[#232323]' : ''
            }`}
          >
            <Text
              className={`font-figtree-semibold text-xs ${
                sortBy === 'price_asc' ? 'text-white' : 'text-[#232323]'
              }`}
            >
              ₹ Low → High
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSortBy('price_desc');
              setShowSortMenu(false);
            }}
            className={`px-3 py-1.5 rounded-lg ${
              sortBy === 'price_desc' ? 'bg-[#232323]' : ''
            }`}
          >
            <Text
              className={`font-figtree-semibold text-xs ${
                sortBy === 'price_desc' ? 'text-white' : 'text-[#232323]'
              }`}
            >
              ₹ High → Low
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Results List */}
      <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>
        {filteredPhotographers.length > 0 ? (
          filteredPhotographers.map((photographer) => (
            <PhotographerCard
              key={photographer.id}
              photographer={photographer}
              onPress={() => router.push(`/photographer/${photographer.id}`)}
            />
          ))
        ) : (
          <EmptyState
            icon={<SearchIcon size={24} color="#232323" />}
            title="No Photographers Found"
            description="Try changing your search terms or selecting a different category filter."
            actionLabel="Reset Filters"
            onAction={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
