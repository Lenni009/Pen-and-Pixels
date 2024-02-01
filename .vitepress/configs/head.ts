import { HeadConfig, withBase } from 'vitepress';

export const head: HeadConfig[] = [
  ['meta', { name: 'theme-color', content: '#a8b1ff' }],
  [
    'meta',
    {
      name: 'msapplication-config',
      content: withBase('/icons/browserconfig.xml'),
    },
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#a8b1ff' }],
  [
    'link',
    {
      rel: 'mask-icon',
      href: withBase('/icons/safari-pinned-tab.svg'),
      color: '#a8b1ff',
    },
  ],
  ['link', { rel: 'manifest', href: withBase('/icons/site.webmanifest') }],
  [
    'link',
    {
      rel: 'icon',
      sizes: '180x180',
      href: withBase('/icons/apple-touch-icon.png'),
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: withBase('/icons/favicon-32x32.png'),
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: withBase('/icons/favicon-16x16.png'),
    },
  ],
  ['link', { rel: 'shortcut icon', href: withBase('/icons/favicon.ico') }],
];
