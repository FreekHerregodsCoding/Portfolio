/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'custom-header-text': '1.1375rem',
        'custom-header-title': '9rem',
        'custom-header-title-xl': '7.5rem',
        'custom-header-title-7rem': '5rem',
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
        'custom-bg-color-button-active': '#3F4E4F',
        'custom-bg-color-button-disabled': '#2C3639',
        'custom-bg-color-section2': '#DCD7C9',
      },
      textColor: {
        'custom-duration': '#A27B5C',
        'custom-bg-color-button-disabled': '#2C3639',
      },
    },
  },
  plugins: [],
};
