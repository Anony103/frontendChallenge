/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '281px',
      'sm': '640px',
      'md': '768px',
      'lg': '1161px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      display: ['responsive', 'group-hover', 'group-focus'],
      fontFamily: {
        'jakarta-sans': ['Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}