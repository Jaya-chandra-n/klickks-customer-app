import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { photographers } from '@/data/photographers';
import { useFavoritesStore } from '@/stores/favorites';
import { PhotographerCard } from '@/components/photographer-card';
import { BackHeader } from '@/components/ui/back-header';
import { EmptyState } from '@/components/ui/empty-state';
import { HeartIcon } from '@/utils/icons';

export default function FavoritesScreen() {
  const router = useRouter();
  const { favoriteIds } = useFavoritesStore();

  const savedPhotographers = photographers.filter((p) =>
    favoriteIds.includes(p.id)
  );

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <BackHeader title="Saved Photographers" subtitle={`${savedPhotographers.length} saved studios`} />

      <ScrollView contentContainerStyle={{ padding: 20 }} className="flex-1" showsVerticalScrollIndicator={false}>
        {savedPhotographers.length > 0 ? (
          savedPhotographers.map((photographer) => (
            <PhotographerCard
              key={photographer.id}
              photographer={photographer}
              onPress={() => router.push(`/photographer/${photographer.id}`)}
            />
          ))
        ) : (
          <EmptyState
            icon={<HeartIcon size={28} color="#000000" />}
            title="No Saved Photographers"
            description="Tap the heart icon on any photographer profile or card to save them here for quick booking later."
            actionLabel="Discover Photographers"
            onAction={() => router.push('/(tabs)/explore')}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
