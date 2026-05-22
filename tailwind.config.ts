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
        primary: "#E8593C",
        dark: "#111111",
        cream: "#F5F0EB",
        orange: "#D4521A",
      },
      fontFamily: {
        display: ["'42dot Sans'", "'DM Sans'", "ui-sans-serif"],
        body: ["Inter", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
