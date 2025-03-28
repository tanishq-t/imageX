import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  {
    rules: {
      "no-var": "off",          // Disable 'var' warning
      "prefer-const": "off",    // Disable 'prefer-const' rule
      "@typescript-eslint/no-var-requires": "off", // Disable TypeScript specific rule (if needed)
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
