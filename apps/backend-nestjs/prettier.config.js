import prettierConfig from '@repo/eslint-config/prettier';

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  ...prettierConfig,
};
