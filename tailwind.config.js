/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    fontFamily: {
      sans: ['Flama', 'sans-serif'],
    },
    extend: {
      colors: {
        dark: {
          100: 'rgba(36, 37, 47, 1)',
          200: 'rgba(31, 32, 41, 1)',
          300: 'rgba(26, 28, 36, 1)',
          400: 'rgba(22, 24, 31, 1)',
          500: '#16181f',
        },
        gray: 'rgba(146, 147, 166, 1)',
        primary: 'rgba(233, 177, 11, 1)',
      },
      fontSize: {
        sm: '.8125rem',
        base: '.9375rem',
      },
    },
  },
  plugins: [],
}
