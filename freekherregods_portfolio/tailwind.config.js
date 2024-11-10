/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'custom-header-text': '1.1375rem',
        'custom-header-title': '10rem',
        'custom-header-title-7rem': '7rem',
      },
      width: {
        'custom-header-image': '22rem',
      },
      maxWidth: {
        'custom-width-25rem': '26rem',
      },
      backgroundColor: {
        'custom-bg-color-gray': '#c5bba8',
        'custom-bg-color-blue': '#45576F',
      },
    },
  },
  plugins: [],
};
