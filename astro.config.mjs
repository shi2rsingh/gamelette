import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://gamelette.com',
  output: 'static',
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'hi-IN', 'fr-FR', 'de-DE', 'es-ES', 'ja-JP', 'zh-CN'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en-US',
        locales: {
          'en-US': 'en-US',
          'hi-IN': 'hi-IN',
          'fr-FR': 'fr-FR',
          'de-DE': 'de-DE',
          'es-ES': 'es-ES',
          'ja-JP': 'ja-JP',
          'zh-CN': 'zh-CN',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
