import type { DefaultTheme } from 'vitepress';
import { showTime } from '../pages/variables/env';

const createPageLinkItem = { text: 'Seite erstellen', link: '/erstellen' };

export const nav = (): DefaultTheme.NavItem[] | undefined =>
  showTime ? undefined : [{ text: 'Wiki', link: '/intro' }, createPageLinkItem];

export const createPageSidebar = (): DefaultTheme.SidebarItem => (showTime ? {} : createPageLinkItem);
