import type { DefaultTheme } from 'vitepress';

export function sidebar(): DefaultTheme.SidebarItem[] {
  // text: der Text, der in der Seitenleiste erscheint
  // link: URL, unter der die Seite erreichbar ist. Muss mit dem Dateinamen der entsprechenden .md Datei übereinstimmen
  return [
    {
      text: 'Disclaimer',
      collapsed: false,
      items: [
        { text: 'Disclaimer', link: '/intro' },
      ]
    },
    {
      text: 'Story',
      collapsed: false,
      items: [
        { text: 'Geschichte', link: '/geschichte' },
        { text: 'Abenteurer', link: '/abenteurer' },
        { text: 'Lore', link: '/lore' },
      ]
    },
    {
      text: 'Welt',
      collapsed: false,
      items: [
        { text: 'Regionen', link: '/regionen' },
        { text: 'Völker', link: '/völker' },
        { text: 'Orte', link: '/orte' },
        { text: 'NPC', link: '/npc' },
        { text: 'Klassen', link: '/klassen' },
      ]
    },
    {
      text: 'Kampf',
      collapsed: false,
      items: [
        { text: 'Waffen', link: '/waffen' },
        { text: 'Items', link: '/items' },
        { text: 'Gegner', link: '/gegner' },
      ]
    },
  ]
}
