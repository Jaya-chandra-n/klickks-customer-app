import {
  Figtree_300Light,
  Figtree_400Regular,
  Figtree_500Medium,
  Figtree_600SemiBold,
  Figtree_700Bold,
  useFonts,
} from '@expo-google-fonts/figtree';
import {
  Unbounded_400Regular,
  Unbounded_600SemiBold,
  Unbounded_700Bold,
  Unbounded_900Black,
} from '@expo-google-fonts/unbounded';

export function useAppFonts() {
  const [loaded, error] = useFonts({
    Figtree_300Light,
    Figtree_400Regular,
    Figtree_500Medium,
    Figtree_600SemiBold,
    Figtree_700Bold,
    Unbounded_400Regular,
    Unbounded_600SemiBold,
    Unbounded_700Bold,
    Unbounded_900Black,
  });
  return { fontsLoaded: loaded, fontError: error };
}

