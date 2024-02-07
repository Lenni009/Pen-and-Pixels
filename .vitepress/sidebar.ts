import { CustomSidebarItem } from '../pages/code/types/customSidebar';

// text: der Text, der in der Seitenleiste erscheint
// link: URL, unter der die Seite erreichbar ist. Muss mit dem Dateinamen der entsprechenden .md Datei übereinstimmen
// isInternal: wenn "true", wird der Link/Abschnitt nicht während der Aufführungszeit (ab 29.04.2024) angezeigt werden. Kann auf ganzen Abschnitten und auf einzelnen Links verwendet werden
// isPublicEntry: wenn "true", wird dieser Link das Ziel des "Wiki" Links auf der Startseite. Falls es öfter verwendet wird, wird der erste für den Link verwendet
export const sidebar: CustomSidebarItem[] = [
  {
    isInternal: true,
    items: [
      { text: 'Disclaimer', link: '/intro' },
      { text: 'Seite erstellen', link: '/erstellen' },
    ],
  },
  {
    text: 'Story',
    items: [
      { text: 'Geschichte', link: '/geschichte', isInternal: true },
      { text: 'Abenteurer', link: '/abenteurer', isPublicEntry: true },
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
      { text: 'NPCs', link: '/npc' },
      { text: 'Klassen', link: '/klassen' },
      { text: 'Gesinnung', link: '/Gesinnung' },
    ],
  },
  {
    text: 'Kampf',
    items: [
      { text: 'Waffen', link: '/waffen' },
      { text: 'Items', link: '/items' },
      { text: 'Gegner', link: '/gegner' },
      { text: 'Würfel', link: '/wuerfel', isInternal: true },
    ],
  },
];
