import { ActivityIndicator, Pressable, Text } from 'react-native';

export function AuthSubmitButton({
    onPress,
    isLoading,
    isDisabled,
    isExistingUser = false,
}: {
    onPress: () => void;
    isLoading: boolean;
    isDisabled: boolean;
    isExistingUser?: boolean;
}) {
    const label = isExistingUser ? 'Login' : 'Send OTP';
    return (
        <Pressable
            className={`w-full max-w-[358px] h-14 rounded-2xl justify-center items-center self-center mt-12 border border-[#232323] bg-white ${isDisabled ? 'opacity-45' : ''}`}
            onPress={onPress}
            disabled={isDisabled}
            accessibilityRole='button'
            accessibilityLabel={label}
            style={({ pressed }) =>
                pressed && !isDisabled
                    ? { backgroundColor: 'rgba(35,35,35,0.06)' }
                    : {}
            }
        >
            {isLoading ? (
                <ActivityIndicator color='#232323' />
            ) : (
                <Text
                    className={`font-figtree-bold text-base ${isDisabled ? 'text-[#232323]/[0.36]' : 'text-[#232323]'}`}
                >
                    {label}
                </Text>
            )}
        </Pressable>
    );
}
