import { Image } from 'expo-image';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
    color?: string;
    size?: number;
}

export function ArrowLeftIcon({ color = '#232323', size = 24 }: IconProps) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M9.56994 18.8191C9.37994 18.8191 9.18994 18.7491 9.03994 18.5991L2.96994 12.5291C2.67994 12.2391 2.67994 11.7591 2.96994 11.4691L9.03994 5.39914C9.32994 5.10914 9.80994 5.10914 10.0999 5.39914C10.3899 5.68914 10.3899 6.16914 10.0999 6.45914L4.55994 11.9991L10.0999 17.5391C10.3899 17.8291 10.3899 18.3091 10.0999 18.5991C9.95994 18.7491 9.75994 18.8191 9.56994 18.8191Z'
                fill={color}
            />
            <Path
                d='M20.5 12.75H3.66998C3.25998 12.75 2.91998 12.41 2.91998 12C2.91998 11.59 3.25998 11.25 3.66998 11.25H20.5C20.91 11.25 21.25 11.59 21.25 12C21.25 12.41 20.91 12.75 20.5 12.75Z'
                fill={color}
            />
        </Svg>
    );
}

export function EmailIcon({ color = '#232323', size = 24 }: IconProps) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z'
                stroke={color}
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9'
                stroke={color}
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function WhatsappPngIcon({ size = 20 }: { size?: number }) {
    return (
        <Image
            source={require('@/assets/images/icons/whatsapp-white.png')}
            style={{ width: size, height: size }}
            contentFit='contain'
        />
    );
}
