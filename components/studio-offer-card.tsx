import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Photographer } from '@/data/photographers';
import { RatingStars } from './ui/rating-stars';
import { Badge } from './ui/badge';
import { HeartIcon, MapPinIcon, ChevronRightIcon, SparklesIcon } from '@/utils/icons';
import { useFavoritesStore } from '@/stores/favorites';

export interface StudioOfferCardProps {
  photographer: Photographer;
  onPress: () => void;
  className?: string;
}

export function StudioOfferCard({
  photographer,
  onPress,
  className = '',
}: StudioOfferCardProps) {
  const { isFavorite, toggleFavorite } = useFavoritesStore();
  const favorite = isFavorite(photographer.id);

  const discountPercent = photographer.originalPrice && photographer.startingPrice
    ? Math.round(((photographer.originalPrice - photographer.startingPrice) / photographer.originalPrice) * 100)
    : null;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      className={`bg-white rounded-[22px] overflow-hidden border border-[#00A03C26] mr-4 w-[300px] ${className}`}
      style={{
        shadowColor: '#00A03C',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 5,
      }}
    >
      {/* Top Banner Image with Badges */}
      <View className="relative h-40 w-full">
        <Image
          source={{ uri: photographer.coverImage }}
          className="w-full h-full"
          resizeMode="cover"
        />

        {/* Top Dark Overlay Gradient for text contrast */}
        <View className="absolute inset-0 bg-black/20" />

        {/* Deal / Offer Tag Badge */}
        <View className="absolute top-3 left-3 bg-[#00A03C] px-3 py-1 rounded-full flex-row items-center" style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <SparklesIcon size={12} color="#FFFFFF" />
          <Text className="font-figtree-bold text-xs text-white uppercase tracking-wide">
            {photographer.offerTag || 'SPECIAL DEAL'}
          </Text>
        </View>

        {/* Wishlist Heart Button */}
        <TouchableOpacity
          onPress={() => toggleFavorite(photographer.id)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 items-center justify-center"
          activeOpacity={0.8}
        >
          <HeartIcon
            size={18}
            color={favorite ? '#EF4444' : '#FFFFFF'}
            fill={favorite ? '#EF4444' : 'none'}
          />
        </TouchableOpacity>

        {/* Savings Ribbon */}
        {discountPercent && (
          <View className="absolute bottom-3 right-3 bg-[#232323] px-2.5 py-1 rounded-lg">
            <Text className="font-figtree-bold text-[10px] text-white">
              SAVE {discountPercent}%
            </Text>
          </View>
        )}
      </View>

      {/* Card Content */}
      <View className="p-4 bg-white">
        {/* Studio Name & Rating */}
        <View className="flex-row items-center justify-between mb-1">
          <Text
            className="font-figtree-bold text-base text-[#232323] flex-1 mr-2"
            numberOfLines={1}
          >
            {photographer.name}
          </Text>
          <RatingStars rating={photographer.rating} showText />
        </View>

        {/* Location & Specialty */}
        <View className="flex-row items-center mb-2">
          <MapPinIcon size={12} color="#6C6C6C" />
          <Text className="font-figtree text-xs text-[#232323]/60 ml-1 mr-2">
            {photographer.city}
          </Text>
          <Badge label={photographer.specialties[0]} size="sm" variant="slate" />
        </View>

        {/* Offer Description Banner */}
        {photographer.offerDescription && (
          <View className="bg-[#00A03C0D] border border-[#00A03C26] px-3 py-2 rounded-xl mb-3">
            <Text className="font-figtree-medium text-xs text-[#008030]" numberOfLines={2}>
              🎁 {photographer.offerDescription}
            </Text>
          </View>
        )}

        {/* Price & Claim Button Row */}
        <View className="flex-row items-center justify-between pt-2 border-t border-[#23232314]">
          <View>
            <Text className="font-figtree-medium text-[10px] uppercase text-[#6C6C6C]">Deal Price</Text>
            <View className="flex-row items-baseline" style={{ flexDirection: 'row', alignItems: 'baseline', gap: 6 }}>
              <Text className="font-figtree-bold text-lg text-[#00A03C]">
                ₹{photographer.startingPrice.toLocaleString('en-IN')}
              </Text>
              {photographer.originalPrice && (
                <Text className="font-figtree text-xs text-[#6C6C6C] line-through">
                  ₹{photographer.originalPrice.toLocaleString('en-IN')}
                </Text>
              )}
            </View>
          </View>

          <View className="bg-[#00A03C] px-3.5 py-2 rounded-full flex-row items-center" style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Text className="font-figtree-bold text-xs text-white">
              Claim Deal
            </Text>
            <ChevronRightIcon size={13} color="#FFFFFF" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
