/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      primary: {
        50: '#F0F9F9',
        100: '#DEF2F1',
        200: '#C0E7E5',
        300: '#9FDBD8',
        400: '#7ECECA',
        500: '#5EC2BD',
        600: '#3FA6A1',
        700: '#307E7A',
        800: '#205552',
        900: '#0F2927',
      },
      secondary: {
        50: '#D6FFEB',
        100: '#A8FFD5',
        200: '#52FFAB',
        300: '#00FF84',
        400: '#00A857',
        500: '#00522B',
        600: '#004222',
        700: '#00331A',
        800: '#001F10',
        900: '#000F08',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
