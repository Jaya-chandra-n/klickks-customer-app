import React, { useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface OtpInputProps {
    value: string; // full OTP string e.g. "123456"
    length?: number;
    onChange: (val: string) => void;
    hasError?: boolean;
}

export function OtpInput({
    value,
    length = 6,
    onChange,
    hasError = false,
}: OtpInputProps) {
    const digits = value
        .split('')
        .concat(Array(length).fill(''))
        .slice(0, length);
    const refs = useRef<(TextInput | null)[]>([]);

    const focusNext = (i: number) => refs.current[i + 1]?.focus();
    const focusPrev = (i: number) => refs.current[i - 1]?.focus();

    const handleChange = (char: string, i: number) => {
        if (!/^\d?$/.test(char)) return;
        const next = [...digits];
        next[i] = char;
        const joined = next.join('');
        onChange(joined);
        if (char && i < length - 1) focusNext(i);
    };

    const handleKeyPress = (key: string, i: number) => {
        if (key === 'Backspace' && !digits[i] && i > 0) {
            const next = [...digits];
            next[i - 1] = '';
            onChange(next.join(''));
            focusPrev(i);
        }
    };

    return (
        <View style={styles.row}>
            {digits.map((d, i) => (
                <TextInput
                    key={i}
                    ref={(el) => {
                        refs.current[i] = el;
                    }}
                    style={[
                        styles.box,
                        !!d && styles.boxFilled,
                        hasError && styles.boxError,
                    ]}
                    value={d}
                    onChangeText={(v) => handleChange(v, i)}
                    onKeyPress={({ nativeEvent }) =>
                        handleKeyPress(nativeEvent.key, i)
                    }
                    keyboardType='number-pad'
                    maxLength={1}
                    textAlign='center'
                    accessibilityLabel={`OTP digit ${i + 1}`}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    row: { flexDirection: 'row', gap: 10 },
    box: {
        flex: 1,
        height: 56,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(35,35,35,0.30)',
        fontSize: 20,
        fontFamily: 'Figtree_600SemiBold',
        color: '#232323',
    },
    boxFilled: { borderColor: '#232323' },
    boxError: { borderColor: '#E53935' },
});
