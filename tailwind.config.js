/** @type {import('tailwindcss').Config} */

// Brand Colors - Single source of truth
const brandColors = {
  black: '#121214',
  white: '#FFFFFF',
  surface: '#E8EBFB',
  rose: '#FE55A4',
  lilac: '#6279E5',
  lime: '#DBFF4D',
  blue: '#3FC7FF',
  orange: '#FC7E3A'
};

const brandColorsShades = {
  roseLight: '#FEE6F2',
  lilacLight: '#E8EBFB',
  lilacMedium: '#C4CEFF',
  limeLight: '#EBF8D5',
  blueLight: '#BEEBFF',
  orangeLight: '#FFDDCA'
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      colors: {
        'brand-black': brandColors.black,
        'brand-white': brandColors.white,
        'brand-surface': brandColors.surface,
        'brand-rose': brandColors.rose,
        'brand-lilac': brandColors.lilac,
        'brand-lilac-medium': brandColorsShades.lilacMedium,
        'brand-lime': brandColors.lime,
        'brand-blue': brandColors.blue,
        'brand-orange': brandColors.orange,
        'brand-rose-light': brandColorsShades.roseLight,
        'brand-lilac-light': brandColorsShades.lilacLight,
        'brand-lime-light': brandColorsShades.limeLight,
        'brand-blue-light': brandColorsShades.blueLight,
        'brand-orange-light': brandColorsShades.orangeLight
      }
    },
  },
  plugins: [],
}
