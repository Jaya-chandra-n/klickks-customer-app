import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import { useLocationStore, POPULAR_CITIES } from '@/stores/location';
import { MapPinIcon, CloseIcon, SearchIcon, CheckIcon } from '@/utils/icons';

interface LocationModalProps {
  visible: boolean;
  onClose: () => void;
}

export function LocationModal({ visible, onClose }: LocationModalProps) {
  const { selectedCity, setSelectedCity, savedLocations, setDeliveryLocation, activeDeliveryLocation } =
    useLocationStore();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCities = POPULAR_CITIES.filter((c) =>
    c.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 bg-black/50 justify-end">
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View
              className="bg-white rounded-t-[32px] p-6 max-h-[85%]"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: -10 },
                shadowOpacity: 0.15,
                shadowRadius: 20,
                elevation: 10,
              }}
            >
              {/* Header */}
              <View className="flex-row items-center justify-between pb-4 border-b border-[#23232314]">
                <View>
                  <Text className="font-figtree-bold text-xl text-[#232323]">
                    Select Shoot / Service City
                  </Text>
                  <Text className="font-figtree text-xs text-[#232323]/60 mt-0.5">
                    Photographers & services available for delivery in your city
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={onClose}
                  className="w-9 h-9 rounded-full bg-[#F5F5F5] items-center justify-center"
                >
                  <CloseIcon size={20} color="#232323" />
                </TouchableOpacity>
              </View>

              {/* Search Bar */}
              <View className="my-4 flex-row items-center bg-[#F8F9FA] border border-[#23232314] rounded-2xl px-4 py-3">
                <SearchIcon size={18} color="#6C6C6C" />
                <TextInput
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  placeholder="Search city or area..."
                  placeholderTextColor="#8C8C8C"
                  className="flex-1 ml-2 font-figtree text-sm text-[#232323]"
                />
              </View>

              <ScrollView showsVerticalScrollIndicator={false} className="mb-2">
                {/* Saved Delivery Addresses */}
                {savedLocations.length > 0 && (
                  <View className="mb-6">
                    <Text className="font-figtree-semibold text-xs uppercase tracking-wider text-[#232323]/50 mb-3">
                      Saved Delivery Addresses
                    </Text>
                    {savedLocations.map((loc) => {
                      const isActive = activeDeliveryLocation?.id === loc.id;
                      return (
                        <TouchableOpacity
                          key={loc.id}
                          onPress={() => {
                            setDeliveryLocation(loc);
                            onClose();
                          }}
                          className={`p-3.5 rounded-2xl mb-2.5 border flex-row items-center justify-between ${
                            isActive
                              ? 'bg-[#232323] border-[#232323]'
                              : 'bg-white border-[#23232314]'
                          }`}
                        >
                          <View className="flex-row items-center flex-1 mr-2">
                            <View
                              className={`w-9 h-9 rounded-full items-center justify-center mr-3 ${
                                isActive ? 'bg-white/20' : 'bg-[#F5F5F5]'
                              }`}
                            >
                              <MapPinIcon size={18} color={isActive ? '#FFFFFF' : '#232323'} />
                            </View>
                            <View className="flex-1">
                              <Text
                                className={`font-figtree-semibold text-sm ${
                                  isActive ? 'text-white' : 'text-[#232323]'
                                }`}
                              >
                                {loc.area}, {loc.city}
                              </Text>
                              <Text
                                className={`font-figtree text-xs mt-0.5 ${
                                  isActive ? 'text-white/70' : 'text-[#232323]/60'
                                }`}
                                numberOfLines={1}
                              >
                                {loc.addressLine}
                              </Text>
                            </View>
                          </View>

                          {isActive && <CheckIcon size={18} color="#FFFFFF" />}
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                )}

                {/* Popular Cities */}
                <Text className="font-figtree-semibold text-xs uppercase tracking-wider text-[#232323]/50 mb-3">
                  Popular Service Cities
                </Text>
                <View className="flex-row flex-wrap gap-2.5">
                  {filteredCities.map((city) => {
                    const isSelected = selectedCity === city;
                    return (
                      <TouchableOpacity
                        key={city}
                        onPress={() => {
                          setSelectedCity(city);
                          onClose();
                        }}
                        className={`px-4 py-2.5 rounded-full border ${
                          isSelected
                            ? 'bg-[#232323] border-[#232323]'
                            : 'bg-white border-[#2323231F]'
                        }`}
                      >
                        <Text
                          className={`font-figtree-medium text-sm ${
                            isSelected ? 'text-white' : 'text-[#232323]'
                          }`}
                        >
                          {city}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
