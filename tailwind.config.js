/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          bgColor: "#1f1f38",
          bgVariant: "#151c28",
          bgHover: "#232323",
        },
        primary: {
          main: "#049395",
          mainVariant: "#037f81",
        },
      },
    },
  },
  plugins: [],
};
