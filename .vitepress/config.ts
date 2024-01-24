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
    nav: [
      { text: 'Startseite', link: '/' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Klassen', link: '/klassen' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lenni009/Studioprojekt2024' }
    ]
  }
})
