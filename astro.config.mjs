// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import tailwindcss from "@tailwindcss/vite";
import stafast from "./stafast.config";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";

import expressiveCode from "astro-expressive-code";

export default defineConfig({
    prefetch: {
        defaultStrategy: "viewport",
    },

    site: stafast.site.url,
    base: stafast.site.base,
    trailingSlash: "always",

    markdown: {
        processor: unified({
            remarkPlugins: [remarkReadingTime],
        }),
    },

    vite: {
        plugins: [tailwindcss()],
    },

    output: "static",
    compressHTML: true,
    integrations: [
        sitemap(),
        expressiveCode({
            themes: ["github-dark", "github-light"],
            styleOverrides: {
                codeFontSize: "0.9rem",
            },
        }),
    ],
});
