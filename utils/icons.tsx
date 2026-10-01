import React from 'react';
import Svg, { Path, Circle, Rect, G, ClipPath, Defs } from 'react-native-svg';
import * as Logo from './logo';
import * as MenuIcons from '@/components/icons/menu-icons';
import * as AuthIcons from '@/components/icons/auth-icons';

interface IconProps {
    color?: string;
    size?: number;
    width?: number;
    height?: number;
    fill?: string;
    checked?: boolean;
    dotColor?: string;
}

export const KlickksLogo = Logo.KlickksLogo;
export const StudioLogo = Logo.StudioLogo;
export const BellIcon = Logo.BellIcon;
export const HomeIcon = Logo.HomeIcon;
export const LeadIcon = Logo.LeadIcon;
export const BookingIcon = Logo.BookingIcon;
export const PaymentsIcon = Logo.PaymentsIcon;
export const MenuIcon = Logo.MenuIcon;
export const RightArrowIcon = Logo.RightArrowIcon;
export const UserIcon = Logo.UserIcon;
export const LocationIcon = Logo.LocationIcon;
export const ArrowDownIcon = Logo.ArrowDownIcon;
export const DeleteIcon = Logo.DeleteIcon;
export const DeliveryIcon = Logo.DeliveryIcon;
export const MoneyIcon = Logo.MoneyIcon;
export const SquareTickIcon = Logo.SquareTickIcon;
export const EmptySquareTickIcon = Logo.EmptySquareTickIcon;
export const DocumentIcon = Logo.DocumentIcon;
export const DocumentDownloadIcon = Logo.DocumentDownloadIcon;
export const PersonIcon = Logo.PersonIcon;
export const BriefCaseIcon = Logo.BriefCaseIcon;
export const SmsIcon = Logo.SmsIcon;
export const CloseCircle = Logo.CloseCircle;
export const OrangeStatusIcon = Logo.OrangeStatusIcon;
export const GreenStatusIcon = Logo.GreenStatusIcon;
export const GreyStatusIcon = Logo.GreyStatusIcon;

export const PersonalDetailsIcon = MenuIcons.PersonalDetailsIcon;
export const ChevronRightIcon = MenuIcons.ChevronRightIcon;
export const HelpIcon = MenuIcons.HelpIcon;
export const BusinessDetailsIcon = MenuIcons.BusinessDetailsIcon;
export const BackIcon = MenuIcons.BackIcon;
export const OtpBackArrowIcon = MenuIcons.OtpBackArrowIcon;
export const CameraIcon = MenuIcons.CameraIcon;
export const CalendarIcon = MenuIcons.CalendarIcon;
export const TrashIcon = MenuIcons.TrashIcon;
export const PlusCircleIcon = MenuIcons.PlusCircleIcon;
export const TickSquareIcon = MenuIcons.TickSquareIcon;
export const BankIcon = MenuIcons.BankIcon;
export const AccountIcon = MenuIcons.AccountIcon;
export const UpiIcon = MenuIcons.UpiIcon;
export const InstagramIcon = MenuIcons.InstagramIcon;
export const FacebookIcon = MenuIcons.FacebookIcon;
export const TwitterXIcon = MenuIcons.TwitterXIcon;
export const YoutubeIcon = MenuIcons.YoutubeIcon;
export const WebsiteIcon = MenuIcons.WebsiteIcon;
export const SocialMediaIcon = MenuIcons.SocialMediaIcon;
export const PortfolioIcon = MenuIcons.PortfolioIcon;
export const SettingsIcon = MenuIcons.SettingsIcon;
export const PortfolioSuccessTickIcon = MenuIcons.PortfolioSuccessTickIcon;

export const ArrowLeftIcon = AuthIcons.ArrowLeftIcon;
export const EmailIcon = AuthIcons.EmailIcon;
export const WhatsappPngIcon = AuthIcons.WhatsappPngIcon;

export const MapPinIcon = LocationIcon;

export function SearchIcon({ size = 20, color = '#232323' }: IconProps) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M22 22L20 20'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function CircularSearchIcon({ size = 40, color = '#232323' }: IconProps) {
    return (
        <Svg width={size} height={size} viewBox='0 0 40 40' fill='none'>
            <Circle cx='20' cy='20' r='19.5' stroke={color} strokeWidth='1.5' />
            <Path
                d='M19.5834 27.5C23.9556 27.5 27.5 23.9556 27.5 19.5833C27.5 15.2111 23.9556 11.6667 19.5834 11.6667C15.2111 11.6667 11.6667 15.2111 11.6667 19.5833C11.6667 23.9556 15.2111 27.5 19.5834 27.5Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M28.3334 28.3333L26.6667 26.6667'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function HeartIcon({ size = 24, color = '#232323', fill = 'none' }: IconProps) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill={fill}>
            <Path
                d='M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill={fill}
            />
        </Svg>
    );
}

export function EditIcon({ size = 24, color = '#292D32' }: IconProps) {
    return <MenuIcons.EditIcon size={size} color={color} />;
}

export function MinusIcon({ size = 24, color = '#292D32' }: IconProps) {
    return <MenuIcons.MinusIcon size={size} color={color} />;
}

export function PlusIcon({ size = 24, color = '#232323' }: IconProps) {
    return <MenuIcons.PlusIcon size={size} color={color} />;
}

export function CloseIcon({ size = 20, color = '#292D32' }: IconProps) {
    return <MenuIcons.CloseIcon size={size} color={color} />;
}

