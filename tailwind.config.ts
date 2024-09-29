// tailwind.config.js
import { nextui } from "@nextui-org/react";
import prose from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [prose(), nextui({addCommonColors: true, defaultTheme: "dark"})]
}

export default config;