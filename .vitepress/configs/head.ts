import { HeadConfig } from 'vitepress';

export const head: HeadConfig[] = [
  ['meta', { name: 'theme-color', content: '#a8b1ff' }],
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
      rel: 'icon',
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
  ['meta', { name: 'application-name', content: 'Studioprojekt 2024' }],
  [
    'meta',
    {
      name: 'keywords',
      content:
        'Studioprojekt, 2024, Leipzig, Gutenbergschule, Guts, Gutenbergschule Leipzig, ME21b, Pen & Pixels, Legende von Gutenberg, Studioproduktion, Live',
    },
  ],
];
