/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crimson: "#ff0000",
        nitro: "#0055ff",
      },
      dropShadow: {
        blood: "0 0 8px rgba(255, 0, 0, 0.6)",
        neon: "0 0 12px rgba(0, 85, 255, 0.5)",
      },
      boxShadow: {
        "red-glow": "0 0 20px rgba(255, 0, 0, 0.3)",
        "hover-red": "0 0 25px rgba(255, 0, 0, 0.6)",
        "hover-blue": "0 0 25px rgba(0, 85, 255, 0.6)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
