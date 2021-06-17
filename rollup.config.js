import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json';

import {
  chromeExtension,
  simpleReloader,
} from 'rollup-plugin-chrome-extension'

export default {
  input: 'manifest.json',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    chromeExtension(),
    simpleReloader(),
    resolve(),
    commonjs(),
    json()
  ],
}
