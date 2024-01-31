import { showTime } from '../pages/code/variables/env';
import { nav } from './configs/nav';
import { head } from './configs/head';
import { sidebar } from './configs/transformSidebar';
import { sidebar as rawSidebar } from './sidebar';
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Legende von Gutenberg',
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
  head,
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

    nav,
    sidebar,

    socialLinks: [{ icon: 'github', link: 'https://github.com/Lenni009/Studioprojekt2024' }],
  },

  transformPageData(pageData) {
    if (!showTime || !pageData?.frontmatter?.hero?.actions?.[1]) return;
    pageData.frontmatter.hero.actions.pop();
    const wikiLinkSectionIndex = rawSidebar.findIndex((item) => item.items?.some((subItem) => subItem.isPublicEntry));
    if (wikiLinkSectionIndex === -1) return;
    const wikiLink = rawSidebar[wikiLinkSectionIndex].items?.find((item) => item.isPublicEntry)?.link;
    if (wikiLink) pageData.frontmatter.hero.actions[0].link = wikiLink;
  },
});
