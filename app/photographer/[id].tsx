import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { photographers } from '@/data/photographers';
import { reviews } from '@/data/reviews';
import { useFavoritesStore } from '@/stores/favorites';
import { RatingStars } from '@/components/ui/rating-stars';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ReviewCard } from '@/components/review-card';
import {
  BackIcon,
  HeartIcon,
  MapPinIcon,
  CheckCircleIcon,
  ClockIcon,
  MessageIcon,
  CloseIcon,
  SparklesIcon,
} from '@/utils/icons';

export default function PhotographerDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const photographer = photographers.find((p) => p.id === id) || photographers[0];

  const { isFavorite, toggleFavorite } = useFavoritesStore();
  const favorite = isFavorite(photographer.id);

  const [activeTab, setActiveTab] = useState<'portfolio' | 'services' | 'offers' | 'reviews'>('portfolio');
  const [portfolioFilter, setPortfolioFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photographerReviews = reviews.filter((r) => r.photographerId === photographer.id);
  const portfolioCategories = ['All', ...new Set(photographer.portfolio.map((img) => img.category))];

  const filteredPortfolio =
    portfolioFilter === 'All'
      ? photographer.portfolio
      : photographer.portfolio.filter((img) => img.category === portfolioFilter);

  // Navigate to the multi-step booking flow screen
  const handleBookNow = (serviceId?: string) => {
    if (serviceId) {
      router.push(`/booking-flow/${photographer.id}?serviceId=${serviceId}`);
    } else {
      router.push(`/booking-flow/${photographer.id}`);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 220 }}
      >
        {/* Cover Image & Header Overlay */}
        <View className="relative h-72 w-full">
          <Image
            source={{ uri: photographer.coverImage }}
            className="w-full h-full"
            resizeMode="cover"
          />

          {/* Floating Studio Header Bar */}
          <SafeAreaView edges={['top']} className="absolute top-2 left-4 right-4 flex-row justify-between items-center">
            <TouchableOpacity
              onPress={() => router.back()}
              accessibilityRole="button"
              accessibilityLabel="Go back"
              className="w-10 h-10 rounded-full bg-white items-center justify-center shadow-md"
            >
              <BackIcon size={36} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => toggleFavorite(photographer.id)}
              className="w-10 h-10 rounded-full bg-white items-center justify-center shadow-md"
            >
              <HeartIcon
                size={20}
                color={favorite ? '#EF4444' : '#232323'}
                fill={favorite ? '#EF4444' : 'none'}
              />
            </TouchableOpacity>
          </SafeAreaView>

          {/* Avatar Circle */}
          <View className="absolute -bottom-12 left-6">
            <View
              className="w-24 h-24 rounded-full items-center justify-center overflow-hidden border-4 border-white"
              style={{
                backgroundColor: '#ECECEC',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.12,
                shadowRadius: 10,
                elevation: 6,
              }}
            >
              <Image
                source={{ uri: photographer.avatar }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        {/* Studio Profile Content */}
        <View className="pt-14 px-5">
          <View className="flex-row items-center justify-between mb-1.5 flex-wrap gap-2">
            <Text className="font-figtree-bold text-2xl text-[#232323] flex-1 mr-2">
              {photographer.name}
            </Text>

            <View className="flex-row items-center bg-[#232323] px-3 py-1 rounded-full gap-1.5">
              <CheckCircleIcon size={14} color="#FFFFFF" />
              <Text className="font-figtree-bold text-xs text-white">
                Verified Studio
              </Text>
            </View>
          </View>

          {/* Location & Experience */}
          <View className="flex-row items-center space-x-3 mb-2 flex-wrap">
            <View className="flex-row items-center">
              <MapPinIcon size={14} color="#6C6C6C" />
              <Text className="font-figtree text-xs text-[#232323]/70 ml-1">
                {photographer.location}
              </Text>
            </View>
            <View className="w-1 h-1 rounded-full bg-[#232323]/30" />
            <Text className="font-figtree-semibold text-xs text-[#232323]/70">
              {photographer.experience} Experience
            </Text>
          </View>

          {/* Deliver Locations */}
          {photographer.deliverLocations && photographer.deliverLocations.length > 0 && (
            <View className="flex-row items-center mb-3">
              <Text className="font-figtree text-[11px] text-[#232323]/50">
                Delivers Shoots to:{' '}
                <Text className="font-figtree-semibold text-[#232323]">
                  {photographer.deliverLocations.slice(0, 3).join(', ')}
                </Text>
              </Text>
            </View>
          )}

          {/* Rating Summary */}
          <View className="flex-row items-center mb-4">
            <RatingStars rating={photographer.rating} reviewCount={photographer.reviewCount} size={16} />
          </View>

          {/* Specialty Badges */}
          <View className="flex-row flex-wrap gap-1.5 mb-5">
            {photographer.specialties.map((spec, idx) => (
              <Badge key={idx} label={spec} variant="slate" />
            ))}
          </View>

          {/* Active Offer Banner */}
          {photographer.offerTag && (
            <View
              className="rounded-[20px] bg-[#232323] p-4 mb-5"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.06,
                shadowRadius: 12,
                elevation: 4,
              }}
            >
              <View className="flex-row items-center justify-between mb-2">
                <View className="flex-row items-center gap-2">
                  <View className="bg-[#00A03C] px-2.5 py-1 rounded-full">
                    <Text className="font-figtree-bold text-xs text-white uppercase tracking-wider">
                      {photographer.offerTag}
                    </Text>
                  </View>
                  <SparklesIcon size={16} color="#00A03C" />
                </View>

                <Text className="font-figtree-mono text-xs text-white/70">
                  CODE: <Text className="font-figtree-bold text-white">KLICKKS20</Text>
                </Text>
              </View>

              <Text className="font-figtree-semibold text-sm text-white mb-1">
                Special Limited Time Offer
              </Text>
              <Text className="font-figtree text-xs text-white/80 leading-5">
                {photographer.offerDescription || 'Get special discounts when you book through Klickks App.'}
              </Text>
            </View>
          )}

          {/* About Bio Card */}
          <View
            className="rounded-[20px] border border-[#23232314] bg-white p-4 mb-6"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.06,
              shadowRadius: 12,
              elevation: 4,
            }}
          >
            <Text className="font-figtree-semibold text-sm text-[#232323] mb-1.5">
              About Studio & Artist
            </Text>
            <Text className="font-figtree text-xs text-[#232323]/70 leading-5">
              {photographer.about}
            </Text>
          </View>

          {/* Section Tab Bar */}
          <View className="pb-3 pt-1 mb-5 bg-white border-b border-[#2323231F]">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ alignItems: 'center' }}
            >
              <TouchableOpacity
                onPress={() => setActiveTab('portfolio')}
                className={`mr-2 items-center justify-center rounded-full px-4 py-2.5 ${
                  activeTab === 'portfolio'
                    ? 'border border-[#232323] bg-[#232323]'
                    : 'border border-[#2323231F] bg-white'
                }`}
                activeOpacity={0.82}
              >
                <Text
                  className={`text-sm ${
                    activeTab === 'portfolio'
                      ? 'font-figtree-semibold text-white'
                      : 'font-figtree-medium text-[#232323]'
                  }`}
                >
                  Portfolio ({photographer.portfolio.length})
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setActiveTab('services')}
                className={`mr-2 items-center justify-center rounded-full px-4 py-2.5 ${
                  activeTab === 'services'
                    ? 'border border-[#232323] bg-[#232323]'
                    : 'border border-[#2323231F] bg-white'
                }`}
                activeOpacity={0.82}
              >
                <Text
                  className={`text-sm ${
                    activeTab === 'services'
                      ? 'font-figtree-semibold text-white'
                      : 'font-figtree-medium text-[#232323]'
                  }`}
                >
                  Services ({photographer.services.length})
                </Text>
              </TouchableOpacity>

              {photographer.offerTag && (
                <TouchableOpacity
                  onPress={() => setActiveTab('offers')}
                  className={`mr-2 items-center justify-center rounded-full px-4 py-2.5 ${
                    activeTab === 'offers'
                      ? 'border border-[#232323] bg-[#232323]'
                      : 'border border-[#2323231F] bg-white'
                  }`}
                  activeOpacity={0.82}
                >
                  <Text
                    className={`text-sm ${
                      activeTab === 'offers'
                        ? 'font-figtree-semibold text-white'
                        : 'font-figtree-medium text-[#232323]'
                    }`}
                  >
                    Offers
                  </Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                onPress={() => setActiveTab('reviews')}
                className={`mr-2 items-center justify-center rounded-full px-4 py-2.5 ${
                  activeTab === 'reviews'
                    ? 'border border-[#232323] bg-[#232323]'
                    : 'border border-[#2323231F] bg-white'
                }`}
                activeOpacity={0.82}
              >
                <Text
                  className={`text-sm ${
                    activeTab === 'reviews'
                      ? 'font-figtree-semibold text-white'
                      : 'font-figtree-medium text-[#232323]'
                  }`}
                >
                  Reviews ({photographerReviews.length})
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* Tab 1: Portfolio Grid */}
          {activeTab === 'portfolio' && (
            <View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="mb-4"
              >
                {portfolioCategories.map((cat, idx) => (
                  <TouchableOpacity
                    key={idx}
                    onPress={() => setPortfolioFilter(cat)}
                    activeOpacity={0.82}
                    className={`mr-2 items-center justify-center rounded-full px-4 py-2.5 ${
                      portfolioFilter === cat
                        ? 'border border-[#232323] bg-[#232323]'
                        : 'border border-[#2323231F] bg-white'
                    }`}
                  >
                    <Text
                      className={`text-sm ${
                        portfolioFilter === cat
                          ? 'font-figtree-semibold text-white'
                          : 'font-figtree-medium text-[#232323]'
                      }`}
                    >
                      {cat}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              <View className="flex-row flex-wrap justify-between">
                {filteredPortfolio.map((img) => (
                  <TouchableOpacity
                    key={img.id}
                    onPress={() => setSelectedImage(img.url)}
                    activeOpacity={0.8}
                    className="w-[48%] h-48 mb-3 rounded-[20px] overflow-hidden border border-[#23232314] bg-white"
                    style={{
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.06,
                      shadowRadius: 12,
                      elevation: 4,
                    }}
                  >
                    <Image
                      source={{ uri: img.url }}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                    <View className="absolute bottom-2 left-2 bg-black/70 px-2 py-0.5 rounded-md">
                      <Text className="font-figtree text-[10px] text-white font-medium">{img.category}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {/* Tab 2: Services Cards */}
          {activeTab === 'services' && (
            <View className="gap-4">
              {photographer.services.map((srv) => (
                <View
                  key={srv.id}
                  className="bg-white p-5 rounded-[20px] border border-[#23232314] mb-3"
                  style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 6 },
                    shadowOpacity: 0.08,
                    shadowRadius: 18,
                    elevation: 6,
                  }}
                >
                  <View className="flex-row justify-between items-start mb-1.5">
                    <Text className="font-figtree-bold text-lg text-[#232323] flex-1 mr-2">
                      {srv.name}
                    </Text>
                    <View className="items-end">
                      <Text className="font-figtree-bold text-lg text-[#232323]">
                        ₹{srv.price.toLocaleString('en-IN')}
                      </Text>
                    </View>
                  </View>

                  <View className="flex-row items-center mb-3">
                    <ClockIcon size={14} color="#6C6C6C" />
                    <Text className="font-figtree text-xs text-[#232323]/60 ml-1.5">
                      Duration: {srv.duration}
                    </Text>
                  </View>

                  <Text className="font-figtree text-xs text-[#232323]/70 leading-5 mb-4">
                    {srv.description}
                  </Text>

                  <Button
                    title="Select & Book Service"
                    size="sm"
                    onPress={() => handleBookNow(srv.id)}
                  />
                </View>
              ))}
            </View>
          )}

          {/* Tab 3: Offers */}
          {activeTab === 'offers' && (
            <View className="gap-3">
              <View
                className="bg-[#232323] p-4 rounded-[20px]"
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.06,
                  shadowRadius: 12,
                  elevation: 4,
                }}
              >
                <View className="flex-row items-center gap-2 mb-2">
                  <View className="bg-[#00A03C] px-3 py-1 rounded-full">
                    <Text className="font-figtree-bold text-xs text-white">
                      {photographer.offerTag || 'FESTIVE OFFER'}
                    </Text>
                  </View>
                </View>
                <Text className="font-figtree-bold text-base text-white mb-1">
                  Exclusive Klickks Studio Discount
                </Text>
                <Text className="font-figtree text-xs text-white/80 leading-5 mb-3">
                  {photographer.offerDescription || 'Book this photographer directly through the Klickks app to claim your discount coupon.'}
                </Text>

                <TouchableOpacity
                  onPress={() => handleBookNow()}
                  className="bg-white py-3 px-5 rounded-full items-center"
                >
                  <Text className="font-figtree-bold text-xs text-[#232323]">
                    Apply Offer & Book Shoot
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Tab 4: Reviews */}
          {activeTab === 'reviews' && (
            <View>
              {photographerReviews.length > 0 ? (
                photographerReviews.map((rev) => <ReviewCard key={rev.id} review={rev} />)
              ) : (
                <Text className="font-figtree text-xs text-[#232323]/40 text-center py-6">
                  No reviews submitted yet for this photographer.
                </Text>
              )}
            </View>
          )}
        </View>
      </ScrollView>

      {/* Full-Screen Image Lightbox Modal */}
      <Modal visible={!!selectedImage} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => setSelectedImage(null)}>
          <View className="flex-1 bg-black/90 items-center justify-center p-4">
            <TouchableOpacity
              onPress={() => setSelectedImage(null)}
              className="absolute top-12 right-6 w-10 h-10 rounded-full bg-white/20 items-center justify-center z-10"
            >
              <CloseIcon size={22} color="#FFFFFF" />
            </TouchableOpacity>

            {selectedImage && (
              <Image
                source={{ uri: selectedImage }}
                className="w-full h-4/5 rounded-2xl"
                resizeMode="contain"
              />
            )}
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Studio Exact Sticky Bottom Action Bar */}
      <View
        className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-[#2323231F] flex-row items-center justify-between"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.08,
          shadowRadius: 12,
          elevation: 8,
        }}
      >
        <View>
          <Text className="font-figtree-semibold text-[10px] uppercase text-[#232323]/50">Starting Price</Text>
          <View className="flex-row items-baseline gap-1.5">
            <Text className="font-figtree-bold text-xl text-[#232323]">
              ₹{photographer.startingPrice.toLocaleString('en-IN')}
            </Text>
            {photographer.originalPrice && (
              <Text className="font-figtree text-xs text-[#232323]/40 line-through">
                ₹{photographer.originalPrice.toLocaleString('en-IN')}
              </Text>
            )}
          </View>
        </View>

        <View className="flex-row items-center gap-3">
          <TouchableOpacity
            onPress={() => router.push('/chat/conv1')}
            activeOpacity={0.7}
            className="w-12 h-12 rounded-full border border-[#232323] bg-white items-center justify-center mr-3"
          >
            <MessageIcon size={22} color="#232323" />
          </TouchableOpacity>

          <Button
            title="Book Now"
            onPress={() => handleBookNow()}
            fullWidth={false}
            className="px-6"
          />
        </View>
      </View>
    </View>
  );
}
