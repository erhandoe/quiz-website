import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        chakra: ["Chakra Petch", "sans-serif"],
      },
      animation: {
        gradient: "cyber 20s ease infinite",
      },
      keyframes: {
        cyber: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundSize: {
        "400": "400% 400%",
      },
    },
  },
  plugins: [],
} satisfies Config;
