import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#0D0D0D',
        'button': '#1F1F1F',
        'card': '#121212',
        'light': '#CACACA',
        'grey': '#7C7F82'
      },
      fontFamily: {
        'clash': ['Clash-Display','san-serif']
      },
      fontWeight: {
        'extralight': '200',
        'light': '300',
        'regular': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700'
      }
    },
  },
  plugins: [],
};
export default config;
