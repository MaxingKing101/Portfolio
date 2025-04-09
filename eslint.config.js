import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    // Ignore build artifacts and deployment-specific files
    ignores: [
      "dist",
      "public",
      "*.config.*",
      ".github",
      "**/__generated__/**",
      ".cache"
    ]
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      "plugin:react-hooks/recommended"
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      "react-refresh": reactRefresh
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],
      "no-console": "warn",
      "arrow-body-style": ["error", "as-needed"]
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    // Cache configuration for performance
    cache: true,
    cacheLocation: "./node_modules/.cache/eslint/"
  },
  // Separate config for JavaScript config files
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: globals.node
    },
    rules: {
      "@typescript-eslint/no-var-requires": "off",
      "no-undef": "off"
    }
  }
);