module.exports = {
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['checked'],
    },
  },
  purge: {
    content: [
      './src/**/*.svelte',
      // may also want to include base index.html
    ],
  },
};
