import Svg, { Circle, G, Path, Rect } from 'react-native-svg';

export function PersonalDetailsIcon({
    size = 24,
    color = 'black',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M3.40991 22C3.40991 18.13 7.25991 15 11.9999 15C12.9599 15 13.8899 15.13 14.7599 15.37'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.92 14.43 15.93 15.13 15.21C15.86 14.46 16.88 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z'
                stroke={color}
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M19.4897 17.9805H16.5098'
                stroke={color}
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M18 16.5195V19.5095'
                stroke={color}
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function MinusIcon({
    size = 24,
    color = '#292D32',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M6 12H18'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function ChevronRightIcon({
    size = 24,
    color = '#292D32',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999'
                stroke={color}
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function EditIcon({
    size = 24,
    color = '#292D32',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z'
                fill={color}
            />
            <Path
                d='M8.49984 17.6905C7.88984 17.6905 7.32984 17.4705 6.91984 17.0705C6.42984 16.5805 6.21984 15.8705 6.32984 15.1205L6.75984 12.1105C6.83984 11.5305 7.21984 10.7805 7.62984 10.3705L15.5098 2.49055C17.4998 0.500547 19.5198 0.500547 21.5098 2.49055C22.5998 3.58055 23.0898 4.69055 22.9898 5.80055C22.8998 6.70055 22.4198 7.58055 21.5098 8.48055L13.6298 16.3605C13.2198 16.7705 12.4698 17.1505 11.8898 17.2305L8.87984 17.6605C8.74984 17.6905 8.61984 17.6905 8.49984 17.6905ZM16.5698 3.55055L8.68984 11.4305C8.49984 11.6205 8.27984 12.0605 8.23984 12.3205L7.80984 15.3305C7.76984 15.6205 7.82984 15.8605 7.97984 16.0105C8.12984 16.1605 8.36984 16.2205 8.65984 16.1805L11.6698 15.7505C11.9298 15.7105 12.3798 15.4905 12.5598 15.3005L20.4398 7.42055C21.0898 6.77055 21.4298 6.19055 21.4798 5.65055C21.5398 5.00055 21.1998 4.31055 20.4398 3.54055C18.8398 1.94055 17.7398 2.39055 16.5698 3.55055Z'
                fill={color}
            />
            <Path
                d='M19.8501 9.83027C19.7801 9.83027 19.7101 9.82027 19.6501 9.80027C17.0201 9.06027 14.9301 6.97027 14.1901 4.34027C14.0801 3.94027 14.3101 3.53027 14.7101 3.41027C15.1101 3.30027 15.5201 3.53027 15.6301 3.93027C16.2301 6.06027 17.9201 7.75027 20.0501 8.35027C20.4501 8.46027 20.6801 8.88027 20.5701 9.28027C20.4801 9.62027 20.1801 9.83027 19.8501 9.83027Z'
                fill={color}
            />
        </Svg>
    );
}

export function HelpIcon({
    size = 28,
    color = '#292D32',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 40 40' fill='none'>
            {/* Outer Circle */}
            <Circle cx='20' cy='20' r='19.5' stroke={color} strokeWidth='1.5' />

            {/* Center + Proper scale */}
            <G transform='translate(20,20) scale(1) translate(-10,-10)'>
                {/* NOTE: translate(-10,-10) because inner viewBox is 20 */}

                <Path
                    d='M14.1667 15.3583H10.8333L7.12498 17.8249C6.57498 18.1916 5.83332 17.8 5.83332 17.1333V15.3583C3.33332 15.3583 1.66666 13.6916 1.66666 11.1916V6.19157C1.66666 3.69157 3.33332 2.0249 5.83332 2.0249H14.1667C16.6667 2.0249 18.3333 3.69157 18.3333 6.19157V11.1916C18.3333 13.6916 16.6667 15.3583 14.1667 15.3583Z'
                    stroke={color}
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <Path
                    d='M9.99986 9.4668V9.29183C9.99986 8.72516 10.3499 8.42515 10.6999 8.18348C11.0415 7.95015 11.3832 7.65016 11.3832 7.10016C11.3832 6.33349 10.7665 5.7168 9.99986 5.7168C9.23319 5.7168 8.61655 6.33349 8.61655 7.10016'
                    stroke={color}
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <Path
                    d='M9.99626 11.4582H10.0038'
                    stroke={color}
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </G>
        </Svg>
    );
}

export function BusinessDetailsIcon({
    size = 24,
    color = '#232323',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M8.00007 22H16.0001C20.0201 22 20.7401 20.39 20.9501 18.43L21.7001 10.43C21.9701 7.99 21.2701 6 17.0001 6H7.00007C2.73007 6 2.03007 7.99 2.30007 10.43L3.05007 18.43C3.26007 20.39 3.98007 22 8.00007 22Z'
                stroke={color}
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6'
                stroke={color}
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z'
                stroke={color}
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M21.65 11C19.34 12.68 16.7 13.68 14 14.02'
                stroke={color}
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M2.62012 11.2695C4.87012 12.8095 7.41012 13.7395 10.0001 14.0295'
                stroke={color}
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function BackIcon({
    size = 40,
    color = '#000',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 40 40' fill='none'>
            {/* Outer Circle */}
            <Circle cx='20' cy='20' r='19.5' stroke={color} strokeWidth='1' />

            {/* Arrow (centered using translate instead of scaling distortion) */}
            <Path
                d='M7.975 4.94141L2.91666 9.99974L7.975 15.0581'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                transform='translate(10,10)'
            />
            <Path
                d='M17.0833 10H3.05833'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                transform='translate(10,10)'
            />
        </Svg>
    );
}

export function OtpBackArrowIcon({
    size = 20,
    color = '#292D32',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 20 20' fill='none'>
            <Path
                d='M7.97484 4.94141L2.9165 9.99974L7.97484 15.0581'
                stroke={color}
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M17.0831 10H3.05811'
                stroke={color}
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}
export function MessageIcon({
    size = 24,
    color = '#232323',
    dotColor = '#292D32',
}: {
    size?: number;
    color?: string;
    dotColor?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            {/* Main Chat Bubble */}
            <Path
                d='M17.98 10.79V14.79C17.98 15.05 17.97 15.3 17.94 15.54C17.71 18.24 16.12 19.58 13.19 19.58H12.79C12.54 19.58 12.3 19.7 12.15 19.9L10.95 21.5C10.42 22.21 9.56 22.21 9.03 21.5L7.82999 19.9C7.69999 19.73 7.41 19.58 7.19 19.58H6.79001C3.60001 19.58 2 18.79 2 14.79V10.79C2 7.86001 3.35001 6.27001 6.04001 6.04001C6.28001 6.01001 6.53001 6 6.79001 6H13.19C16.38 6 17.98 7.60001 17.98 10.79Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />

            {/* Back Layer Bubble */}
            <Path
                d='M21.98 6.79001V10.79C21.98 13.73 20.63 15.31 17.94 15.54C17.97 15.3 17.98 15.05 17.98 14.79V10.79C17.98 7.60001 16.38 6 13.19 6H6.79001C6.53001 6 6.28001 6.01001 6.04001 6.04001C6.27001 3.35001 7.86001 2 10.79 2H17.19C20.38 2 21.98 3.60001 21.98 6.79001Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />

            {/* Dots */}
            <Path
                d='M13.4955 13.25H13.5045'
                stroke={dotColor}
                strokeWidth='2'
                strokeLinecap='round'
            />
            <Path
                d='M9.9955 13.25H10.0045'
                stroke={dotColor}
                strokeWidth='2'
                strokeLinecap='round'
            />
            <Path
                d='M6.4955 13.25H6.5045'
                stroke={dotColor}
                strokeWidth='2'
                strokeLinecap='round'
            />
        </Svg>
    );
}

export function CameraIcon({
    size = 24,
    color = '#232323',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M6.76005 22H17.24C20 22 21.1 20.31 21.23 18.25L21.75 9.99C21.89 7.83 20.17 6 18 6C17.39 6 16.83 5.65 16.55 5.11L15.83 3.66C15.37 2.75 14.17 2 13.15 2H10.86C9.83005 2 8.63005 2.75 8.17005 3.66L7.45005 5.11C7.17005 5.65 6.61005 6 6.00005 6C3.83005 6 2.11005 7.83 2.25005 9.99L2.77005 18.25C2.89005 20.31 4.00005 22 6.76005 22Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M10.5 8H13.5'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
            />
            <Path
                d='M12 18C13.79 18 15.25 16.54 15.25 14.75C15.25 12.96 13.79 11.5 12 11.5C10.21 11.5 8.75 12.96 8.75 14.75C8.75 16.54 10.21 18 12 18Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function CalendarIcon({
    size = 24,
    color = '#232323',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M8 2V5'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
            />
            <Path
                d='M16 2V5'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
            />

            <Path
                d='M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z'
                stroke={color}
                strokeWidth='1.5'
            />

            <Path
                d='M22 22L21 21'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
            />

            <Path
                d='M3.5 9.08984H20.5'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
            />

            <Path
                d='M13.37 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V13'
                stroke={color}
                strokeWidth='1.5'
            />

            {/* Dots */}
            <Path
                d='M11.9955 13.6992H12.0045'
                stroke={color}
                strokeWidth='2'
                strokeLinecap='round'
            />
            <Path
                d='M8.29431 13.6992H8.30329'
                stroke={color}
                strokeWidth='2'
                strokeLinecap='round'
            />
            <Path
                d='M8.29431 16.6992H8.30329'
                stroke={color}
                strokeWidth='2'
                strokeLinecap='round'
            />
        </Svg>
    );
}

export function TrashIcon({
    size = 24,
    color = '#292D32',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M21 5.98047C17.67 5.65047 14.32 5.48047 10.98 5.48047C9 5.48047 7.02 5.58047 5.04 5.78047L3 5.98047'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
            />
            <Path
                d='M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
            />
            <Path
                d='M18.8504 9.14062L18.2004 19.2106C18.0904 20.7806 18.0004 22.0006 15.2104 22.0006H8.79039C6.00039 22.0006 5.91039 20.7806 5.80039 19.2106L5.15039 9.14062'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
            />
            <Path
                d='M10.33 16.5H13.66'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
            />
            <Path
                d='M9.5 12.5H14.5'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
            />
        </Svg>
    );
}

export function PlusIcon({
    size = 16,
    color = '#232323',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 16 16' fill='none'>
            <Path
                d='M4 8H12'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
            />
            <Path
                d='M8 12V4'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
            />
        </Svg>
    );
}

export function ArrowDownIcon({
    size = 24,
    color = '#292D32',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M19.9201 8.94922L13.4001 15.4692C12.6301 16.2392 11.3701 16.2392 10.6001 15.4692L4.08008 8.94922'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function CloseIcon({
    size = 20,
    color = '#292D32',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 20 20' fill='none'>
            <Path
                d='M4.16748 4.1665L15.8334 15.8324'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M4.16676 15.8324L15.8326 4.1665'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function PlusCircleIcon({
    size = 16,
    color = '#292D32',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 16 16' fill='none'>
            {/* Circle */}
            <Path
                d='M8.00004 14.6668C11.6667 14.6668 14.6667 11.6668 14.6667 8.00016C14.6667 4.3335 11.6667 1.3335 8.00004 1.3335C4.33337 1.3335 1.33337 4.3335 1.33337 8.00016C1.33337 11.6668 4.33337 14.6668 8.00004 14.6668Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />

            {/* Plus */}
            <Path
                d='M5.33337 8H10.6667'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
            />
            <Path
                d='M8 10.6668V5.3335'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
            />
        </Svg>
    );
}

export function TickSquareIcon({
    size = 20,
    color = '#292D32',
    checked = false,
}: {
    size?: number;
    color?: string;
    checked?: boolean;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 20 20' fill='none'>
            {/* Square */}
            <Path
                d='M7.49996 18.3332H12.5C16.6666 18.3332 18.3333 16.6665 18.3333 12.4998V7.49984C18.3333 3.33317 16.6666 1.6665 12.5 1.6665H7.49996C3.33329 1.6665 1.66663 3.33317 1.66663 7.49984V12.4998C1.66663 16.6665 3.33329 18.3332 7.49996 18.3332Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />

            {/* Tick (only when checked) */}
            {checked && (
                <Path
                    d='M6.45837 9.99993L8.81671 12.3583L13.5417 7.6416'
                    stroke={color}
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            )}
        </Svg>
    );
}

export function BankIcon({
    size = 24,
    color = '#232323',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M12.37 2.14984L21.37 5.74982C21.72 5.88982 22 6.30981 22 6.67981V9.99982C22 10.5498 21.55 10.9998 21 10.9998H3C2.45 10.9998 2 10.5498 2 9.99982V6.67981C2 6.30981 2.28 5.88982 2.63 5.74982L11.63 2.14984C11.83 2.06984 12.17 2.06984 12.37 2.14984Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M22 22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19V22Z'
                stroke={color}
                strokeWidth='1.5'
            />
            <Path d='M4 18V11' stroke={color} strokeWidth='1.5' />
            <Path d='M8 18V11' stroke={color} strokeWidth='1.5' />
            <Path d='M12 18V11' stroke={color} strokeWidth='1.5' />
            <Path d='M16 18V11' stroke={color} strokeWidth='1.5' />
            <Path d='M20 18V11' stroke={color} strokeWidth='1.5' />
            <Path d='M1 22H23' stroke={color} strokeWidth='1.5' />
            <Path
                d='M12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z'
                stroke={color}
                strokeWidth='1.5'
            />
        </Svg>
    );
}

export function AccountIcon({
    size = 24,
    color = '#232323',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M18.1399 21.6207C17.2599 21.8807 16.2199 22.0007 14.9999 22.0007H8.99986C7.77986 22.0007 6.73986 21.8807 5.85986 21.6207C6.07986 19.0207 8.74986 16.9707 11.9999 16.9707C15.2499 16.9707 17.9199 19.0207 18.1399 21.6207Z'
                stroke={color}
                strokeWidth='1.5'
            />
            <Path
                d='M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2Z'
                stroke={color}
                strokeWidth='1.5'
            />
            <Path
                d='M15.58 10.58C15.58 12.56 13.98 14.17 12 14.17C10.02 14.17 8.42004 12.56 8.42004 10.58C8.42004 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58Z'
                stroke={color}
                strokeWidth='1.5'
            />
        </Svg>
    );
}

export function UpiIcon({
    width = 26,
    height = 18,
    color = '#232323',
}: {
    width?: number;
    height?: number;
    color?: string;
}) {
    return (
        <Svg width={width} height={height} viewBox='0 0 26 18' fill='none'>
            <Rect
                x='0.75'
                y='0.75'
                width='24'
                height='16'
                rx='4'
                stroke={color}
                strokeWidth='1.5'
            />
            {/* U */}
            <Path
                d='M6.5 5.5V10.5C6.5 12.5 9.5 12.5 9.5 10.5V5.5'
                stroke={color}
                strokeWidth='1.3'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            {/* P */}
            <Path
                d='M12 12.5V5.5H14.5C16.2 5.5 16.2 9 14.5 9H12'
                stroke={color}
                strokeWidth='1.3'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            {/* I */}
            <Path
                d='M18.9 5.5V12.5'
                stroke={color}
                strokeWidth='1.3'
                strokeLinecap='round'
            />
        </Svg>
    );
}

export function InstagramIcon({
    size = 24,
    color = '#232323',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Rect
                x='2'
                y='2'
                width='20'
                height='20'
                rx='6'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M17.5 6.51L17.51 6.49889'
                stroke={color}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function FacebookIcon({
    size = 24,
    color = '#232323',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function TwitterXIcon({
    size = 24,
    color = '#232323',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M4 4L10.5 12.5L4 20H6L11.5 13.8L17 20H21L14.2 11.2L20.5 4H18.5L13.2 9.9L8 4H4Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
            />
        </Svg>
    );
}

export function YoutubeIcon({
    size = 24,
    color = '#232323',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988787 13.537 1.14277 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17814 18.2945C2.51798 18.6308 2.93882 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8573 8.1787 22.54 6.42Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function WebsiteIcon({
    size = 24,
    color = '#232323',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Circle cx='12' cy='12' r='10' stroke={color} strokeWidth='1.5' />
            <Path
                d='M2 12H22'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
            />
            <Path
                d='M12 2C12 2 8 6.5 8 12C8 17.5 12 22 12 22'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M12 2C12 2 16 6.5 16 12C16 17.5 12 22 12 22'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function SocialMediaIcon({
    size = 24,
    color = '#232323',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            {/* Outer bubble */}
            <Path
                d='M18 18.8597H17.24C16.44 18.8597 15.68 19.1697 15.12 19.7297L13.41 21.4197C12.63 22.1897 11.36 22.1897 10.58 21.4197L8.87 19.7297C8.31 19.1697 7.54 18.8597 6.75 18.8597H6C4.34 18.8597 3 17.5298 3 15.8898V4.97974C3 3.33974 4.34 2.00977 6 2.00977H18C19.66 2.00977 21 3.33974 21 4.97974V15.8898C21 17.5198 19.66 18.8597 18 18.8597Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />

            {/* Heart */}
            <Path
                d='M12.28 14.96C12.13 15.01 11.88 15.01 11.72 14.96C10.42 14.51 7.5 12.66 7.5 9.51001C7.5 8.12001 8.62 7 10 7C10.82 7 11.54 7.39 12 8C12.46 7.39 13.18 7 14 7C15.38 7 16.5 8.12001 16.5 9.51001C16.49 12.66 13.58 14.51 12.28 14.96Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function LoginIcon({
    size = 24,
    color = '#292D32',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M15.24 22.2705H15.11C10.67 22.2705 8.53002 20.5205 8.16002 16.6005C8.12002 16.1905 8.42002 15.8205 8.84002 15.7805C9.25002 15.7405 9.62002 16.0505 9.66002 16.4605C9.95002 19.6005 11.43 20.7705 15.12 20.7705H15.25C19.32 20.7705 20.76 19.3305 20.76 15.2605V8.74047C20.76 4.67047 19.32 3.23047 15.25 3.23047H15.12C11.41 3.23047 9.93002 4.42047 9.66002 7.62047C9.61002 8.03047 9.27002 8.34047 8.84002 8.30047C8.42002 8.27047 8.12001 7.90047 8.15001 7.49047C8.49001 3.51047 10.64 1.73047 15.11 1.73047H15.24C20.15 1.73047 22.25 3.83047 22.25 8.74047V15.2605C22.25 20.1705 20.15 22.2705 15.24 22.2705Z'
                fill={color}
            />
            <Path
                d='M14.88 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H14.88C15.29 11.25 15.63 11.59 15.63 12C15.63 12.41 15.3 12.75 14.88 12.75Z'
                fill={color}
            />
            <Path
                d='M12.6498 16.1C12.4598 16.1 12.2698 16.03 12.1198 15.88C11.8298 15.59 11.8298 15.11 12.1198 14.82L14.9398 12L12.1198 9.18C11.8298 8.89 11.8298 8.41 12.1198 8.12C12.4098 7.83 12.8898 7.83 13.1798 8.12L16.5298 11.47C16.8198 11.76 16.8198 12.24 16.5298 12.53L13.1798 15.88C13.0298 16.03 12.8398 16.1 12.6498 16.1Z'
                fill={color}
            />
        </Svg>
    );
}

export function PortfolioIcon({
    size = 24,
    color = '#292D32',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M12.5002 14.75H10.0002C9.59024 14.75 9.25024 14.41 9.25024 14C9.25024 13.59 9.59024 13.25 10.0002 13.25H12.5002C15.1202 13.25 17.2502 11.12 17.2502 8.5C17.2502 5.88 15.1202 3.75 12.5002 3.75H7.50024C4.88024 3.75 2.75024 5.88 2.75024 8.5C2.75024 9.6 3.14023 10.67 3.84023 11.52C4.10023 11.84 4.06023 12.31 3.74023 12.58C3.42023 12.84 2.95024 12.8 2.68024 12.48C1.75024 11.36 1.24023 9.95 1.24023 8.5C1.24023 5.05 4.04023 2.25 7.49023 2.25H12.4902C15.9402 2.25 18.7402 5.05 18.7402 8.5C18.7402 11.95 15.9502 14.75 12.5002 14.75Z'
                fill={color}
            />
            <Path
                d='M16.5 21.75H11.5C8.05 21.75 5.25 18.95 5.25 15.5C5.25 12.05 8.05 9.25 11.5 9.25H14C14.41 9.25 14.75 9.59 14.75 10C14.75 10.41 14.41 10.75 14 10.75H11.5C8.88 10.75 6.75 12.88 6.75 15.5C6.75 18.12 8.88 20.25 11.5 20.25H16.5C19.12 20.25 21.25 18.12 21.25 15.5C21.25 14.4 20.86 13.33 20.16 12.48C19.9 12.16 19.94 11.69 20.26 11.42C20.58 11.15 21.05 11.2 21.32 11.52C22.25 12.64 22.76 14.05 22.76 15.5C22.75 18.95 19.95 21.75 16.5 21.75Z'
                fill={color}
            />
        </Svg>
    );
}

export function SettingsIcon({
    size = 24,
    color = '#292D32',
}: {
    size?: number;
    color?: string;
}) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M12.0002 22.63C11.3302 22.63 10.6502 22.48 10.1202 22.17L4.62023 19C2.38023 17.49 2.24023 17.26 2.24023 14.89V9.10999C2.24023 6.73999 2.37023 6.50999 4.57023 5.01999L10.1102 1.81999C11.1602 1.20999 12.8102 1.20999 13.8602 1.81999L19.3802 4.99999C21.6202 6.50999 21.7602 6.73999 21.7602 9.10999V14.88C21.7602 17.25 21.6302 17.48 19.4302 18.97L13.8902 22.17C13.3502 22.48 12.6702 22.63 12.0002 22.63Z'
                stroke={color}
                strokeWidth={1.5}
                fill='none'
            />
            <Path
                d='M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75Z'
                stroke={color}
                strokeWidth={1.5}
                fill='none'
            />
        </Svg>
    );
}

export function PortfolioSuccessTickIcon({ size = 120 }: { size?: number }) {
    return (
        <Svg width={size} height={size} viewBox='0 0 120 120' fill='none'>
            <Circle cx='60' cy='60' r='60' fill='#379520' />
            <Path
                d='M60.0002 88.6666C44.1868 88.6666 31.3335 75.8132 31.3335 59.9999C31.3335 44.1866 44.1868 31.3333 60.0002 31.3333C75.8135 31.3333 88.6668 44.1866 88.6668 59.9999C88.6668 75.8132 75.8135 88.6666 60.0002 88.6666ZM60.0002 35.3333C46.4002 35.3333 35.3335 46.3999 35.3335 59.9999C35.3335 73.5999 46.4002 84.6666 60.0002 84.6666C73.6002 84.6666 84.6668 73.5999 84.6668 59.9999C84.6668 46.3999 73.6002 35.3333 60.0002 35.3333Z'
                fill='white'
            />
            <Path
                d='M56.2143 69.5457C55.681 69.5457 55.1743 69.3324 54.801 68.959L47.2543 61.4124C46.481 60.639 46.481 59.359 47.2543 58.5857C48.0276 57.8124 49.3076 57.8124 50.081 58.5857L56.2143 64.719L69.921 51.0124C70.6943 50.239 71.9743 50.239 72.7477 51.0124C73.521 51.7857 73.521 53.0657 72.7477 53.839L57.6277 68.959C57.2543 69.3324 56.7477 69.5457 56.2143 69.5457Z'
                fill='white'
            />
        </Svg>
    );
}
