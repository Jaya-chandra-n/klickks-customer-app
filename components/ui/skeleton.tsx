import React, { useEffect, useRef } from 'react';
import { Animated, ViewProps, StyleProp, ViewStyle, View } from 'react-native';

export interface SkeletonProps extends ViewProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  className?: string;
  style?: StyleProp<ViewStyle>;
}

export function Skeleton({
  width,
  height,
  borderRadius = 12,
  className = '',
  style,
  ...props
}: SkeletonProps) {
  const opacity = useRef(new Animated.Value(0.35)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.85,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.35,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        {
          width: width as any,
          height: height as any,
          borderRadius,
          backgroundColor: '#E2E8F0',
          opacity,
        },
        style,
      ]}
      className={className}
      {...props}
    />
  );
}

export function PhotographerCardSkeleton({ horizontal = false }: { horizontal?: boolean }) {
  if (horizontal) {
    return (
      <View className="bg-white rounded-[20px] overflow-hidden border border-[#23232314] mr-4 w-80 p-0">
        <Skeleton width="100%" height={160} borderRadius={0} />
        <View className="p-4 bg-white">
          <View className="flex-row items-center justify-between mb-2">
            <Skeleton width={160} height={18} borderRadius={6} />
            <Skeleton width={50} height={16} borderRadius={6} />
          </View>
          <Skeleton width={100} height={14} borderRadius={4} className="mb-3" />
          <View className="flex-row gap-2" style={{ flexDirection: 'row', gap: 8 }}>
            <Skeleton width={70} height={22} borderRadius={12} />
            <Skeleton width={70} height={22} borderRadius={12} />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View className="bg-white rounded-[22px] overflow-hidden border border-[#2323231A] mb-4 w-full p-0">
      <Skeleton width="100%" height={192} borderRadius={0} />
      <View className="p-4 bg-white">
        <View className="flex-row items-center justify-between mb-2">
          <View className="flex-1 mr-2 gap-2" style={{ gap: 6 }}>
            <Skeleton width="70%" height={20} borderRadius={6} />
            <Skeleton width="45%" height={14} borderRadius={4} />
          </View>
          <Skeleton width={60} height={20} borderRadius={6} />
        </View>
        <View className="flex-row gap-2 my-3" style={{ flexDirection: 'row', gap: 8 }}>
          <Skeleton width={80} height={24} borderRadius={12} />
          <Skeleton width={80} height={24} borderRadius={12} />
          <Skeleton width={80} height={24} borderRadius={12} />
        </View>
        <View className="flex-row items-center justify-between pt-3 mt-1 border-t border-[#23232314]">
          <View className="gap-1" style={{ gap: 4 }}>
            <Skeleton width={60} height={10} borderRadius={4} />
            <Skeleton width={90} height={18} borderRadius={6} />
          </View>
          <Skeleton width={110} height={36} borderRadius={18} />
        </View>
      </View>
    </View>
  );
}

export function CategoryPillSkeleton() {
  return <Skeleton width={100} height={42} borderRadius={21} className="mr-3" />;
}

export function BookingCardSkeleton() {
  return (
    <View className="bg-white rounded-2xl p-4 border border-[#2323231F] mb-4">
      <View className="flex-row items-center gap-3 mb-3" style={{ flexDirection: 'row', gap: 12 }}>
        <Skeleton width={48} height={48} borderRadius={24} />
        <View className="flex-1 gap-1.5" style={{ gap: 6 }}>
          <Skeleton width="60%" height={16} borderRadius={4} />
          <Skeleton width="40%" height={12} borderRadius={4} />
        </View>
      </View>
      <Skeleton width="100%" height={40} borderRadius={10} className="mb-3" />
      <View className="flex-row justify-between items-center pt-2 border-t border-[#23232314]">
        <Skeleton width={80} height={14} borderRadius={4} />
        <Skeleton width={90} height={32} borderRadius={16} />
      </View>
    </View>
  );
}

export function MessageSkeleton() {
  return (
    <View className="flex-row items-center px-5 py-3.5 border-b border-[#2323230F]">
      <Skeleton width={52} height={52} borderRadius={26} />
      <View className="flex-1 ml-3 gap-1.5" style={{ gap: 6 }}>
        <View className="flex-row justify-between items-center">
          <Skeleton width={120} height={16} borderRadius={4} />
          <Skeleton width={40} height={12} borderRadius={4} />
        </View>
        <Skeleton width="80%" height={14} borderRadius={4} />
      </View>
    </View>
  );
}
