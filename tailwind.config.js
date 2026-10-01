/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './data/**/*.{ts,tsx}',
        './stores/**/*.{ts,tsx}',
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
