/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    fontFamily: {
      sans: ['sans-serif'],
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
        primary: {
          gold: {
            light: 'rgba(245, 196, 50, 1)',
            dark: 'rgba(204, 108, 49, 1)',
            DEFAULT: 'rgba(233, 177, 11, 1)',
          },
          green: {
            light: 'rgba(0, 227, 89, 1)',
            dark: 'rgba(0, 150, 59, 1)',
            DEFAULT: 'rgba(2, 191, 77, 1)',
          },
        },
      },
      fontSize: {
        xxs: ['0.65rem', '0.8rem'],
        xs: '0.78rem',
      },
    },
  },
  plugins: [],
}
