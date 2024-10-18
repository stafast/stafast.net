// @ts-check
import {defineConfig} from 'astro/config';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

import node from '@astrojs/node';

import vue from '@astrojs/vue';

import expressiveCode from 'astro-expressive-code';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        expressiveCode(),
        mdx(),
        vue()
    ],

    output: 'server',
    adapter: cloudflare(),
    server: {
        port: 1337
    }
});