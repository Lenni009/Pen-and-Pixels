import { showTime } from '../pages/variables/env';
import { nav } from './createPage';
import { headLinks } from './head';
import { sidebar } from './sidebar';
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Studioprojekt ME21b',
  description: 'Wiki für das Studioprojekt der ME21b',
  base: '/Studioprojekt2024/',
  srcDir: 'pages',
  cleanUrls: true,
  lang: 'de-DE',
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  head: headLinks(),
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    docFooter: {
      prev: 'Vorherige Seite',
      next: 'Nächste Seite',
    },
    outline: {
      level: [2, 3],
      label: 'Auf dieser Seite',
    },
    darkModeSwitchLabel: 'Aussehen',
    lightModeSwitchTitle: 'Zum hellen Modus wechseln',
    darkModeSwitchTitle: 'Zum dunklen Modus wechseln',
    sidebarMenuLabel: 'Menü',
    returnToTopLabel: 'Zurück zum Anfang',

    search: {
      provider: 'local',
    },

    nav: nav(),

    sidebar: sidebar(),

    socialLinks: [{ icon: 'github', link: 'https://github.com/Lenni009/Studioprojekt2024' }],
  },

  transformPageData(pageData) {
    if (showTime && pageData?.frontmatter?.hero?.actions?.[1]) pageData?.frontmatter?.hero?.actions?.pop();
  },
});
