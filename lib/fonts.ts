import localFont from 'next/font/local';

// RNS Sanz Font Family - Official Binzagr-Coro Typography
export const RNS = localFont({
    src: [
        {
            path: '../public/fonts/RNSSanz-Light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/RNSSanz-Normal.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/RNSSanz-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/RNSSanz-SemiBold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/fonts/RNSSanz-Bold.otf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-rns',
    display: 'swap',
    fallback: ['sans-serif'],
});
