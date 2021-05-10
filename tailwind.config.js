module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Presentationals/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "main-text": ["Roboto Slab", "serif"],
        "main-menu": ["Raleway", "sans-serif"],
      },
      colors: {
        orange: {
          wildColor: "#f76c6c",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
