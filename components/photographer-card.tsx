import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Photographer } from '@/data/photographers';
import { RatingStars } from './ui/rating-stars';
import { Badge } from './ui/badge';
import { HeartIcon, MapPinIcon, ChevronRightIcon, SparklesIcon } from '@/utils/icons';
import { useFavoritesStore } from '@/stores/favorites';

export interface PhotographerCardProps {
  photographer: Photographer;
  onPress: () => void;
  horizontal?: boolean;
  className?: string;
}

function PhotographerCardComponent({
  photographer,
  onPress,
  horizontal = false,
  className = '',
}: PhotographerCardProps) {
  const { isFavorite, toggleFavorite } = useFavoritesStore();
  const favorite = isFavorite(photographer.id);

  const isFreeOffer =
    photographer.offerTag &&
    (photographer.offerTag.toLowerCase().includes('free') ||
      photographer.offerTag.toLowerCase().includes('complimentary'));

  if (horizontal) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        className={`bg-white rounded-[20px] overflow-hidden border border-[#23232314] mr-4 w-80 ${className}`}
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.06,
          shadowRadius: 12,
          elevation: 4,
        }}
      >
        <View className="relative h-40 w-full">
          <Image
            source={{ uri: photographer.coverImage }}
            className="w-full h-full"
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={() => toggleFavorite(photographer.id)}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 items-center justify-center z-10"
          >
            <HeartIcon
              size={16}
              color={favorite ? '#EF4444' : '#FFFFFF'}
              fill={favorite ? '#EF4444' : 'none'}
            />
          </TouchableOpacity>

          {/* Top Badges Row */}
          <View
            className="absolute top-3 left-3 flex-row items-center flex-wrap"
            style={{ maxWidth: '75%', flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}
          >
            {photographer.isAvailableToday ? (
              <View className="bg-[#232323]/95 px-2.5 py-1 rounded-full flex-row items-center shadow-sm">
                <View className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5" />
                <Text allowFontScaling={false} className="font-figtree-bold text-[9px] text-white uppercase tracking-wider">
                  Today
                </Text>
              </View>
            ) : photographer.isAvailableThisWeek ? (
              <View className="bg-[#232323]/95 px-2.5 py-1 rounded-full flex-row items-center shadow-sm">
                <View className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-1.5" />
                <Text allowFontScaling={false} className="font-figtree-bold text-[9px] text-white uppercase tracking-wider">
                  This Week
                </Text>
              </View>
            ) : null}

            {photographer.offerTag && (
              <View
                className={`px-2.5 py-1 rounded-full shadow-sm flex-row items-center ${
                  isFreeOffer ? 'bg-[#7C3AED]' : 'bg-[#00A03C]'
                }`}
                style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
              >
                {isFreeOffer && <SparklesIcon size={10} color="#FFFFFF" />}
                <Text allowFontScaling={false} className="font-figtree-bold text-[9px] text-white uppercase tracking-wider">
                  {photographer.offerTag}
                </Text>
              </View>
            )}
          </View>

          <View
            className="absolute bottom-2 left-3 bg-[#232323]/90 px-2.5 py-1 rounded-lg flex-row items-center"
            style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}
          >
            <Text allowFontScaling={false} className="font-figtree-semibold text-[10px] text-white">
              From ₹{photographer.startingPrice.toLocaleString('en-IN')}
            </Text>
            {photographer.originalPrice && (
              <Text allowFontScaling={false} className="font-figtree text-[9px] text-white/70 line-through">
                ₹{photographer.originalPrice.toLocaleString('en-IN')}
              </Text>
            )}
          </View>
        </View>

        <View className="p-4 bg-white">
          <View className="flex-row items-center justify-between mb-1.5">
            <Text
              allowFontScaling={false}
              className="font-figtree-bold text-base text-[#232323] flex-1 mr-2"
              numberOfLines={1}
            >
              {photographer.name}
            </Text>
            <RatingStars rating={photographer.rating} showText />
          </View>

          <View className="flex-row items-center mb-2.5">
            <MapPinIcon size={12} color="#6C6C6C" />
            <Text allowFontScaling={false} className="font-figtree text-xs text-[#232323]/60 ml-1.5 flex-1" numberOfLines={1}>
              {photographer.city}
            </Text>
          </View>

          <View className="flex-row flex-wrap" style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
            {photographer.specialties.slice(0, 3).map((spec, idx) => (
              <View key={idx}>
                <Badge label={spec} size="sm" variant="slate" />
              </View>
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
      className={`bg-white rounded-[22px] overflow-hidden border border-[#2323231A] mb-4 w-full ${className}`}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.08,
        shadowRadius: 16,
        elevation: 5,
      }}
    >
      <View className="relative h-48 w-full">
        <Image
          source={{ uri: photographer.coverImage }}
          className="w-full h-full"
          resizeMode="cover"
        />

        <TouchableOpacity
          onPress={() => toggleFavorite(photographer.id)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 items-center justify-center z-10"
        >
          <HeartIcon
            size={18}
            color={favorite ? '#EF4444' : '#FFFFFF'}
            fill={favorite ? '#EF4444' : 'none'}
          />
        </TouchableOpacity>

        {/* Top Badges Container */}
        <View
          className="absolute top-3 left-3 flex-row items-center flex-wrap"
          style={{ maxWidth: '80%', flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}
        >
          {photographer.isAvailableToday ? (
            <View className="bg-[#232323]/95 px-3 py-1 rounded-full flex-row items-center shadow-sm">
              <View className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5" />
              <Text allowFontScaling={false} className="font-figtree-bold text-[10px] text-white uppercase tracking-wider">
                Available Today
              </Text>
            </View>
          ) : photographer.isAvailableThisWeek ? (
            <View className="bg-[#232323]/95 px-3 py-1 rounded-full flex-row items-center shadow-sm">
              <View className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-1.5" />
              <Text allowFontScaling={false} className="font-figtree-bold text-[10px] text-white uppercase tracking-wider">
                Available This Week
              </Text>
            </View>
          ) : null}

          {photographer.offerTag && (
            <View
              className={`px-3 py-1 rounded-full shadow-sm flex-row items-center ${
                isFreeOffer ? 'bg-[#7C3AED]' : 'bg-[#00A03C]'
              }`}
              style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
            >
              {isFreeOffer && <SparklesIcon size={11} color="#FFFFFF" />}
              <Text allowFontScaling={false} className="font-figtree-bold text-[10px] text-white uppercase tracking-wider">
                {photographer.offerTag}
              </Text>
            </View>
          )}
        </View>
      </View>

      <View className="p-4 bg-white">
        <View className="flex-row justify-between items-start mb-2">
          <View className="flex-1 mr-2">
            <Text allowFontScaling={false} className="font-figtree-bold text-lg text-[#232323]" numberOfLines={1}>
              {photographer.name}
            </Text>
            <View className="flex-row items-center mt-1">
              <MapPinIcon size={13} color="#6C6C6C" />
              <Text allowFontScaling={false} className="font-figtree text-xs text-[#232323]/60 ml-1.5 flex-1" numberOfLines={1}>
                {photographer.location}
              </Text>
            </View>
          </View>

          <RatingStars rating={photographer.rating} reviewCount={photographer.reviewCount} />
        </View>

        {/* Specialty Badges Row */}
        <View className="flex-row flex-wrap my-2" style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
          {photographer.specialties.map((spec, idx) => (
            <View key={idx}>
              <Badge label={spec} size="sm" variant="slate" />
            </View>
          ))}
        </View>

        {/* Pricing & View Profile Action Row */}
        <View className="flex-row items-center justify-between pt-3 mt-1.5 border-t border-[#2323231F]">
          <View>
            <Text allowFontScaling={false} className="font-figtree-semibold text-[10px] uppercase text-[#6C6C6C]">Starting from</Text>
            <View className="flex-row items-baseline mt-0.5" style={{ flexDirection: 'row', alignItems: 'baseline', gap: 6 }}>
              <Text allowFontScaling={false} className="font-figtree-bold text-base text-[#232323]">
                ₹{photographer.startingPrice.toLocaleString('en-IN')}
              </Text>
              {photographer.originalPrice && (
                <Text allowFontScaling={false} className="font-figtree text-xs text-[#6C6C6C] line-through">
                  ₹{photographer.originalPrice.toLocaleString('en-IN')}
                </Text>
              )}
            </View>
          </View>

          <View className="bg-[#232323] px-4 py-2.5 rounded-full flex-row items-center" style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Text allowFontScaling={false} className="font-figtree-bold text-xs text-white">
              View Profile
            </Text>
            <ChevronRightIcon size={14} color="#FFFFFF" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export const PhotographerCard = React.memo(PhotographerCardComponent);




