import { Circle, ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';

type IconProps = {
    color?: string;
    size?: number;
};
export const KlickksLogo = ({ color = '#232323' }: IconProps) => (
    <Svg width='68' height='13' viewBox='0 0 68 13' fill='none'>
        <Path
            d='M67.4664 9.77329C67.4664 10.3752 67.2974 10.8979 66.9595 11.3414C66.6216 11.785 66.1094 12.1282 65.423 12.371C64.7366 12.6034 63.876 12.7195 62.8411 12.7195C61.7746 12.7195 60.8506 12.5875 60.0691 12.3235C59.2877 12.049 58.6805 11.6688 58.2475 11.183C57.8251 10.6867 57.5981 10.1165 57.5664 9.47233H59.6573C59.7206 9.81025 59.8896 10.1112 60.1642 10.3752C60.4493 10.6286 60.8189 10.824 61.273 10.9613C61.7376 11.0986 62.2656 11.1672 62.857 11.1672C63.7123 11.1672 64.3565 11.0669 64.7894 10.8662C65.2224 10.655 65.4389 10.3382 65.4389 9.91585C65.4389 9.63073 65.291 9.41425 64.9954 9.26641C64.7102 9.11857 64.1664 9.00769 63.3638 8.93377L61.6056 8.77537C60.6552 8.69089 59.9054 8.52193 59.3563 8.26849C58.8072 8.00449 58.4165 7.68769 58.1842 7.31809C57.9518 6.93793 57.8357 6.53665 57.8357 6.11425C57.8357 5.50177 58.0258 4.98961 58.4059 4.57777C58.7861 4.16593 59.3141 3.85441 59.9899 3.64321C60.6658 3.42145 61.4525 3.31057 62.3501 3.31057C63.2794 3.31057 64.1083 3.44257 64.837 3.70657C65.5656 3.96001 66.1464 4.31905 66.5794 4.78369C67.0123 5.23777 67.2552 5.76577 67.308 6.36769H65.2171C65.1749 6.12481 65.0482 5.89249 64.837 5.67073C64.6363 5.43841 64.3248 5.24833 63.9024 5.10049C63.4906 4.94209 62.9362 4.86289 62.2392 4.86289C61.5 4.86289 60.9192 4.95793 60.4968 5.14801C60.085 5.33809 59.879 5.61793 59.879 5.98753C59.879 6.21985 60.0058 6.42049 60.2592 6.58945C60.5126 6.74785 60.9826 6.85873 61.669 6.92209L63.9341 7.12801C64.8422 7.21249 65.5498 7.37617 66.0566 7.61905C66.5741 7.85137 66.9384 8.15233 67.1496 8.52193C67.3608 8.89153 67.4664 9.30865 67.4664 9.77329Z'
            fill={color}
        />
        <Path
            d='M48.9521 10.7078L48.3501 10.4861L54.0525 3.53232H56.4286L48.8095 12.4978H46.8929V0.300957H48.9521V10.7078ZM51.5023 8.06256L52.9437 6.76368L56.6978 12.4978H54.2743L51.5023 8.06256Z'
            fill={color}
        />
        <Path
            d='M37.4749 10.7078L36.873 10.4861L42.5754 3.53232H44.9514L37.3324 12.4978H35.4157V0.300957H37.4749V10.7078ZM40.0252 8.06256L41.4666 6.76368L45.2207 12.4978H42.7972L40.0252 8.06256Z'
            fill={color}
        />
        <Path
            d='M33.2194 8.96545C33.1138 9.70465 32.8235 10.3594 32.3483 10.9296C31.873 11.4893 31.2658 11.9275 30.5266 12.2443C29.7874 12.5611 28.9638 12.7195 28.0556 12.7195C27.0207 12.7195 26.1073 12.5242 25.3153 12.1334C24.5338 11.7322 23.9214 11.1778 23.4778 10.4702C23.0343 9.76273 22.8126 8.94433 22.8126 8.01505C22.8126 7.08577 23.0343 6.26737 23.4778 5.55985C23.9214 4.85233 24.5338 4.30321 25.3153 3.91249C26.1073 3.51121 27.0207 3.31057 28.0556 3.31057C28.9638 3.31057 29.7874 3.46897 30.5266 3.78577C31.2658 4.10257 31.873 4.54609 32.3483 5.11633C32.8235 5.67601 33.1138 6.33073 33.2194 7.08049H31.1444C30.9966 6.40465 30.6428 5.87665 30.0831 5.49649C29.5234 5.11633 28.8476 4.92625 28.0556 4.92625C27.422 4.92625 26.8676 5.05297 26.3924 5.30641C25.9172 5.54929 25.5476 5.90305 25.2836 6.36769C25.0302 6.82177 24.9034 7.37089 24.9034 8.01505C24.9034 8.64865 25.0302 9.19777 25.2836 9.66241C25.5476 10.127 25.9172 10.4861 26.3924 10.7395C26.8676 10.9824 27.422 11.1038 28.0556 11.1038C28.8582 11.1038 29.5393 10.9085 30.099 10.5178C30.6586 10.127 31.0071 9.60961 31.1444 8.96545H33.2194Z'
            fill={color}
        />
        <Path
            d='M18.4474 3.46896L19.477 3.65904L20.5066 3.46896V12.4978H18.4474V3.46896ZM19.477 2.34432C19.0863 2.34432 18.7642 2.23872 18.5108 2.02752C18.2573 1.80576 18.1306 1.52064 18.1306 1.17216C18.1306 0.82368 18.2573 0.54384 18.5108 0.33264C18.7642 0.11088 19.0863 0 19.477 0C19.8783 0 20.2004 0.11088 20.4433 0.33264C20.6967 0.54384 20.8234 0.82368 20.8234 1.17216C20.8234 1.52064 20.6967 1.80576 20.4433 2.02752C20.2004 2.23872 19.8783 2.34432 19.477 2.34432Z'
            fill={color}
        />
        <Path
            d='M13.5751 0.300957H15.6343V12.4978H13.5751V0.300957Z'
            fill={color}
        />
        <Path
            d='M0 12.4978V0.617764H2.09088V10.7395L1.45728 10.3435L9.40896 0.617764H11.6741L1.86912 12.4978H0ZM5.65488 6.52608L7.128 5.08464L11.8483 12.4978H9.45648L5.65488 6.52608Z'
            fill={color}
        />
    </Svg>
);
export const StudioLogo = ({ color = '#232323' }: IconProps) => (
    <Svg width='67' height='7' viewBox='0 0 67 7' fill='none'>
        <Path
            d='M0 4.41131H1.13676C1.17069 4.66581 1.27532 4.8892 1.45064 5.08149C1.63161 5.27378 1.86914 5.42365 2.16323 5.53111C2.45731 5.6329 2.79664 5.6838 3.18122 5.6838C3.75242 5.6838 4.20486 5.59614 4.53854 5.42082C4.87221 5.23985 5.03905 4.99666 5.03905 4.69126C5.03905 4.44242 4.94291 4.25578 4.75062 4.13136C4.55833 4.00694 4.21052 3.91362 3.70718 3.85141L2.33289 3.67326C1.56375 3.57147 1.00385 3.382 0.65321 3.10488C0.308225 2.82211 0.135732 2.42339 0.135732 1.90874C0.135732 1.51851 0.25167 1.18201 0.483545 0.899229C0.721076 0.610797 1.05475 0.390231 1.48457 0.237532C1.91439 0.0791774 2.41773 0 2.99459 0C3.56579 0 4.07196 0.0848331 4.51309 0.254499C4.95422 0.424165 5.30486 0.661697 5.56501 0.967095C5.83082 1.26684 5.97503 1.62031 5.99766 2.02751H4.8609C4.83262 1.80129 4.73648 1.60617 4.57247 1.44216C4.41412 1.27815 4.19921 1.1509 3.92774 1.06041C3.65628 0.964267 3.33674 0.916196 2.96914 0.916196C2.44883 0.916196 2.03315 1.00103 1.7221 1.17069C1.41105 1.34036 1.25552 1.57224 1.25552 1.86632C1.25552 2.09254 1.34601 2.26787 1.52698 2.39229C1.71362 2.51105 2.03598 2.60154 2.49407 2.66375L3.88533 2.85887C4.45653 2.93805 4.90614 3.0455 5.23416 3.18123C5.56784 3.31131 5.80537 3.48946 5.94676 3.71568C6.08814 3.93625 6.15884 4.22185 6.15884 4.57249C6.15884 4.97969 6.03442 5.33599 5.78557 5.64139C5.53673 5.94679 5.18609 6.18432 4.73365 6.35398C4.28687 6.51799 3.76373 6.6 3.16425 6.6C2.55346 6.6 2.01336 6.50951 1.54395 6.32853C1.0802 6.1419 0.712593 5.88458 0.441129 5.55655C0.169665 5.22853 0.022622 4.84679 0 4.41131Z'
            fill={color}
        />
        <Path
            d='M15.3886 0.636248H16.5084V6.48123H15.3886V0.636248ZM12.7588 0.118767H19.1382V1.10283H12.7588V0.118767Z'
            fill={color}
        />
        <Path
            d='M26.858 3.69023C26.858 4.06915 26.9344 4.39717 27.0871 4.67429C27.2398 4.95141 27.4575 5.16632 27.7403 5.31902C28.0287 5.46606 28.3709 5.53959 28.7668 5.53959C29.1683 5.53959 29.5105 5.46606 29.7932 5.31902C30.076 5.16632 30.2937 4.95141 30.4464 4.67429C30.5991 4.39717 30.6755 4.06915 30.6755 3.69023V0.0593796H31.7953V3.73264C31.7953 4.29254 31.668 4.78457 31.4135 5.20874C31.159 5.62725 30.8056 5.95527 30.3531 6.1928C29.9007 6.42468 29.3719 6.54061 28.7668 6.54061C28.1673 6.54061 27.6385 6.42468 27.1804 6.1928C26.728 5.95527 26.3745 5.62725 26.12 5.20874C25.8655 4.78457 25.7382 4.29254 25.7382 3.73264V0.0593796H26.858V3.69023Z'
            fill={color}
        />
        <Path
            d='M41.2711 0.118767C41.995 0.118767 42.6284 0.251672 43.1713 0.517482C43.7199 0.783291 44.1469 1.15656 44.4523 1.63728C44.7577 2.11234 44.9104 2.66658 44.9104 3.3C44.9104 3.93342 44.7577 4.49049 44.4523 4.97121C44.1469 5.44627 43.7199 5.81671 43.1713 6.08252C42.6284 6.34833 41.995 6.48123 41.2711 6.48123H38.3953V0.118767H41.2711ZM39.5151 6.091L38.8958 5.49717H41.3474C41.8338 5.49717 42.258 5.40668 42.6199 5.22571C42.9875 5.03908 43.2703 4.78175 43.4683 4.45373C43.6719 4.12005 43.7737 3.73548 43.7737 3.3C43.7737 2.85887 43.6719 2.47429 43.4683 2.14627C43.2703 1.81825 42.9875 1.56375 42.6199 1.38278C42.258 1.19614 41.8338 1.10283 41.3474 1.10283H38.8958L39.5151 0.508998V6.091Z'
            fill={color}
        />
        <Path
            d='M51.5104 0.118767H52.6302V6.48123H51.5104V0.118767Z'
            fill={color}
        />
        <Path
            d='M62.878 6.6C62.1541 6.6 61.5179 6.46144 60.9693 6.18432C60.4207 5.9072 59.9937 5.52262 59.6883 5.03059C59.3829 4.5329 59.2302 3.95604 59.2302 3.3C59.2302 2.64396 59.3829 2.06992 59.6883 1.57789C59.9937 1.08021 60.4207 0.692802 60.9693 0.415681C61.5179 0.13856 62.1541 0 62.878 0C63.6019 0 64.2382 0.13856 64.7867 0.415681C65.3353 0.692802 65.7623 1.08021 66.0677 1.57789C66.3731 2.06992 66.5258 2.64396 66.5258 3.3C66.5258 3.95604 66.3731 4.5329 66.0677 5.03059C65.7623 5.52262 65.3353 5.9072 64.7867 6.18432C64.2382 6.46144 63.6019 6.6 62.878 6.6ZM62.878 5.59897C63.3927 5.59897 63.8366 5.50566 64.2099 5.31902C64.5831 5.13239 64.8716 4.86658 65.0752 4.52159C65.2844 4.17661 65.389 3.76941 65.389 3.3C65.389 2.83059 65.2844 2.42339 65.0752 2.07841C64.8716 1.73342 64.5831 1.46761 64.2099 1.28098C63.8366 1.09434 63.3927 1.00103 62.878 1.00103C62.369 1.00103 61.9251 1.09434 61.5461 1.28098C61.1729 1.46761 60.8816 1.73342 60.6724 2.07841C60.4688 2.42339 60.367 2.83059 60.367 3.3C60.367 3.76941 60.4688 4.17661 60.6724 4.52159C60.8816 4.86658 61.1729 5.13239 61.5461 5.31902C61.9251 5.50566 62.369 5.59897 62.878 5.59897Z'
            fill={color}
        />
    </Svg>
);
export const BellIcon = ({ color = '#292D32' }: IconProps) => (
    <Svg width='40' height='40' viewBox='0 0 40 40' fill='none'>
        <Circle cx='20' cy='20' r='19.5' stroke={color} />
        <Path
            d='M20.0167 12.425C17.2583 12.425 15.0167 14.6667 15.0167 17.425V19.8333C15.0167 20.3417 14.8 21.1167 14.5417 21.55L13.5833 23.1417C12.9917 24.125 13.4 25.2167 14.4833 25.5833C18.075 26.7833 21.95 26.7833 25.5417 25.5833C26.55 25.25 26.9917 24.0583 26.4417 23.1417L25.4833 21.55C25.2333 21.1167 25.0167 20.3417 25.0167 19.8333V17.425C25.0167 14.675 22.7667 12.425 20.0167 12.425Z'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
        />
        <Path
            d='M21.5583 12.667C21.2999 12.592 21.0333 12.5337 20.7583 12.5004C19.9583 12.4004 19.1916 12.4587 18.4749 12.667C18.7166 12.0504 19.3166 11.617 20.0166 11.617C20.7166 11.617 21.3166 12.0504 21.5583 12.667Z'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M22.5167 25.883C22.5167 27.258 21.3917 28.383 20.0167 28.383C19.3334 28.383 18.7 28.0996 18.25 27.6496C17.8 27.1996 17.5167 26.5663 17.5167 25.883'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
        />
    </Svg>
);
export const HomeIcon = ({ color = '#8C8C8C' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M12 18V15'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M10.0703 2.81985L3.14027 8.36985C2.36027 8.98985 1.86027 10.2998 2.03027 11.2798L3.36027 19.2398C3.60027 20.6598 4.96027 21.8098 6.40027 21.8098H17.6003C19.0303 21.8098 20.4003 20.6498 20.6403 19.2398L21.9703 11.2798C22.1303 10.2998 21.6303 8.98985 20.8603 8.36985L13.9303 2.82985C12.8603 1.96985 11.1303 1.96985 10.0703 2.81985Z'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const LeadIcon = ({ color = '#8C8C8C' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M3.41 22C3.41 18.13 7.26 15 12 15C12.96 15 13.89 15.13 14.76 15.37'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M19.49 18H16.51'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M18 16.51V19.49'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const BookingIcon = ({ color = '#8C8C8C' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M8 2V5'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M16 2V5'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M22 22L21 21'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M3.5 9.08997H20.5'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M13.37 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V13'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M11.9955 13.6992H12.0045'
            stroke={color}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M8.29431 13.6992H8.30329'
            stroke={color}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M8.29431 16.6992H8.30329'
            stroke={color}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const PaymentsIcon = ({ color = '#8C8C8C' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M19.3 7.91949V13.0695C19.3 16.1495 17.54 17.4695 14.9 17.4695H6.10995C5.65995 17.4695 5.22996 17.4295 4.82996 17.3395C4.57996 17.2995 4.33996 17.2295 4.11996 17.1495C2.61996 16.5895 1.70996 15.2895 1.70996 13.0695V7.91949C1.70996 4.83949 3.46995 3.51953 6.10995 3.51953H14.9C17.14 3.51953 18.75 4.46953 19.18 6.63953C19.25 7.03953 19.3 7.44949 19.3 7.91949Z'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M22.3011 10.9206V16.0706C22.3011 19.1506 20.5411 20.4706 17.9011 20.4706H9.11105C8.37105 20.4706 7.70106 20.3706 7.12106 20.1506C5.93106 19.7106 5.12105 18.8006 4.83105 17.3406C5.23105 17.4306 5.66105 17.4706 6.11105 17.4706H14.9011C17.5411 17.4706 19.3011 16.1506 19.3011 13.0706V7.92059C19.3011 7.45059 19.2611 7.03062 19.1811 6.64062C21.0811 7.04063 22.3011 8.38059 22.3011 10.9206Z'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M10.4984 13.1394C11.9564 13.1394 13.1384 11.9574 13.1384 10.4994C13.1384 9.04136 11.9564 7.85938 10.4984 7.85938C9.04038 7.85938 7.8584 9.04136 7.8584 10.4994C7.8584 11.9574 9.04038 13.1394 10.4984 13.1394Z'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M4.78027 8.29883V12.6989'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M16.2217 8.30078V12.7008'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const MenuIcon = ({ color = '#8C8C8C' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M3 7H21'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
        />
        <Path
            d='M3 12H21'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
        />
        <Path
            d='M3 17H21'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
        />
    </Svg>
);
type RightArrowIconProps = {
    color?: string;
    width?: number;
    height?: number;
};

export const RightArrowIcon = ({
    color = 'white',
    width = 16,
    height = 16,
}: RightArrowIconProps) => (
    <Svg width={width} height={height} viewBox='0 0 16 16' fill='none'>
        <Path
            d='M9.62012 3.95312L13.6668 7.99979L9.62012 12.0465'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M2.33333 8H13.5533'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const HalfRightArrowIcon = ({ color = '#292D32' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M8.90991 19.9201L15.4299 13.4001C16.1999 12.6301 16.1999 11.3701 15.4299 10.6001L8.90991 4.08008'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const UserIcon = ({ color = '#6C6C6C', size = 12 }: IconProps) => (
    <Svg width={size} height={size} viewBox='0 0 12 12' fill='none'>
        <Path
            d='M6 6C7.38071 6 8.5 4.88071 8.5 3.5C8.5 2.11929 7.38071 1 6 1C4.61929 1 3.5 2.11929 3.5 3.5C3.5 4.88071 4.61929 6 6 6Z'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M10.295 11C10.295 9.065 8.37 7.5 6 7.5C3.63 7.5 1.705 9.065 1.705 11'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const LocationIcon = ({ color = '#6C6C6C' }: IconProps) => (
    <Svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
        <G clip-Path='url(#clip0_17_1720)'>
            <Path
                d='M9.85714 4.28573C9.85714 6.85716 6 9.85716 6 9.85716C6 9.85716 2.14285 6.85716 2.14285 4.28573C2.14285 2.18487 3.89914 0.428589 6 0.428589C8.10085 0.428589 9.85714 2.18487 9.85714 4.28573Z'
                stroke={color}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M6.00001 5.57143C6.71009 5.57143 7.28572 4.9958 7.28572 4.28571C7.28572 3.57563 6.71009 3 6.00001 3C5.28993 3 4.71429 3.57563 4.71429 4.28571C4.71429 4.9958 5.28993 5.57143 6.00001 5.57143Z'
                stroke={color}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M9.49483 8.57147H10.2857L11.5714 11.5715H0.428574L1.71429 8.57147H2.50517'
                stroke={color}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </G>
        <Defs>
            <ClipPath id='clip0_17_1720'>
                <Rect width='12' height='12' fill='white' />
            </ClipPath>
        </Defs>
    </Svg>
);
export const SearchIcon = ({ color = '#292D32' }: IconProps) => (
    <Svg width='40' height='40' viewBox='0 0 40 40' fill='none'>
        <Circle cx='20' cy='20' r='19.5' stroke={color} />
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
export const MessageIcon = ({ color = '#292D32' }: IconProps) => (
    <Svg width='40' height='40' viewBox='0 0 40 40' fill='none'>
        <Circle cx='20' cy='20' r='19.5' stroke={color} />
        <Path
            d='M24.1667 25.3581H20.8334L17.125 27.8248C16.575 28.1914 15.8334 27.7998 15.8334 27.1331V25.3581C13.3334 25.3581 11.6667 23.6915 11.6667 21.1915V16.1914C11.6667 13.6914 13.3334 12.0247 15.8334 12.0247H24.1667C26.6667 12.0247 28.3334 13.6914 28.3334 16.1914V21.1915C28.3334 23.6915 26.6667 25.3581 24.1667 25.3581Z'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M19.9998 19.467V19.292C19.9998 18.7253 20.3498 18.4253 20.6998 18.1836C21.0415 17.9503 21.3831 17.6503 21.3831 17.1003C21.3831 16.3337 20.7665 15.717 19.9998 15.717C19.2332 15.717 18.6165 16.3337 18.6165 17.1003'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M19.9962 21.4583H20.0037'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const PlusIcon = ({ color = 'white' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M6 12H18'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M12 18V6'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const CircleLeftArrowIcon = ({ color = '#292D32' }: IconProps) => (
    <Svg width='40' height='40' viewBox='0 0 40 40' fill='none'>
        <Circle cx='20' cy='20' r='19.5' stroke={color} />
        <Path
            d='M17.975 14.9414L12.9166 19.9997L17.975 25.0581'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M27.0833 20H13.0583'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const MinusIcon = ({ color = 'white' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M6 12H18'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const CustomerIcon = ({ color = 'black' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M3.41003 22C3.41003 18.13 7.26003 15 12 15C12.96 15 13.89 15.13 14.76 15.37'
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
export const ArrowDownIcon = ({ color = '#292D32' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M19.9201 8.94922L13.4001 15.4692C12.6301 16.2392 11.3701 16.2392 10.6001 15.4692L4.08008 8.94922'
            stroke={color}
            stroke-width='1.5'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    </Svg>
);
export const CloseIcon = ({ color = '#292D32' }: IconProps) => (
    <Svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
        <Path
            d='M4.16748 4.16675L15.8334 15.8326'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M4.16664 15.8326L15.8325 4.16675'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const DeleteIcon = ({ color = '#292D32' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M21 5.98047C17.67 5.65047 14.32 5.48047 10.98 5.48047C9 5.48047 7.02 5.58047 5.04 5.78047L3 5.98047'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M18.8504 9.14062L18.2004 19.2106C18.0904 20.7806 18.0004 22.0006 15.2104 22.0006H8.79039C6.00039 22.0006 5.91039 20.7806 5.80039 19.2106L5.15039 9.14062'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M10.33 16.5H13.66'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M9.5 12.5H14.5'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const DeliveryIcon = ({ color = '#232323' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M3.1698 7.44043L11.9998 12.5504L20.7698 7.4704'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M11.9999 21.61V12.54'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M9.92999 2.48L4.59 5.45003C3.38 6.12003 2.39001 7.80001 2.39001 9.18001V14.83C2.39001 16.21 3.38 17.89 4.59 18.56L9.92999 21.53C11.07 22.16 12.94 22.16 14.08 21.53L19.42 18.56C20.63 17.89 21.62 16.21 21.62 14.83V9.18001C21.62 7.80001 20.63 6.12003 19.42 5.45003L14.08 2.48C12.93 1.84 11.07 1.84 9.92999 2.48Z'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M16.9998 13.2396V9.57965L7.50977 4.09961'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const MoneyIcon = ({ color = '#232323' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M19.3 7.91949V13.0695C19.3 16.1495 17.54 17.4695 14.9 17.4695H6.10995C5.65995 17.4695 5.22996 17.4295 4.82996 17.3395C4.57996 17.2995 4.33996 17.2295 4.11996 17.1495C2.61996 16.5895 1.70996 15.2895 1.70996 13.0695V7.91949C1.70996 4.83949 3.46995 3.51953 6.10995 3.51953H14.9C17.14 3.51953 18.75 4.46953 19.18 6.63953C19.25 7.03953 19.3 7.44949 19.3 7.91949Z'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M22.3011 10.9206V16.0706C22.3011 19.1506 20.5411 20.4706 17.9011 20.4706H9.11105C8.37105 20.4706 7.70106 20.3706 7.12106 20.1506C5.93106 19.7106 5.12105 18.8006 4.83105 17.3406C5.23105 17.4306 5.66105 17.4706 6.11105 17.4706H14.9011C17.5411 17.4706 19.3011 16.1506 19.3011 13.0706V7.92059C19.3011 7.45059 19.2611 7.03062 19.1811 6.64062C21.0811 7.04063 22.3011 8.38059 22.3011 10.9206Z'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M10.4984 13.1394C11.9564 13.1394 13.1384 11.9574 13.1384 10.4994C13.1384 9.04136 11.9564 7.85938 10.4984 7.85938C9.04038 7.85938 7.8584 9.04136 7.8584 10.4994C7.8584 11.9574 9.04038 13.1394 10.4984 13.1394Z'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M4.78027 8.29883V12.6989'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M16.2217 8.30078V12.7008'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const SquareEmptyTickIcon = ({ color = '#232323' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const SquareTickIcon = ({ color = '#292D32' }: IconProps) => (
    <Svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
        <Path
            d='M7.50008 18.3334H12.5001C16.6667 18.3334 18.3334 16.6667 18.3334 12.5001V7.50008C18.3334 3.33341 16.6667 1.66675 12.5001 1.66675H7.50008C3.33341 1.66675 1.66675 3.33341 1.66675 7.50008V12.5001C1.66675 16.6667 3.33341 18.3334 7.50008 18.3334Z'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M6.45825 9.99993L8.81659 12.3583L13.5416 7.6416'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const EmptySquareTickIcon = ({ color = '#292D32' }: IconProps) => (
    <Svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
        <Path
            d='M7.50008 18.3334H12.5001C16.6667 18.3334 18.3334 16.6667 18.3334 12.5001V7.50008C18.3334 3.33341 16.6667 1.66675 12.5001 1.66675H7.50008C3.33341 1.66675 1.66675 3.33341 1.66675 7.50008V12.5001C1.66675 16.6667 3.33341 18.3334 7.50008 18.3334Z'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const ArrowLeftIcon = ({ color = '#292D32' }: IconProps) => (
    <Svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
        <Path
            d='M7.97508 4.94141L2.91675 9.99974L7.97508 15.0581'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M17.0833 10H3.05835'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const DocumentIcon = ({ color = '#232323' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M8 13H12'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M8 17H16'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const DocumentDownloadIcon = ({ color = '#232323' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M9 11V17L11 15'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M9 17L7 15'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M22 10H18C15 10 14 9 14 6V2L22 10Z'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const PersonIcon = ({ color = '#232323' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M20.5901 22C20.5901 18.13 16.7401 15 12.0001 15C7.26009 15 3.41016 18.13 3.41016 22'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const BriefCaseIcon = ({ color = '#292D32' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
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
export const EditIcon = ({ color = '#292D32' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M16.0399 3.01928L8.15988 10.8993C7.85988 11.1993 7.55988 11.7893 7.49988 12.2193L7.06988 15.2293C6.90988 16.3193 7.67988 17.0793 8.76988 16.9293L11.7799 16.4993C12.1999 16.4393 12.7899 16.1393 13.0999 15.8393L20.9799 7.95928C22.3399 6.59928 22.9799 5.01928 20.9799 3.01928C18.9799 1.01928 17.3999 1.65928 16.0399 3.01928Z'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M14.9102 4.15039C15.5802 6.54039 17.4502 8.41039 19.8502 9.09039'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const SmsIcon = ({ color = '#292D32' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9'
            stroke={color}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const CloseCircle = ({ color = '#292D32' }: IconProps) => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Path
            d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M9.16992 14.8299L14.8299 9.16992'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M14.8299 14.8299L9.16992 9.16992'
            stroke={color}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);
export const OrangeStatusIcon = () => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='12' fill='#FAE9E1' />
        <Circle cx='12' cy='12' r='6' fill='#DD6E36' />
    </Svg>
);
export const GreenStatusIcon = () => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='12' fill='#D1FAE5' />
        <Circle cx='12' cy='12' r='6' fill='#22C55E' />
    </Svg>
);
export const GreyStatusIcon = () => (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Circle cx='12' cy='12' r='12' fill='#F3F4F6' />
        <Circle cx='12' cy='12' r='6' fill='#D1D5DB' />
    </Svg>
);
