/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
      },
      colors: {
        'brand-black': '#121214',
        'brand-white': '#FFFFFF',
        'brand-surface': '#E8EBFB',
        'brand-rose': '#FE55A4',
        'brand-lilac': '#6279E5',
        'brand-lime': '#DBFF4D',
        'brand-blue': '#3FC7FF'
      }
    },
  },
  plugins: [],
}
