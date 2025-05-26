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
        bronze: "#cd7f32",
        silver: "#c0c0c0",
        gold: "#ffd700",
        platinum: "#5fa196",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        chakra: ["Chakra Petch", "sans-serif"],
      },
      animation: {
        gradient: "cyber 20s ease infinite",
        neonPulse: "neonPulse 3s ease-in-out infinite",
        neonGlowHover: "neonGlowHover 3s ease-in-out infinite",
      },
      keyframes: {
        cyber: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        neonPulse: {
          "0%, 100%": {
            boxShadow:
              "0 0 10px var(--tw-shadow-color), 0 0 20px var(--tw-shadow-color)",
          },
          "50%": {
            boxShadow:
              "0 0 15px var(--tw-shadow-color), 0 0 30px var(--tw-shadow-color)",
          },
        },
        neonGlowHover: {
          "0%, 100%": { boxShadow: "0 0 0px var(--tw-shadow-color)" },
          "50%": { boxShadow: "0 0 15px var(--tw-shadow-color)" },
        },
      },
      backgroundSize: {
        "400": "400% 400%",
      },
    },
  },
  plugins: [],
} satisfies Config;
