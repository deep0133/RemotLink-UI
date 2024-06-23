/** @type {import('tailwindcss').Config} */
const { createThemes } = require("tw-colors");
// const daisyui = require("daisyui");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        AnekLatin: ["Anek Latin", "sans-serif"],
        Lusitana: ["Lusitana", "serif"],
        Poppins: ["Poppins", "serif"],
        Sora: ["Sora", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
        SourceSans: ["Source Sans Pro", "sans-serif"],
        FiraSans: ["Fira Sans", "sans-serif"],
      },
      borderColor: ["hover"],
      scale: ["hover"],
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
    animation: {
      marquee: "marquee 20s linear infinite",
    },
  },
  plugins: [
    createThemes({
      light: {
        primary: "#FFFFFF",
        secondary: "#323232",
        brand: "#FFFFFFAD",
        btn: "#222222",
      },
      purple: {
        primary: "#FFFFFF",
        secondary: "#3D1766",
        brand: "#25014C",
      },
    }),
  ],
};
