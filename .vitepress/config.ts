import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Studioprojekt ME21b",
  description: "Wiki für das Studioprojekt der ME21b",
  base: '/Studioprojekt2024/',
  srcDir: 'pages',
  cleanUrls: true,
  head: [
    ['link', {rel: 'icon', href: '/Studioprojekt2024/favicon.ico'}],
    ['link', {rel: 'stylesheet', href: '/Studioprojekt2024/globalStyle.css'}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
      options: {
        locales: {
          de: {
            translations: {
              button: {
                buttonText: 'Suche',
                buttonAriaLabel: 'Suche'
              },
              modal: {
                noResultsText: 'Keine Ergebnisse gefunden',
                resetButtonTitle: 'Suchtext löschen'
              }
            }
          }
        }
      }
    },

    nav: [
      { text: 'Startseite', link: '/' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Welt', link: '/welt' },
          { text: 'Völker', link: '/völker' },
          { text: 'NPC', link: '/npc' },
          { text: 'Klassen', link: '/klassen' },
          { text: 'Waffen', link: '/waffen' },
          { text: 'Items', link: '/items' },
          { text: 'Gegner', link: '/gegner' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lenni009/Studioprojekt2024' }
    ]
  }
})
