// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://lotusreel.com',
  output: 'static',
  integrations: [
    sitemap(),
    mdx(),
    preact(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
