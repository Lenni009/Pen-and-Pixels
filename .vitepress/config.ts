import { sidebar } from './sidebar';
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Studioprojekt ME21b",
  description: "Wiki für das Studioprojekt der ME21b",
  base: '/Studioprojekt2024/',
  srcDir: 'pages',
  cleanUrls: true,
  lang: 'de-DE',
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#a8b1ff' }],
    ['meta', { name: 'msapplication-config', content: '/Studioprojekt2024/icons/browserconfig.xml' }],
    ['meta', { name: 'msapplication-TileColor', content: '#a8b1ff' }],
    ['link', { rel: 'mask-icon', href: '/Studioprojekt2024/icons/safari-pinned-tab.svg', color: '#a8b1ff' }],
    ['link', { rel: 'manifest', href: '/Studioprojekt2024/icons/site.webmanifest' }],
    ['link', { rel: 'icon', sizes: '180x180', href: '/Studioprojekt2024/icons/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/Studioprojekt2024/icons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/Studioprojekt2024/icons/favicon-16x16.png' }],
    ['link', { rel: 'shortcut icon', href: '/Studioprojekt2024/icons/favicon.ico' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    docFooter: {
      prev: 'Vorherige Seite',
      next: 'Nächste Seite'
    },
    outline: {
      level: [2, 3],
      label: 'Auf dieser Seite'
    },
    darkModeSwitchLabel: 'Aussehen',
    lightModeSwitchTitle: 'Zum hellen Modus wechseln',
    darkModeSwitchTitle: 'Zum dunklen Modus wechseln',
    sidebarMenuLabel: 'Menü',
    returnToTopLabel: 'Zurück zum Anfang',

    search: {
      provider: 'local',
    },

    sidebar: sidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lenni009/Studioprojekt2024' },
    ]
  }
})
