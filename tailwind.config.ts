import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
        heading: ['Outfit', ...defaultTheme.fontFamily.sans],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'scroll-left': 'scroll-left 40s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      dark: {
        DEFAULT: '#0B0D17',
        secondary: '#111827',
        tertiary: '#1A1F35',
      },
      text: {
        primary: '#E4E4E7',
        secondary: '#9CA3AF',
        tertiary: '#6B7280',
      },
      accent: {
        DEFAULT: '#6EE7B7',
        hover: '#34D399',
        glow: 'rgba(110, 231, 183, 0.15)',
      },
      indigo: {
        DEFAULT: '#818CF8',
        hover: '#6366F1',
      },
      border: {
        DEFAULT: '#1F2937',
        hover: '#374151',
      },
      white: '#FFFFFF',
      black: '#000000',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
