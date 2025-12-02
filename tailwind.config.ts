import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0044CC', 
        'brand-beige': '#FAECC9', // <--- UPDATED: The cream color from your image
        'brand-accent': '#EEAA98', // <--- NEW: The salmon color from your image
        'brand-black': '#121212',
      },
      fontFamily: {
        sans: ['var(--font-space)'],
        display: ['var(--font-archivo)'],
        pixel: ['var(--font-pixel)'],
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px #000000',
      },
    },
  },
  plugins: [],
};
export default config;