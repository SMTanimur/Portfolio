module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        kaushan: ['Kaushan Script'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
