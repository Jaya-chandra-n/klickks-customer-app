import { ChevronRightIcon } from '@/components/icons/menu-icons';
import { Pressable, Text, View } from 'react-native';

// ─── Menu Row ─────────────────────────────────────────────────────
export interface MenuRowProps {
    label: string;
    onPress: () => void;
}

export function MenuRow({ label, onPress }: MenuRowProps) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
            className='flex-row items-center justify-between py-4'
            accessibilityRole='button'
        >
            <Text className='font-figtree text-base text-[#232323]'>
                {label}
            </Text>
            <ChevronRightIcon size={20} color='#232323' />
        </Pressable>
    );
}

// ─── Row Divider ──────────────────────────────────────────────────
export function RowDivider() {
    return <View style={{ height: 1, backgroundColor: 'rgba(0,0,0,0.08)' }} />;
}

// ─── Section Divider (between cards) ─────────────────────────────
export function SectionDivider() {
    return <View className='h-4' />;
}

// ─── Section Title ────────────────────────────────────────────────
export function SectionTitle({ title }: { title: string }) {
    return (
        <Text className='font-figtree-semibold text-base text-[#232323] '>
            {title}
        </Text>
    );
}

// ─── Card Wrapper ─────────────────────────────────────────────────
export function MenuCard({ children }: { children: React.ReactNode }) {
    return (
        <View
            className='rounded-[20px] border border-[#23232314] bg-white p-4'
            style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.06,
                shadowRadius: 12,
                elevation: 4,
            }}
        >
            {children}
        </View>
    );
}
