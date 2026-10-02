/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
        './data/**/*.{js,jsx,ts,tsx}',
        './stores/**/*.{js,jsx,ts,tsx}',
        './utils/**/*.{js,jsx,ts,tsx}',
        './hooks/**/*.{js,jsx,ts,tsx}',
        './constants/**/*.{js,jsx,ts,tsx}',
    ],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            fontFamily: {
                figtree: ['Figtree_400Regular'],
                'figtree-medium': ['Figtree_500Medium'],
                'figtree-semibold': ['Figtree_600SemiBold'],
                'figtree-bold': ['Figtree_700Bold'],
            },
        },
    },
    plugins: [],
};
