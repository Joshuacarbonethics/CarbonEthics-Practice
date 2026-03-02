import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A3E6D",
          white: "#FDFDFD",
          darkGrey: "#403B3C",
          grey: "#D6D6D6",
          turquoise: "#71CDBF",
          primary: "#0A3E6D",
          frost: "#BFDAE8",
          sands: "#E4D0A0",
        },
      },
    },
  },
  plugins: [],
};
export default config;