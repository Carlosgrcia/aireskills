import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        loadingBar: 'loadingBar 2s infinite ease-in-out',
      },
      keyframes: {
        loadingBar: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' }
        }
      }
    },
  },
  plugins: [],
};
export default config; 