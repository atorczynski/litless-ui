import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import { configs } from 'eslint-plugin-lit';
import { configs } from 'eslint-plugin-wc';

/** @type {import('eslint').Linter.Config[]} */
export default [
  configs.recommended,
  configs['flat/recommended'],
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended
];
