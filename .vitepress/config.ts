import { nav } from './configs/nav';
import { head } from './configs/head';
import { wikiSidebar } from './configs/wikiSidebar';
import { showSidebar } from './configs/showSidebar';
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Pen & Pixels',
  description: 'Ein Pen & Paper Abenteuer der ME21b',
  // base: '/Pen-and-Pixels/',
  srcDir: 'pages',
  cleanUrls: true,
  lang: 'de-DE',
  markdown: { image: { lazyLoading: true } },
  sitemap: { hostname: 'https://pen-pixels.de' },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' },
    outline: {
      level: [2, 3], // NoSonar this says to include h2 and h3 headings in the TOC
      label: 'Auf dieser Seite',
    },
    darkModeSwitchLabel: 'Aussehen',
    lightModeSwitchTitle: 'Zum hellen Modus wechseln',
    darkModeSwitchTitle: 'Zum dunklen Modus wechseln',
    sidebarMenuLabel: 'Menü',
    returnToTopLabel: 'Zurück zum Anfang',

    search: { provider: 'local' },

    sidebar: { '/sendung/': showSidebar, '/wiki/': wikiSidebar },

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@penandpixels' },
      { icon: 'github', link: 'https://github.com/Lenni009/Pen-and-Pixels' },
    ],

    nav,
  },
  head,
});
