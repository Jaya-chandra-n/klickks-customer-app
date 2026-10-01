import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type DeliveryLocation = {
  id: string;
  city: string;
  area: string;
  pincode: string;
  addressLine: string;
  isDefault?: boolean;
};

export const POPULAR_CITIES = [
  'All Cities',
  'Bangalore',
  'Mumbai',
  'Delhi NCR',
  'Hyderabad',
  'Chennai',
  'Pune',
  'Goa',
  'Jaipur',
  'Kolkata',
  'Ahmedabad',
  'Kochi',
  'Chandigarh',
];

type LocationState = {
  selectedCity: string;
  selectedArea: string;
  savedLocations: DeliveryLocation[];
  activeDeliveryLocation: DeliveryLocation | null;
  setSelectedCity: (city: string) => void;
  setSelectedArea: (area: string) => void;
  setDeliveryLocation: (location: DeliveryLocation) => void;
  addDeliveryLocation: (location: Omit<DeliveryLocation, 'id'>) => void;
  loadLocation: () => Promise<void>;
};

export const useLocationStore = create<LocationState>((set, get) => ({
  selectedCity: 'Bangalore',
  selectedArea: 'Indiranagar',
  savedLocations: [
    {
      id: 'loc_1',
      city: 'Bangalore',
      area: 'Indiranagar',
      pincode: '560038',
      addressLine: '12th Main Rd, Indiranagar',
      isDefault: true,
    },
    {
      id: 'loc_2',
      city: 'Mumbai',
      area: 'Bandra West',
      pincode: '400050',
      addressLine: 'Hill Road, Bandra West',
    },
    {
      id: 'loc_3',
      city: 'Delhi NCR',
      area: 'South Extension',
      pincode: '110049',
      addressLine: 'Part 2, South Extension',
    },
  ],
  activeDeliveryLocation: {
    id: 'loc_1',
    city: 'Bangalore',
    area: 'Indiranagar',
    pincode: '560038',
    addressLine: '12th Main Rd, Indiranagar',
    isDefault: true,
  },

  setSelectedCity: async (city: string) => {
    set({ selectedCity: city });
    await AsyncStorage.setItem('klickks_selected_city', city);
  },

  setSelectedArea: (area: string) => {
    set({ selectedArea: area });
  },

  setDeliveryLocation: async (location: DeliveryLocation) => {
    set({
      activeDeliveryLocation: location,
      selectedCity: location.city,
      selectedArea: location.area,
    });
    await AsyncStorage.setItem('klickks_active_location', JSON.stringify(location));
  },

  addDeliveryLocation: (loc) => {
    const newLoc: DeliveryLocation = {
      ...loc,
      id: `loc_${Date.now()}`,
    };
    set((state) => ({
      savedLocations: [newLoc, ...state.savedLocations],
      activeDeliveryLocation: newLoc,
      selectedCity: newLoc.city,
      selectedArea: newLoc.area,
    }));
  },

  loadLocation: async () => {
    try {
      const city = await AsyncStorage.getItem('klickks_selected_city');
      const savedLocStr = await AsyncStorage.getItem('klickks_active_location');
      if (city) {
        set({ selectedCity: city });
      }
      if (savedLocStr) {
        const loc = JSON.parse(savedLocStr);
        set({ activeDeliveryLocation: loc, selectedCity: loc.city, selectedArea: loc.area });
      }
    } catch {
      // fallback to default
    }
  },
}));
