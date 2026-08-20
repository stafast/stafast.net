// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import stafast from "./stafast.config";

import expressiveCode from "astro-expressive-code";

export default defineConfig({
    prefetch: {
        defaultStrategy: "viewport",
    },

    site: stafast.site.url,
    base: stafast.site.base,
    trailingSlash: "always",

    vite: {
        plugins: [tailwindcss()],
    },

    output: "static",
    compressHTML: true,
    integrations: [
        expressiveCode({
            themes: ["github-dark", "github-light"],
            styleOverrides: {
                codeFontSize: "0.9rem",
            },
        }),
    ],
});
