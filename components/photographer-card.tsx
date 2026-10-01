import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Photographer } from '@/data/photographers';
import { RatingStars } from './ui/rating-stars';
import { Badge } from './ui/badge';
import { HeartIcon, MapPinIcon, ChevronRightIcon } from '@/utils/icons';
import { useFavoritesStore } from '@/stores/favorites';

export interface PhotographerCardProps {
  photographer: Photographer;
  onPress: () => void;
  horizontal?: boolean;
  className?: string;
}

export function PhotographerCard({
  photographer,
  onPress,
  horizontal = false,
  className = '',
}: PhotographerCardProps) {
  const { isFavorite, toggleFavorite } = useFavoritesStore();
  const favorite = isFavorite(photographer.id);

  if (horizontal) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        className={`bg-white rounded-[20px] overflow-hidden border border-[#23232314] mr-4 w-72 ${className}`}
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.06,
          shadowRadius: 12,
          elevation: 4,
        }}
      >
        <View className="relative h-36 w-full">
          <Image
            source={{ uri: photographer.coverImage }}
            className="w-full h-full"
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={() => toggleFavorite(photographer.id)}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 items-center justify-center"
          >
            <HeartIcon
              size={16}
              color={favorite ? '#EF4444' : '#FFFFFF'}
              fill={favorite ? '#EF4444' : 'none'}
            />
          </TouchableOpacity>

          {photographer.offerTag && (
            <View className="absolute top-3 left-3 bg-[#00A03C] px-2.5 py-0.5 rounded-full">
              <Text className="font-figtree-bold text-[10px] text-white">
                {photographer.offerTag}
              </Text>
            </View>
          )}

          <View className="absolute bottom-2 left-3 bg-[#232323]/90 px-2 py-0.5 rounded-md flex-row items-center gap-1">
            <Text className="font-figtree-semibold text-[10px] text-white">
              From ₹{photographer.startingPrice.toLocaleString('en-IN')}
            </Text>
            {photographer.originalPrice && (
              <Text className="font-figtree text-[9px] text-white/70 line-through">
                ₹{photographer.originalPrice.toLocaleString('en-IN')}
              </Text>
            )}
          </View>
        </View>

        <View className="p-4">
          <View className="flex-row items-center justify-between mb-1">
            <Text
              className="font-figtree-bold text-base text-[#232323] flex-1 mr-2"
              numberOfLines={1}
            >
              {photographer.name}
            </Text>
            <RatingStars rating={photographer.rating} showText />
          </View>

          <View className="flex-row items-center mb-2">
            <MapPinIcon size={12} color="#6C6C6C" />
            <Text className="font-figtree text-xs text-[#232323]/60 ml-1">
              {photographer.city}
            </Text>
          </View>

          <View className="flex-row flex-wrap gap-1">
            {photographer.specialties.slice(0, 2).map((spec, idx) => (
              <Badge key={idx} label={spec} size="sm" variant="slate" />
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      className={`bg-white rounded-[20px] overflow-hidden border border-[#23232314] mb-4 w-full ${className}`}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.08,
        shadowRadius: 18,
        elevation: 6,
      }}
    >
      <View className="relative h-44 w-full">
        <Image
          source={{ uri: photographer.coverImage }}
          className="w-full h-full"
          resizeMode="cover"
        />

        <TouchableOpacity
          onPress={() => toggleFavorite(photographer.id)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 items-center justify-center"
        >
          <HeartIcon
            size={18}
            color={favorite ? '#EF4444' : '#FFFFFF'}
            fill={favorite ? '#EF4444' : 'none'}
          />
        </TouchableOpacity>

        {/* Top Badges */}
        <View className="absolute top-3 left-3 flex-row items-center gap-1.5 flex-wrap">
          {photographer.offerTag ? (
            <View className="bg-[#00A03C] px-2.5 py-1 rounded-full shadow-sm">
              <Text className="font-figtree-bold text-[10px] text-white uppercase tracking-wider">
                {photographer.offerTag}
              </Text>
            </View>
          ) : photographer.isAvailableToday ? (
            <View className="bg-[#232323] px-2.5 py-1 rounded-full flex-row items-center">
              <View className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5" />
              <Text className="font-figtree-bold text-[10px] text-white uppercase tracking-wider">
                Available Today
              </Text>
            </View>
          ) : null}
        </View>
      </View>

      <View className="p-4">
        <View className="flex-row justify-between items-start mb-2">
          <View className="flex-1 mr-2">
            <Text className="font-figtree-bold text-lg text-[#232323]">
              {photographer.name}
            </Text>
            <View className="flex-row items-center mt-0.5">
              <MapPinIcon size={13} color="#6C6C6C" />
              <Text className="font-figtree text-xs text-[#232323]/60 ml-1">
                {photographer.location}
              </Text>
            </View>
          </View>

          <RatingStars rating={photographer.rating} reviewCount={photographer.reviewCount} />
        </View>

        <View className="flex-row flex-wrap gap-1.5 my-2">
          {photographer.specialties.map((spec, idx) => (
            <Badge key={idx} label={spec} size="sm" variant="slate" />
          ))}
        </View>

        <View className="flex-row items-center justify-between pt-3 mt-1 border-t border-[#2323231F]">
          <View>
            <Text className="font-figtree-semibold text-[10px] uppercase text-[#232323]/50">Starting from</Text>
            <View className="flex-row items-baseline gap-1.5">
              <Text className="font-figtree-bold text-base text-[#232323]">
                ₹{photographer.startingPrice.toLocaleString('en-IN')}
              </Text>
              {photographer.originalPrice && (
                <Text className="font-figtree text-xs text-[#232323]/40 line-through">
                  ₹{photographer.originalPrice.toLocaleString('en-IN')}
                </Text>
              )}
            </View>
          </View>

          <View className="bg-[#232323] px-4 py-2.5 rounded-full flex-row items-center gap-1">
            <Text className="font-figtree-bold text-xs text-white">
              View Profile
            </Text>
            <ChevronRightIcon size={14} color="#FFFFFF" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
