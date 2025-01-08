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
        subbackground: "var(--sub-background)",
        subfontcolor: "var(--sub-font-color)",
        point: {
          red: "#f85149",
          blue: "#4493f8",
          green: "#3fb950",
          orange: "#ffa657",
          violet: "#7928CA",
          cyan: "#50E3C2",
        },
      },
      keyframes: ({ theme }) => ({
        rerender: {
          "0%": {
            ["border-color"]: theme("colors.subfontcolor"),
          },
          "40%": {
            ["border-color"]: theme("colors.subfontcolor"),
          },
        },
        highlight: {
          "0%": {
            background: theme("colors.point.pink"),
            color: theme("colors.white"),
          },
          "40%": {
            background: theme("colors.point.pink"),
            color: theme("colors.white"),
          },
        },
        loading: {
          "0%": {
            opacity: ".2",
          },
          "20%": {
            opacity: "1",
            transform: "translateX(1px)",
          },
          to: {
            opacity: ".2",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        translateXReset: {
          "100%": {
            transform: "translateX(0)",
          },
        },
        fadeToTransparent: {
          "0%": {
            opacity: "1",
          },
          "40%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      }),
    },
  },
  plugins: [],
} satisfies Config;
