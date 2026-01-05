// @ts-check
import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
import astroExpressiveCode from 'astro-expressive-code'
import Sonda from 'sonda/astro';


import tailwindcss from '@tailwindcss/vite';


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
        Sonda(),
        astroExpressiveCode({
            themes: ['github-dark', 'github-light'],
            styleOverrides: {
                codeFontSize: "0.9rem",
            },
        }),
    ],

    vite: {
        plugins: [tailwindcss()],
        build: {
            sourcemap: true
        }
    }
});