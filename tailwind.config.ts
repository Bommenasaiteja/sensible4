import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        primary: {
          DEFAULT: '#8a20ff',
          50: '#f4f0ff',
          100: '#ebe4ff',
          200: '#d9ceff',
          300: '#bea8ff',
          400: '#9f75ff',
          500: '#8a20ff',
          600: '#7c1af7',
          700: '#6b0ee3',
          800: '#5a0bbf',
          900: '#4b0a9c',
          950: '#2d0467',
          foreground: '#ffffff',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
