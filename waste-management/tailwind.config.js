/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Ysabeau Infant", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        primary: {
          500: "#4361EE",
        },
        green: {
          500: "#148519",
          600: '#088179',
          700: "#046C4E",
        },
        olive: {
          500: "#628c23",
        },
        gray: {
          300: "#D1D5DB",
          900: "#111928",
        },
        red: {
          550: "#FD0000",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
