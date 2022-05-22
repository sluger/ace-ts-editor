import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/index.ts',

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  external: ['ace-builds', 'ace'],

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({
      extensions,
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
  ],

  output: [
    {
      file: 'dist/ace-ts-editor.js',
      name: 'AceTsEditor',
      format: 'umd',
      globals: {
        'ace-builds': 'ace',
        ace: 'ace',
      },
    },
  ],
};
