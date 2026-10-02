import { Buffer } from 'buffer';
if (typeof globalThis !== 'undefined') {
  (globalThis as any).Buffer = (globalThis as any).Buffer || Buffer;
}

import React, { useEffect, useState } from 'react';
import { Stack, SplashScreen, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cssInterop } from 'nativewind';
import { useAppFonts } from '@/hooks/use-app-fonts';
import { useAuthStore } from '@/stores/auth';
import { Snackbar } from '@/components/ui/snackbar';
import { SplashScreenOverlay } from '@/components/ui/splash-screen-overlay';
import '../global.css';

cssInterop(SafeAreaView, { className: 'style' });

// Prevent splash screen from auto-hiding before assets load
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const { fontsLoaded, fontError } = useAppFonts();
  const { isLoggedIn, isLoading, checkAuth } = useAuthStore();
  const [appReady, setAppReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide splash screen once fonts are loaded (or failed)
      SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    if (!appReady || isLoading || showSplash) return;

    if (!isLoggedIn) {
      router.replace('/(auth)/login');
    }
  }, [appReady, isLoading, isLoggedIn, showSplash]);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Snackbar />

      {/* 5-Second Momentizz Animated Splash Screen */}
      {showSplash && appReady && (
        <SplashScreenOverlay onFinish={() => setShowSplash(false)} />
      )}

      {/* Unconditionally mounted Stack Navigator */}
      <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="photographer/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="booking-flow/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="booking-detail/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="chat/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="favorites" options={{ headerShown: false }} />
      </Stack>

      {/* Loading Overlay */}
      {(!appReady || isLoading) && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#232323" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    zIndex: 50,
  },
});
