import { BackHeader } from '@/components/ui/back-header';
import { OtpInput } from '@/components/ui/otp-input';
import { TermsAndConditions } from '@/components/ui/terms-and-conditions';
import { useAuthStore } from '@/stores/auth';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OtpScreen() {
    const { otpContext, verifyOtp } = useAuthStore();
    const [otp, setOtp] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const targetDisplay =
        otpContext?.method === 'whatsapp'
            ? `${otpContext.countryCode ?? '+91'} ${otpContext.phone ?? ''}`
            : (otpContext?.email ?? 'your email');

    const handleVerify = async () => {
        if (otp.length !== 6) return;
        setIsLoading(true);
        setError('');

        const success = await verifyOtp(otp);
        setIsLoading(false);

        if (success) {
            router.replace('/(tabs)');
        } else {
            setError('Invalid OTP. Use dummy code 123456');
        }
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
                    <View className='w-full max-w-[480px] self-center flex-1'>
                        <BackHeader title='OTP Verification' noBorder />

                        <View className='mt-8 flex-1'>
                            <Text className='font-figtree text-sm text-[#232323]/60 mb-6'>
                                OTP sent to{' '}
                                <Text className='font-figtree-semibold text-[#232323]'>
                                    {targetDisplay}
                                </Text>
                            </Text>

                            <Text className='font-figtree text-sm text-[#232323]/60 mb-3'>
                                Enter 6-digit OTP code (Demo: 123456)
                            </Text>

                            <OtpInput
                                value={otp}
                                onChange={(val) => {
                                    setOtp(val);
                                    setError('');
                                }}
                                hasError={!!error}
                            />

                            {error ? (
                                <Text className='font-figtree text-xs text-[#E53935] mt-2'>
                                    {error}
                                </Text>
                            ) : null}

                            <Pressable
                                className={`w-full max-w-[358px] h-14 rounded-2xl justify-center items-center self-center mt-12 border border-[#232323] bg-white ${
                                    otp.length < 6 || isLoading ? 'opacity-45' : ''
                                }`}
                                onPress={handleVerify}
                                disabled={otp.length < 6 || isLoading}
                                accessibilityRole='button'
                                accessibilityLabel='Submit OTP'
                                style={({ pressed }) =>
                                    pressed && otp.length === 6 && !isLoading
                                        ? { backgroundColor: 'rgba(35,35,35,0.06)' }
                                        : {}
                                }
                            >
                                {isLoading ? (
                                    <ActivityIndicator color='#232323' />
                                ) : (
                                    <Text className='font-figtree-bold text-base text-[#232323]'>
                                        Submit
                                    </Text>
                                )}
                            </Pressable>

                            <TermsAndConditions />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