export function XIcon({ size = 20, color = '#292D32' }: IconProps) {
    return <MenuIcons.CloseIcon size={size} color={color} />;
}

export function MessageIcon({
    size = 24,
    color = '#232323',
    dotColor = '#292D32',
}: IconProps) {
    return (
        <MenuIcons.MessageIcon size={size} color={color} dotColor={dotColor} />
    );
}

export function MessageSquareIcon({
    size = 24,
    color = '#232323',
    dotColor = '#292D32',
}: IconProps) {
    return (
        <MenuIcons.MessageIcon size={size} color={color} dotColor={dotColor} />
    );
}

export function LogoutIcon({ size = 24, color = '#292D32' }: IconProps) {
    return <MenuIcons.LoginIcon size={size} color={color} />;
}

export function StarIcon({ size = 16, color = '#F59E0B', fill = '#F59E0B' }: IconProps) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill={fill}>
            <Path
                d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill={fill}
            />
        </Svg>
    );
}

export function CheckIcon({ size = 20, color = '#232323' }: IconProps) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M5 12L10 17L19 7'
                stroke={color}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function CheckCircleIcon({ size = 24, color = '#22C55E' }: IconProps) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Circle cx='12' cy='12' r='10' stroke={color} strokeWidth='1.5' />
            <Path
                d='M8.5 12.5L10.5 14.5L15.5 9.5'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function ClockIcon({ size = 24, color = '#232323' }: IconProps) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Circle cx='12' cy='12' r='10' stroke={color} strokeWidth='1.5' />
            <Path
                d='M12 7V12L15 15'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function SendIcon({ size = 24, color = '#232323' }: IconProps) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M22 2L11 13'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M22 2L15 22L11 13L2 9L22 2Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function PhoneIcon({ size = 24, color = '#232323' }: IconProps) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20 21.37 19.37 21.62C18.74 21.87 18.06 22 17.32 22C16.24 22 15.08 21.74 13.84 21.22C12.6 20.7 11.36 20 10.12 19.12C8.88 18.23 7.74 17.22 6.7 16.09C5.66 14.95 4.75 13.73 3.96 12.43C3.17 11.13 2.58 9.83 2.19 8.52C1.8 7.21 1.6 5.99 1.6 4.86C1.6 4.08 1.72 3.36 1.96 2.71C2.2 2.06 2.57 1.48 3.09 0.97C3.69 0.37 4.38 0.07 5.16 0.07C5.46 0.07 5.76 0.13 6.04 0.26C6.32 0.39 6.57 0.58 6.77 0.84L9.4 4.54C9.6 4.82 9.74 5.08 9.83 5.33C9.92 5.58 9.96 5.82 9.96 6.05C9.96 6.33 9.87 6.6 9.69 6.87C9.51 7.14 9.27 7.42 8.97 7.72L8.01 8.71C7.88 8.84 7.81 8.99 7.81 9.17C7.81 9.25 7.83 9.34 7.86 9.44C7.89 9.54 7.93 9.62 7.97 9.71C8.32 10.34 8.78 11.01 9.36 11.71C9.94 12.41 10.58 13.09 11.29 13.75C11.96 14.38 12.63 14.9 13.3 15.31C13.39 15.36 13.48 15.4 13.57 15.43C13.67 15.46 13.76 15.48 13.85 15.48C14.04 15.48 14.2 15.4 14.33 15.26L15.28 14.32C15.6 14 15.89 13.76 16.16 13.59C16.43 13.42 16.7 13.33 16.98 13.33C17.21 13.33 17.44 13.37 17.69 13.46C17.94 13.55 18.2 13.69 18.48 13.89L22.25 16.57C22.5 16.75 22.68 16.98 22.8 17.26C22.92 17.54 22.97 17.83 21.97 18.33Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function ShieldCheckIcon({ size = 24, color = '#232323' }: IconProps) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M9 12L11 14L15 10'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}

export function InfoIcon({ size = 24, color = '#232323' }: IconProps) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Circle cx='12' cy='12' r='10' stroke={color} strokeWidth='1.5' />
            <Path d='M12 16V12' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
            <Path d='M12 8H12.01' stroke={color} strokeWidth='2' strokeLinecap='round' />
        </Svg>
    );
}

export function AlertTriangleIcon({ size = 24, color = '#E53935' }: IconProps) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M10.29 3.86L1.82 18C1.64 18.3 1.55 18.65 1.55 19C1.55 20.1 2.45 21 3.55 21H20.45C20.8 21 21.15 20.91 21.45 20.73C22.4 20.15 22.7 18.9 22.18 17.95L13.71 3.86C13.53 3.55 13.26 3.3 12.93 3.16C11.9 2.7 10.73 3.09 10.29 3.86Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path d='M12 9V13' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
            <Path d='M12 17H12.01' stroke={color} strokeWidth='2' strokeLinecap='round' />
        </Svg>
    );
}

export function SlidersIcon({ size = 24, color = '#232323' }: IconProps) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path d='M4 21V14' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
            <Path d='M4 10V3' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
            <Path d='M12 21V12' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
            <Path d='M12 8V3' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
            <Path d='M20 21V16' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
            <Path d='M20 12V3' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
            <Path d='M1 14H7' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
            <Path d='M9 8H15' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
            <Path d='M17 16H23' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
        </Svg>
    );
}

export function SparklesIcon({ size = 24, color = '#232323' }: IconProps) {
    return (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
            <Path
                d='M12 3L14.5 8.5L20 11L14.5 13.5L12 19L9.5 13.5L4 11L9.5 8.5L12 3Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
}
