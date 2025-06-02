import { FlatCompat } from "@eslint/eslintrc";
import eslintPlugin from "@eslint/js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// todo refactor this to use the new FlatCompat API

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslintPlugin.configs.recommended
  // allConfig: js.configs.all,
  // ignoreFiles: ["**/node_modules/**", "**/dist/**"],
  // reportUnusedDisableDirectives: true,
  // useEslintrc: false,
  // resolvePluginsRelativeTo: __dirname,
  // parser: "@typescript-eslint/parser",
  // parserOptions: {
  //   projectService: true,
  //   tsconfigRootDir: __dirname,
  // },
  // plugins: {
  //   "@typescript-eslint": "@typescript-eslint/eslint-plugin",
  //   "react-hooks": "eslint-plugin-react-hooks",
  //   "react-refresh": "eslint-plugin-react-refresh",
  //   "react-naming-convention": "eslint-plugin-react-naming-convention",
  // },
  // rules: {
  //   ...js.configs.recommended.rules,
  //   "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  //   "react-naming-convention/component-name": "warn",
  //   "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  // },
  // extends: [
  //   js.configs.recommended,
  //   ...js.configs.recommendedTypeChecked,
  //   ...js.configs.strictTypeChecked,
  //   ...js.configs.stylisticTypeChecked,
  //   "plugin:react-x/recommended-typescript",
  //   "plugin:react-dom/recommended",
  // ],
  // files: ["**/*.{ts,tsx}"],
  // languageOptions: {
  //   parser: "@typescript-eslint/parser",
  //   parserOptions: {
  //     projectService: true,
  //     tsconfigRootDir: __dirname,
  //   },
  // }
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "plugin:prettier/recommended"
    ],
    plugins: ["prettier"],
    rules: {
      //
      "prettier/prettier": "error"
    }
  })
];

export default eslintConfig;
