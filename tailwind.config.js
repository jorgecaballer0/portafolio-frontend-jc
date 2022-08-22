/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'sm': {'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1280px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        
      },
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
