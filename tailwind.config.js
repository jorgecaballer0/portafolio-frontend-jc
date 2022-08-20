/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          bgColor: "#1f1f38",
          bgVariant: "#151c28",
          bgHover: "#232323",
          bgNav: "#1c2536cc",
          bgNavHover: "#0000004d",
        },
        primary: {
          main: "#049395",
          mainVariant: "#037f81",
        },
        textPrimary: {
          main: "#bbbec3",
          mainVariant: "#dce0e4",
          colorLight: "#ffffff99",
        },
      },
    },
  },
  plugins: [],
};
