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
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1: "#475045",
        color2:"#B79F9E",
        color3:"#909B99",
        color4:"#7F6246",
        color5:"#D6CBBF"
      },
    },
  },
  plugins: [],
};
export default config;
