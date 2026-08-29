import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "Inter", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.30em",
      },
      colors: {
        dark: {
          950: "#030712",
          900: "#090D16",
          850: "#0D1322",
          800: "#0F172A", // Azul Noche Oficial
          700: "#1E293B",
          600: "#334155",
        },
        brand: {
          50: "#EFF6FF", // Azul Hielo Oficial
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6", // Azul Brillante Oficial
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        emerald: {
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
        },
        ice: "#EFF6FF",
        noche: "#0F172A",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-light": "radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.08) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(239, 246, 255, 0.8) 0px, transparent 50%)",
        "mesh-dark": "radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.12) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(16, 185, 129, 0.08) 0px, transparent 50%)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px -3px rgba(59, 130, 246, 0.25)",
        "glow-md": "0 0 30px -4px rgba(59, 130, 246, 0.3)",
        "glow-lg": "0 0 50px -5px rgba(59, 130, 246, 0.35)",
        "subtle-card": "0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)",
        "elevation-1": "0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px 0 rgba(15, 23, 42, 0.04)",
        "elevation-2": "0 4px 12px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)",
        "elevation-3": "0 12px 28px -4px rgba(15, 23, 42, 0.12), 0 4px 10px -2px rgba(15, 23, 42, 0.06)",
        "elevation-hover": "0 20px 35px -8px rgba(15, 23, 42, 0.14), 0 8px 16px -4px rgba(59, 130, 246, 0.08)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
