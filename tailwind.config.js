/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "color-light": "#70757A",
        "color-black": "#1D2126",
        "white-light": "#F2F2F2",
        "card-color": "#FAFAFA"
      },
      fontFamily:{
        'roboto': ['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
}

