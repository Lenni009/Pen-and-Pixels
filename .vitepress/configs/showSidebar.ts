import { DefaultTheme } from 'vitepress';

// text: der Text, der in der Seitenleiste erscheint
// link: URL, unter der die Seite erreichbar ist. Muss mit dem Dateinamen der entsprechenden .md Datei übereinstimmen
export const showSidebar: DefaultTheme.SidebarItem[] = [
  {
    base: '/sendung',
    items: [
      { text: 'Stream', link: '/stream' },
      { text: 'Aufzeichnungen', link: '/videos' },
      { text: 'Einspieler', link: '/clips' },
      { text: 'Musik', link: '/musik' },
      { text: 'Behind the Scenes', link: '/bts' },
    ],
  },
];
