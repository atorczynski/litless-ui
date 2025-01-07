// custom-elements-manifest.config.js

import { customElementVsCodePlugin } from 'custom-element-vs-code-integration';

const options = {
  outdir: 'dist'
};

export default {
  outdir: 'dist',
  litelement: true,
  schemaVersion: '1.0.0',
  plugins: [customElementVsCodePlugin(options)]
};
