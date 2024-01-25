import { sidebar } from './sidebar';
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Studioprojekt ME21b",
  description: "Wiki für das Studioprojekt der ME21b",
  base: '/Studioprojekt2024/',
  srcDir: 'pages',
  cleanUrls: true,
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  head: [
    ['link', { rel: 'icon', sizes: '180x180', href: '/Studioprojekt2024/icons/apple-touch-icon.png' }],
    ['link', { rel: 'icon', sizes: '32x32', href: '/Studioprojekt2024/icons/favicon-32x32.png' }],
    ['link', { rel: 'icon', sizes: '16x16', href: '/Studioprojekt2024/icons/favicon-16x16.png' }],
    ['link', { rel: 'icon', href: '/Studioprojekt2024/icons/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '/Studioprojekt2024/globalStyle.css' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Startseite', link: '/' },
    ],

    sidebar: sidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lenni009/Studioprojekt2024' },
    ]
  }
})
