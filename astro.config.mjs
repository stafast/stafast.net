// @ts-check
import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
import tailwind from '@astrojs/tailwind';
import astroExpressiveCode from 'astro-expressive-code'


// https://astro.build/config
export default defineConfig({
    site: 'https://stafast.net',
    trailingSlash: 'always',
    prefetch: {
        defaultStrategy: 'viewport'
    },
    integrations: [
        sitemap(),
        icon(),
        astroExpressiveCode({
            themes: ['github-dark', 'github-light'],
            styleOverrides: {
                codeFontSize: "0.9rem",
            },
        }),
        tailwind({nesting: true})
    ]
});