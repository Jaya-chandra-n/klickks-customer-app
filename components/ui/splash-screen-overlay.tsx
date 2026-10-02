import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';
import { CameraIcon } from '@/utils/icons';

const { width, height } = Dimensions.get('window');

export function SplashScreenOverlay({ onFinish }: { onFinish: () => void }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.85)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;
  const screenFadeOut = useRef(new Animated.Value(1)).current;

  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    // Entrance animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(progressAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: false,
      }),
    ]).start();

    // 5-second timer countdown
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1000);

    // 5-second total splash screen duration then fade out
    const timer = setTimeout(() => {
      Animated.timing(screenFadeOut, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        onFinish();
      });
    }, 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: '#FFFFFF', // Clean White Background
        alignItems: 'center',
        justifyContent: 'center',
        opacity: screenFadeOut,
      }}
    >
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 30,
        }}
      >
        {/* Animated Camera Icon Lens Ring in Black & White */}
        <View
          style={{
            width: 96,
            height: 96,
            borderRadius: 48,
            backgroundColor: '#000000',
            borderWidth: 3,
            borderColor: '#000000',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 28,
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.15,
            shadowRadius: 20,
            elevation: 8,
          }}
        >
          <CameraIcon size={44} color="#FFFFFF" />
        </View>

        {/* Brand Name using Unbounded 900Black in Solid Black */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              fontFamily: 'Unbounded_900Black',
              fontSize: 34,
              color: '#000000',
              letterSpacing: -0.5,
            }}
          >
            MOMENTZZ
          </Text>
        </View>

        {/* Exact Tagline requested by user in Solid Black */}
        <Text
          style={{
            fontFamily: 'Figtree_700Bold',
            fontSize: 14,
            color: '#000000',
            letterSpacing: 2.5,
            marginTop: 12,
            textTransform: 'uppercase',
          }}
        >
          Discover. Book. Capture.
        </Text>

        <Text
          style={{
            fontFamily: 'Figtree_500Medium',
            fontSize: 12,
            color: '#666666',
            marginTop: 8,
          }}
        >
          India's Premier Photography Marketplace
        </Text>
      </Animated.View>

      {/* 5-Second Animated Progress Bar in Black & White Pattern */}
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          left: 40,
          right: 40,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: '100%',
            height: 4,
            backgroundColor: '#F0F0F0',
            borderRadius: 2,
            overflow: 'hidden',
            marginBottom: 12,
          }}
        >
          <Animated.View
            style={{
              height: '100%',
              backgroundColor: '#000000',
              width: progressWidth,
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Figtree_600SemiBold',
            fontSize: 11,
            color: '#000000',
          }}
        >
          Loading Momentzz... ({secondsLeft}s)
        </Text>
      </View>
    </Animated.View>
  );
}
