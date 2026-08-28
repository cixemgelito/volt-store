import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "#FAFAF9",
        surface: "#FFFFFF",
        ink: "#14161A",
        graphite: "#4B4F58",
        line: "#E4E4E2",
        copper: {
          DEFAULT: "#C8722C",
          light: "#E0955A",
          dark: "#9C5A22",
          50: "#FBF1E8",
        },
        signal: {
          DEFAULT: "#1F9D62",
          50: "#E9F7EF",
        },
        danger: "#C13B3B",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20,22,26,0.04), 0 1px 1px rgba(20,22,26,0.03)",
        cardHover: "0 8px 24px rgba(20,22,26,0.08)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
