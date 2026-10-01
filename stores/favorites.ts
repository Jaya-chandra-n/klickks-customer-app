import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

type FavoritesState = {
    favoriteIds: string[];
    initialized: boolean;
    loadFavorites: () => Promise<void>;
    toggleFavorite: (id: string) => Promise<void>;
    isFavorite: (id: string) => boolean;
};

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
    favoriteIds: [],
    initialized: false,

    loadFavorites: async () => {
        try {
            const stored = await AsyncStorage.getItem('klickks_favorites');
            if (stored) {
                set({ favoriteIds: JSON.parse(stored), initialized: true });
            } else {
                set({ favoriteIds: [], initialized: true });
            }
        } catch {
            set({ favoriteIds: [], initialized: true });
        }
    },

    toggleFavorite: async (id: string) => {
        const { favoriteIds } = get();
        const newFavorites = favoriteIds.includes(id)
            ? favoriteIds.filter((fId) => fId !== id)
            : [...favoriteIds, id];

        set({ favoriteIds: newFavorites });
        try {
            await AsyncStorage.setItem(
                'klickks_favorites',
                JSON.stringify(newFavorites),
            );
        } catch {
            // Silently fail on storage error
        }
    },

    isFavorite: (id: string) => get().favoriteIds.includes(id),
}));
