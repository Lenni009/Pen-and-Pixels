import type { DefaultTheme } from 'vitepress';
import { showTime } from '../../pages/code/dataLoader/showTime.data';

export const nav: DefaultTheme.NavItem[] | undefined = showTime
  ? undefined
  : [
      { text: 'Wiki', link: '/intro' },
      { text: 'Seite erstellen', link: '/erstellen' },
    ];
