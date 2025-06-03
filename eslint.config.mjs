import eslintReact from "@eslint-react/eslint-plugin";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPlugin from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import tsEslint from "typescript-eslint";

// todo add tailwind

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
});

const eslintConfig = [
  {
    name: "custom/eslint/recommended",
    ...eslintPlugin.configs.recommended
  }
];

const tsEslintConfig = tsEslint.config({
  name: "custom/typescript-eslint/recommended",
  extends: [
    ...tsEslint.configs.strictTypeChecked,
    ...tsEslint.configs.stylisticTypeChecked
  ],
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/no-confusing-void-expression": "off"
  }
});

const reactConfig = tsEslint.config({
  name: "custom/typescript-eslint/react",
  extends: [
    reactHooks.configs["recommended-latest"],
    eslintReact.configs["recommended-type-checked"]
  ]
});

export default [
  {
    ignores: [
      ".next/",
      ".vscode/",
      ".idea/",
      "public/",
      "components/ui/**",
      "hooks/use-toast.ts",
      "*.mjs",
      "prisma/seed.js"
    ]
  },
  { files: ["**/*.{js,ts,jsx,tsx}"] },
  {
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        warnOnUnsupportedTypeScriptVersion: true
      }
    }
  },
  ...compat.extends("next/typescript"),
  ...eslintConfig,
  ...tsEslintConfig,
  ...reactConfig,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  nextPlugin.flatConfig.coreWebVitals,
  eslintConfigPrettier
];
