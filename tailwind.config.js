const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./components/*.tsx", "./pages/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      gray: colors.warmGray,
      accent: "#ffd380",
    },
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
