// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import stafast from "./stafast.config";

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
});
