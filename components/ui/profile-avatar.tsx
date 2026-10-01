import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { EditIcon } from '@/components/icons/menu-icons';
import { useAuthStore } from '@/stores/auth';

export function ProfileAvatar({ initialImage }: { initialImage?: string }) {
  const { customer } = useAuthStore();
  const [imageUri, setImageUri] = useState<string | null>(initialImage || customer?.avatar || null);

  const handlePickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View className="items-center mt-5 mb-5">
      <View className="relative">
        {/* ── Avatar Circle (220px x 220px) ─────────────────────────── */}
        <View
          className="w-[220px] h-[220px] rounded-full items-center justify-center overflow-hidden"
          style={{
            backgroundColor: '#ECECEC',
            borderWidth: 2,
            borderColor: '#DEDEDE',
          }}
        >
          {imageUri ? (
            <Image
              source={{ uri: imageUri }}
              className="w-full h-full"
              resizeMode="cover"
            />
          ) : (
            <Text className="font-figtree text-sm text-[#232323]/60 text-center px-6">
              Upload Profile Picture
            </Text>
          )}
        </View>

        {/* ── Edit Button ───────────────────────────── */}
        <View className="absolute -bottom-3 w-full items-center">
          <Pressable
            onPress={handlePickImage}
            className="bg-white rounded-full w-11 h-11 items-center justify-center"
            accessibilityRole="button"
            accessibilityLabel="Edit profile picture"
            style={({ pressed }) => ({
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.12,
              shadowRadius: 4,
              elevation: 3,
              opacity: pressed ? 0.6 : 1,
            })}
          >
            <EditIcon size={24} color="#232323" />
          </Pressable>
        </View>
      </View>

      {/* User Info Title */}
      <Text className="font-figtree-bold text-xl text-[#232323] mt-5">
        {customer?.name || 'Jay'}
      </Text>
      <Text className="font-figtree text-xs text-[#232323]/60 mt-0.5">
        {customer?.email || 'jay@email.com'} • {customer?.location || 'Bangalore'}
      </Text>
    </View>
  );
}
