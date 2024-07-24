import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkgray: "#333",
        lightgray: "#FAFAFA",
        border: "#D9D9D9",
        gray: "#737373",
        white: "#FFFFFF",
        green: "#17AF26",
        black: "#1A1E26",
        purple: "#633CFF",
        red: "#DC2626",
        purplehover: "#BEADFF",
        topSelling: "#060709",
      },
    },
  },
  plugins: [],
};
export default config;
