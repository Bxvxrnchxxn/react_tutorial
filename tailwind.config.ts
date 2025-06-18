import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Sans Thai", "sans-serif"],
        ui: ["ui-sans-serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
