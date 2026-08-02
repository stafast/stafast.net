import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";
import tsEslint from "typescript-eslint";

export default defineConfig([
    {
        ignores: [".astro/**", "dist/**"],
    },
    js.configs.recommended,
    ...tsEslint.configs.strict,
    ...eslintPluginAstro.configs.recommended,
]);
