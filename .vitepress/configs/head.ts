import { HeadConfig } from 'vitepress';

export const head: HeadConfig[] = [
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  [
    'meta',
    {
      name: 'msapplication-config',
      content: '/icons/browserconfig.xml',
    },
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#a8b1ff' }],
  [
    'link',
    {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg',
      color: '#a8b1ff',
    },
  ],
  ['link', { rel: 'manifest', href: '/icons/site.webmanifest' }],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/icons/apple-touch-icon.png',
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/icons/favicon-32x32.png',
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/icons/favicon-16x16.png',
    },
  ],
  ['link', { rel: 'shortcut icon', href: '/icons/favicon.ico' }],
  ['meta', { name: 'application-name', content: 'Pen & Pixels' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Pen & Pixels' }],
  [
    'meta',
    { name: 'description', content: 'Pen & Pixels: Die Legende von Gutenberg - Ein Pen & Paper Abenteuer der ME21b' },
  ],
  [
    'meta',
    {
      name: 'keywords',
      content:
        'Studioprojekt, 2024, Leipzig, Gutenbergschule, Guts, Gutenbergschule Leipzig, ME21b, Pen & Pixels, Pen and Pixels, Pen und Pixels, Legende von Gutenberg, Studioproduktion, Live',
    },
  ],
];
