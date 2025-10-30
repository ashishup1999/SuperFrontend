/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#010010",
        secondary: "#ffed4a",
        light: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
        },
        accent: "#38c172",
        dark: {
          100: "#2d3748",
          200: "#1a202c",
          300: "#171923",
        },
      },
    },
  },
  plugins: [],
};
