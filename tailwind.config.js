/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      roboto: "Roboto",
      robotoRegular: "RobotoRegular",
    },
    screens: {
      mobile: "480px",
      // => @media (min-width: 480px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024) { ... }
    },

    fontSize: {
      xs: "12px",
      pp: "14px",
      sm: "16px",
      18: "18px",
      20: "20px",
      xl: "28px",
      24: "24px",
    },

    extend: {
      colors: {
        // primary: {...colors.primary},
        // seundary: {...colors.secundary},
        transparent: "rgba(0, 0, 0, 0.4)",
        primary: "#F57E20", //400
        secondary: "#FADD9B", //50
        tertiary: "#FFF1CC", //10
        quaternary: "#FFF8E6", //5
        
        button: "#333333",

        black: {
          600: "#333333",
        },
        lightBlack: "#333333",
        
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EBEBEB",
          300: "#D6D6D6",
          400: "#999999",
          500: "#707070",
        },

        red: {
          500: "#E1162F",
        },

        green: {
          500: "#3FB418",
          600: "#4b9460"
        },
      },
      height: {
        96: "28rem",
        50: "3.125rem",
        545: "545px",
        1059: "66.188rem",
        41: "41.813rem"
      },
      width: {
        37 : "36.375rem",
        117.5 : "470px",
        90: "387px",
        40: "2.5rem",
      },
    },
  },
  plugins: [],

}
