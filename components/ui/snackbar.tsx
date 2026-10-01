import React, { useEffect } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { useSnackbarStore } from '@/stores/snackbar';
import { CheckIcon, InfoIcon, AlertTriangleIcon, XIcon } from '@/utils/icons';

export function Snackbar() {
  const { visible, message, kind, hide, durationMs } = useSnackbarStore();
  const translateY = React.useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (visible) {
      Animated.spring(translateY, {
        toValue: 50,
        useNativeDriver: true,
        friction: 8,
      }).start();

      const timer = setTimeout(() => {
        handleClose();
      }, durationMs);

      return () => clearTimeout(timer);
    } else {
      Animated.timing(translateY, {
        toValue: -100,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const handleClose = () => {
    Animated.timing(translateY, {
      toValue: -100,
      duration: 200,
      useNativeDriver: true,
    }).start(() => hide());
  };

  if (!visible) return null;

  const getBackgroundColor = () => {
    switch (kind) {
      case 'error':
        return 'bg-red-600';
      case 'success':
        return 'bg-emerald-600';
      case 'warning':
        return 'bg-amber-600';
      case 'info':
      default:
        return 'bg-slate-900';
    }
  };

  const getIcon = () => {
    switch (kind) {
      case 'error':
        return <AlertTriangleIcon size={18} color="#FFFFFF" />;
      case 'success':
        return <CheckIcon size={18} color="#FFFFFF" />;
      case 'warning':
        return <AlertTriangleIcon size={18} color="#FFFFFF" />;
      case 'info':
      default:
        return <InfoIcon size={18} color="#FFFFFF" />;
    }
  };

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 16,
        right: 16,
        transform: [{ translateY }],
        zIndex: 9999,
      }}
    >
      <View
        className={`flex-row items-center justify-between px-4 py-3.5 rounded-2xl shadow-lg ${getBackgroundColor()}`}
      >
        <View className="flex-row items-center flex-1 mr-2 space-x-3">
          {getIcon()}
          <Text className="text-sm font-medium text-white flex-1 ml-2">
            {message}
          </Text>
        </View>
        <TouchableOpacity onPress={handleClose} activeOpacity={0.7}>
          <XIcon size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
