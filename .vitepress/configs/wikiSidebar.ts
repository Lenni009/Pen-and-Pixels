import { DefaultTheme } from 'vitepress';

// text: der Text, der in der Seitenleiste erscheint
// link: URL, unter der die Seite erreichbar ist. Muss mit dem Dateinamen der entsprechenden .md Datei übereinstimmen
// Der Type muss so angegeben werden, da TS sich sonst beschwert
export const wikiSidebar: { base: string; items: DefaultTheme.SidebarItem[] } = {
  base: '/wiki',
  items: [
    {
      items: [{ text: 'Pen & Pixels', link: '/' }],
    },
    {
      text: 'Story',
      items: [
        { text: 'Abenteurer', link: '/abenteurer' },
        { text: 'Lore', link: '/lore' },
        { text: 'Karte', link: '/karte' },
      ],
    },
    {
      text: 'Welt',
      items: [
        { text: 'Regionen', link: '/regionen' },
        { text: 'Völker', link: '/völker' },
        { text: 'Orte', link: '/orte' },
        { text: 'Klassen', link: '/klassen' },
        { text: 'Gesinnung', link: '/gesinnung' },
      ],
    },
    {
      text: 'Kampf',
      items: [
        { text: 'Waffen', link: '/waffen' },
        { text: 'Items', link: '/items' },
        { text: 'Gegner', link: '/gegner' },
        { text: 'Würfel', link: '/wuerfel' },
      ],
    },
  ],
};
