import { EmailIcon, WhatsappPngIcon } from '@/components/icons/auth-icons';
import { Pressable, Text, View } from 'react-native';

export type AuthMethod = 'whatsapp' | 'email';

export function AuthTabSwitcher({
    active,
    onChange,
}: {
    active: AuthMethod;
    onChange: (v: AuthMethod) => void;
}) {
    return (
        <View className='flex-row h-16 p-2 rounded-[41px] border border-black/10 mt-[18px]'>
            <Pressable
                className={`flex-1 flex-row justify-center items-center gap-2 rounded-[48px] py-3 px-4 ${active === 'whatsapp' ? 'bg-[#00A03C]' : 'bg-transparent'}`}
                onPress={() => onChange('whatsapp')}
                accessibilityRole='tab'
                accessibilityState={{ selected: active === 'whatsapp' }}
            >
                <WhatsappPngIcon size={20} />
                <Text
                    className={`text-sm ${active === 'whatsapp' ? 'font-figtree-semibold text-white' : 'font-figtree text-[#232323]'}`}
                >
                    WhatsApp Number
                </Text>
            </Pressable>

            <Pressable
                className={`flex-1 flex-row justify-center items-center gap-2 rounded-[48px] py-3 px-4 ${active === 'email' ? 'bg-[#232323]' : 'bg-transparent'}`}
                onPress={() => onChange('email')}
                accessibilityRole='tab'
                accessibilityState={{ selected: active === 'email' }}
            >
                <EmailIcon
                    color={active === 'email' ? '#FFF' : '#232323'}
                    size={20}
                />
                <Text
                    className={`text-sm ${active === 'email' ? 'font-figtree-semibold text-white' : 'font-figtree text-[#232323]'}`}
                >
                    Email ID
                </Text>
            </Pressable>
        </View>
    );
}
