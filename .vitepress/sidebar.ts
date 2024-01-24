import type { DefaultTheme } from 'vitepress';

export function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Welt',
      collapsed: false,
      items: [
        { text: 'Welt', link: '/welt' },
        { text: 'Völker', link: '/völker' },
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
    }
  ]
}