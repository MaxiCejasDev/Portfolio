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
        'button': '#161616',
        'hover-black': '#191919',
        'card': '#121212',
        'light': '#CACACA',
        'grey': '#7C7F82'
      },
    },
  },
  plugins: [],
};
export default config;
