/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        base: ['Lato', 'sans-serif'],
      },
      fontSize: {
        sm: ['clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)', '1.4'],
        base: ['clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)', '1.5'],
        lg: ['clamp(1.86rem, calc(1.03rem + 1.19vw), 1.88rem)', '1.4'],
        xl: ['clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)', '1.4'],
        '2xl': ['clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)', '1.2'],
        '3xl': ['clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)', '1.1'],
        '4xl': ['clamp(2.56rem, calc(1.03rem + 4.93vw), 4.58rem)', '1'],
        '5xl': ['clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)', '1'],
        '6xl': ['clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)', '1'],
        '7xl': ['clamp(3.57rem, calc(0.78rem + 9.95vw), 8.15rem)', '1'],
        '8xl': ['clamp(3.57rem, calc(1.2rem + 9.95vw), 12rem)', '1'],
      },
      colors: {
        /* DarkMode */
        dark: '#15171A',
        'extra-dark': '#0B0C0D',
        light: '#E6EAF0',
        'extra-light': '#F5F8FB',
        // Brand Color
        brand: {
          DEFAULT: '#0D6EFD',
          light: '#CADEFD',
          'extra-light': '#F0F5FD',
          dark: '#031734',
          'extra-dark': '#01060E',
          900: '#04275A',
          800: '#033A8B',
          700: '#045AD9',
          600: '#0D6EFD',
          500: '#267CFC',
          400: '#408BFD',
          300: '#5C9CFD',
          200: '#7FB1FD',
          100: '#A4C8FD',
        },
        container: {
          center: true,
          padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            md: '3rem',
            lg: '4rem',
            xl: '5rem',
            '2xl': '6rem',
          },
        },
        dropShadow: {
          'text-sm': '1px 1px 1px rgba(0, 0, 0, 0.30)',
          'text-md': '1px 2px 1px rgba(0, 0, 0, 0.30)',
          'text-lg': '1px 4px 1px rgba(0, 0, 0, 0.30)',
        },
        screens: {
          xs: '425px',
        },
      },
    },
  },
  plugins: [],
}
