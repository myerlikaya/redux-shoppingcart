import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1890ff", 
        secondary: "#ff4d4f",
      },
      borderRadius: {
        xl: "12px", 
      },
    },
  },
  plugins: [],
};

export default config;