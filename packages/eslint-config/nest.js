import globals from "globals";
import { config as baseConfig } from "./base.js";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import importPlugin from "eslint-plugin-import";

/**
 * A custom ESLint configuration for libraries that use Nest JS.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const nestJsConfig = [
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: "module",
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
    },
  },
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["/**/*.d.ts", "/**/*.types.ts", "*.next-env.js", "package.json"],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Node.js builtins prefixed with `node:`.
            ["^node:"],

            // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
            [
              "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
            ],

            ["^@nestjs$", "^@nestjs/.+"],

            ["^@?\\w"],

            // Internal packages.
            ["^data(/.*|$)"],

            ["^hooks(/.*|$)"],

            [
              "^(@|components|constants|contexts|data|helpers|utils|views)(/.*|$)",
            ],

            // Side effect imports.
            ["^\\u0000"],

            // Parent imports. Put `..` last.
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],

            // Other relative imports. Put same-folder imports and `.` last.
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],

            // Style imports.
            ["^.+\\.s?css$"],
          ],
        },
      ],
    },
  },
];
