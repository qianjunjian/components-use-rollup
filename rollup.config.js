import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      name: "index"
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      name: "index"
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: "index"
    },
  ],
  external: id => id.includes('@babel/runtime') || id.includes('core-js'),
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',    // 防止打包node_modules下的文件
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', "ts", "tsx"],
      babelHelpers: "runtime"
    }),
  ]
};