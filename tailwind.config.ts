const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');

const production = !process.env.ROLLUP_WATCH; // or some other env var like NODE_ENV
module.exports = {
  future: {
    // for tailwind 2.0 compat
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
  purge: {
    content: [
      './src/**/*.svelte',
      // may also want to include base index.html
    ],
    options: {
      // defaultExtractor: (content) => [
      //   ...tailwindExtractor(content),
      //   // Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
      //   ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
      //     ([_match, group, ..._rest]) => group
      //   ),
      // ],
      keyframes: true,
    },
    enabled: production, // disable purge in dev
  },
};
