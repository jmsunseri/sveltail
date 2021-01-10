import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';

export default {
  input: 'src/main.ts',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        // https://github.com/kaisermann/svelte-preprocess/#user-content-options
        sourceMap: false,
        postcss: {
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      }),
      compilerOptions: {
        // enable run-time checks when not in production
        dev: false,
      },
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: 'bundle.css' }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
    typescript({
      sourceMap: false,
      inlineSources: false,
      include: ['src/**/*.ts', new RegExp('shared\\/(.)+\\/(.+.ts)')],
    }),
    terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
