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
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'scroll-left': 'scroll-left 80s linear infinite',
        'scroll-right': 'scroll-right 80s linear infinite',
      },
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      primary: '#0077FF',
      accent: '#DDF247',
      charcoal: '#333333',
      light: '#DDDDDD',
      gray: '#666666',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
