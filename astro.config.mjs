// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

import node from '@astrojs/node';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), vue()],

  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  server: {
    port: 1337
  }
});