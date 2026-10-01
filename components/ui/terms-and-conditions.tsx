import { Text } from 'react-native';

export function TermsAndConditions() {
    return (
        <Text className='font-figtree text-xs text-[#232323]/60 text-center leading-[18px] mt-5'>
            By continuing, you agree to our{' '}
            <Text className='font-figtree-bold underline'>
                Terms & Conditions
            </Text>{' '}
            and{' '}
            <Text className='font-figtree-bold underline'>Privacy Policy</Text>{' '}
            of Klickks.
        </Text>
    );
}
