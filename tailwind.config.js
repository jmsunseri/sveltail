module.exports = {
  plugins: [require('tailwindcss-filters')],
  theme: {
    filter: {
      // defaults to {}
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)',
    },
    backdropFilter: {
      // defaults to {}
      none: 'none',
      'blur-0': 'none',
      'blur-1': 'blur(1px)',
      'blur-2': 'blur(2px)',
      'blur-3': 'blur(3px)',
      'blur-4': 'blur(4px)',
      'blur-5': 'blur(5px)',
      'blur-6': 'blur(6px)',
      'blur-7': 'blur(7px)',
      'blur-8': 'blur(8px)',
      'blur-9': 'blur(9px)',
      'blur-10': 'blur(10px)',
      'blur-11': 'blur(11px)',
      'blur-12': 'blur(12px)',
      'blur-13': 'blur(13px)',
      'blur-14': 'blur(14px)',
      'blur-15': 'blur(15px)',
      'blur-16': 'blur(16px)',
      'blur-17': 'blur(17px)',
      'blur-18': 'blur(18px)',
      'blur-19': 'blur(19px)',
      'blur-20': 'blur(20px)',
      blur: 'blur(20px)',
    },
  },
  variants: {
    filter: ['responsive', 'hover', 'active'], // defaults to ['responsive']
    backdropFilter: ['responsive', 'hover', 'active'],
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
