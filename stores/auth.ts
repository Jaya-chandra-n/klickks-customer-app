import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomerProfile, defaultCustomer } from '@/data/customer';

export type AuthMethod = 'whatsapp' | 'phone' | 'email';

export type OtpContext = {
    method: AuthMethod;
    phone?: string;
    countryCode?: string;
    email?: string;
};

type AuthState = {
    isLoggedIn: boolean;
    isLoading: boolean;
    customer: CustomerProfile | null;
    otpContext: OtpContext | null;

    setOtpContext: (ctx: OtpContext) => void;
    verifyOtp: (otp: string) => Promise<boolean>;
    login: () => Promise<void>;
    logout: () => Promise<void>;
    checkAuth: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set, get) => ({
    isLoggedIn: false,
    isLoading: true,
    customer: null,
    otpContext: null,

    setOtpContext: (ctx) => set({ otpContext: ctx }),

    verifyOtp: async (otp: string) => {
        // Dummy — accept any 6-digit code
        if (otp.length === 6 && /^\d{6}$/.test(otp)) {
            await get().login();
            return true;
        }
        return false;
    },

    login: async () => {
        await AsyncStorage.setItem('klickks_customer_auth', 'true');
        set({ isLoggedIn: true, customer: defaultCustomer, isLoading: false });
    },

    logout: async () => {
        await AsyncStorage.removeItem('klickks_customer_auth');
        set({
            isLoggedIn: false,
            customer: null,
            otpContext: null,
            isLoading: false,
        });
    },

    checkAuth: async () => {
        try {
            const token = await AsyncStorage.getItem('klickks_customer_auth');
            if (token === 'true') {
                set({
                    isLoggedIn: true,
                    customer: defaultCustomer,
                    isLoading: false,
                });
            } else {
                set({ isLoggedIn: false, isLoading: false });
            }
        } catch {
            set({ isLoggedIn: false, isLoading: false });
        }
    },
}));
