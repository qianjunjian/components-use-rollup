import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'build/index.cjs.js',
      format: 'cjs',
      name: "index"
    },
    {
      file: 'build/index.es.js',
      format: 'es',
      name: "index"
    },
    {
      file: 'build/index.umd.js',
      format: 'umd',
      name: "index"
    },
  ],
  external: [],
  plugins: [
    typescript(),
    resolve(),
    commonjs()
  ]
};