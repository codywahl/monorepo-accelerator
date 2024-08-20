import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginReact from "eslint-plugin-react";
import globals from "globals";
import tsEslint from "typescript-eslint";

export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  ...tsEslint.configs.stylistic,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  eslintPluginReact.configs.flat.recommended,
  {
    ignores: ["**/node_modules/", "**/dist/"],
  },
];
