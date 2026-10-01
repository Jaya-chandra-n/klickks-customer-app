import { AuthTabSwitcher, AuthMethod } from '@/components/ui/auth-tab-switcher';
import { BackHeader } from '@/components/ui/back-header';
import { AuthSubmitButton } from '@/components/ui/auth-submit-button';
import { TermsAndConditions } from '@/components/ui/terms-and-conditions';
import { useAuthStore } from '@/stores/auth';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
    const [method, setMethod] = useState<AuthMethod>('whatsapp');
    const [countryCode, setCountryCode] = useState('+91');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const setOtpContext = useAuthStore((s) => s.setOtpContext);

    const isPhoneValid = phone.length === 10;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValid = method === 'whatsapp' ? isPhoneValid : isEmailValid;

    const handleMethodChange = (v: AuthMethod) => {
        setMethod(v);
        setPhone('');
        setEmail('');
    };

    const handleSubmit = async () => {
        if (!isValid) return;
        setIsLoading(true);

        setOtpContext({
            method,
            phone: method === 'whatsapp' ? phone : undefined,
            countryCode: method === 'whatsapp' ? countryCode : undefined,
            email: method === 'email' ? email : undefined,
        });

        setTimeout(() => {
            setIsLoading(false);
            router.push('/(auth)/otp');
        }, 400);
    };

    return (
        <SafeAreaView className='flex-1 bg-white'>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className='flex-1'
            >
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingHorizontal: 16,
                        paddingBottom: 32,
                    }}
                    keyboardShouldPersistTaps='handled'
                    showsVerticalScrollIndicator={false}
                >
                    <BackHeader title='Login/Signup' />
                    <AuthTabSwitcher
                        active={method}
                        onChange={handleMethodChange}
                    />

                    <View className='mt-8 flex-1'>
                        {method === 'whatsapp' ? (
                            <>
                                <Text className='font-figtree text-sm text-[#232323]/60 mb-3'>
                                    Enter your WhatsApp number
                                </Text>

                                <View className='flex-row gap-2'>
                                    <TextInput
                                        className='w-16 h-14 rounded-xl border border-[#232323]/60 px-2 text-sm text-center text-[#232323] font-figtree'
                                        value={countryCode}
                                        onChangeText={setCountryCode}
                                        keyboardType='phone-pad'
                                        accessibilityLabel='Country code'
                                    />
                                    <TextInput
                                        className='flex-1 h-14 rounded-xl border border-[#232323] px-4 text-base text-[#232323] font-figtree'
                                        value={phone}
                                        onChangeText={setPhone}
                                        keyboardType='phone-pad'
                                        maxLength={10}
                                        placeholder='Enter 10-digit number'
                                        placeholderTextColor='#23232366'
                                        accessibilityLabel='Phone number'
                                    />
                                </View>

                                <Text className='font-figtree text-[13px] text-[#232323]/50 mt-2'>
                                    OTP will be sent to this WhatsApp number.
                                </Text>
                            </>
                        ) : (
                            <>
                                <Text className='font-figtree text-sm text-[#232323]/60 mb-3'>
                                    Enter your Email ID
                                </Text>

                                <TextInput
                                    className='w-full h-14 rounded-xl border border-[#232323] px-4 text-base text-[#232323] font-figtree'
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                    placeholder='name@example.com'
                                    placeholderTextColor='#23232366'
                                    accessibilityLabel='Email address'
                                />

                                <Text className='font-figtree text-[13px] text-[#232323]/50 mt-2'>
                                    OTP will be sent to this email address.
                                </Text>
                            </>
                        )}

                        <AuthSubmitButton
                            onPress={handleSubmit}
                            isLoading={isLoading}
                            isDisabled={!isValid || isLoading}
                        />

                        <TermsAndConditions />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
