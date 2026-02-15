module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "primary-button-color": "var(--primary-button-color)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};