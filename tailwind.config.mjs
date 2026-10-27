/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazirmatn', 'Tahoma', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#bcdfff',
          300: '#8ecbff',
          400: '#59acff',
          500: '#3389fc',
          600: '#1c6bf2',
          700: '#1554e0',
          800: '#1845b6',
          900: '#1a408f',
        },
        sand: {
          50: '#faf7f2',
          100: '#f3ece0',
          200: '#e6d6bd',
          300: '#d6ba8e',
          400: '#c79c63',
          500: '#bd874a',
          600: '#a86f3e',
          700: '#8a5536',
          800: '#714634',
          900: '#5f3c30',
        },
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
};
