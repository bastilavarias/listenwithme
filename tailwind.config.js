const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                primary: {
                    50: '#FDE8CF',
                    100: '#FDDFBC',
                    200: '#FBCC94',
                    300: '#FAB96D',
                    400: '#F8A745',
                    500: '#F7941E',
                    600: '#D57708',
                    700: '#9F5906',
                    800: '#693B04',
                    900: '#331C02',
                    DEFAULT: '#F7941E',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.text-main': {
                    '@apply text-foreground': {},
                },
                '.text-secondary': {
                    '@apply text-slate-600 dark:text-slate-300': {},
                },
                '.text-brand': {
                    '@apply text-white dark:text-white': {},
                },
                '.text-disabled': {
                    '@apply text-slate-300 dark:text-slate-800': {},
                },
                '.text-invert': {
                    '@apply text-white dark:text-slate-950': {},
                },
                '.surface-primary': {
                    '@apply bg-background': {},
                },
                '.surface-brand': {
                    '@apply bg-primary': {},
                },
                '.surface-invert': {
                    '@apply bg-slate-950 dark:bg-white': {},
                },
                '.fill-brand': {
                    '@apply fill-primary': {},
                },
                '.fill-main': {
                    '@apply fill-black dark:fill-white': {},
                },
                '.border-main': {
                    '@apply border-slate-200 dark:border-slate-800': {},
                },
                '.input-label': {
                    '@apply text-slate-600 dark:text-slate-300': {},
                },
                '.input-placeholder': {
                    '@apply placeholder:text-slate-500': {},
                },
                '.input-surface': {
                    '@apply bg-slate-100 dark:bg-slate-900': {},
                },
                '.input-border': {
                    '@apply border border-slate-200 dark:border-slate-700': {},
                },
            });
        }),
        require('autoprefixer'),
    ],
};
