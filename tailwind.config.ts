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
        // FUEL Brand Identity palette
        amber: "#EF9F27",
        dark: "#1A1A1A",
        cream: "#F5F3EE",
        primary: "#D85A30",
        orange: "#D85A30",
      },
      fontFamily: {
        display: ["'42dot Sans'", "'DM Sans'", "ui-sans-serif"],
        body: ["Inter", "ui-sans-serif"],
      },
      maxWidth: {
        site: "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
