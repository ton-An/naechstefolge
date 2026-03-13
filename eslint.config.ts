import pluginVitest from "@vitest/eslint-plugin";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";
import jsdoc from "eslint-plugin-jsdoc"; // Import the plugin
import pluginOxlint from "eslint-plugin-oxlint";
import pluginPlaywright from "eslint-plugin-playwright";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import pluginVue from "eslint-plugin-vue";
import { globalIgnores } from "eslint/config";
import globals from "globals";

import requireCatchRethrow from "./eslint-local-rules/require-catch-rethrow";
import vueImportAliasMatchesFilename from "./eslint-local-rules/vue-import-alias-matches-filename";

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
  },
  globalIgnores([
    "**/dist/**",
    "**/dist-ssr/**",
    "**/coverage/**",
    "**/core/presentation/shadcn/**",
  ]),
  pluginVue.configs["flat/recommended"],
  vueTsConfigs.recommended,
  {
    rules: {
      "vue/no-undef-components": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_",
        },
      ],
    },
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    files: ["**/*.ts", "**/*.mts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-confusing-void-expression": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_",
        },
      ],
    },
  },
  {
    plugins: {
      "local": {
        rules: {
          "require-catch-rethrow": requireCatchRethrow,
          "vue-import-alias-matches-filename": vueImportAliasMatchesFilename,
        },
      },
    },
    rules: {
      "local/require-catch-rethrow": "error",
      "local/vue-import-alias-matches-filename": "error",
    },
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
    },
  },
  jsdoc.configs["flat/recommended-typescript"],
  {
    files: ["**/*.ts", "**/*.mts", "**/*.tsx", "**/*.vue"],
    rules: {
      "jsdoc/require-jsdoc": [
        "warn",
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
            ArrowFunctionExpression: false,
            FunctionExpression: false,
          },
          publicOnly: false,
          checkConstructors: false,
        },
      ],
    },
  },
  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/__tests__/*"],
  },
  {
    ...pluginPlaywright.configs["flat/recommended"],
    files: ["e2e/**/*.{test,spec}.{js,ts,jsx,tsx}"],
  },
  {
    files: ["e2e/**/*.{ts,mts,tsx}", "src/**/__tests__/*"],
    rules: {
      "jsdoc/require-jsdoc": "off",
    },
  },
  ...pluginOxlint.configs["flat/recommended"],
  skipFormatting,
);
