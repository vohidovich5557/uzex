/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'whiteBg': '#F8F8F8',
        'rareBlack': '#333333',
        'rareBlue': '#055387',
        'lightBlue': '#F6FBFF',
        'boldBlue': '#8CABFF',
        'rareGray': '#868AA2',
      },
      container: {
          center: true,
          padding: '10px',
          width: '1440px',
      },
      screens: {
        sm: '365px',
        md: '768px',
        xl: '1440px',
      }
    },
  },
  plugins: [],
}