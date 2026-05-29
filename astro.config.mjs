// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

const SITE_URL = process.env.PUBLIC_SITE_URL ?? 'https://jbscorp.net';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Static-first: all content pages are prerendered for speed/SEO.
  // Form API routes opt into on-demand rendering via `export const prerender = false`.
  adapter: vercel({
    webAnalytics: { enabled: false },
  }),
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', es: 'es-US' },
      },
    }),
  ],
});
