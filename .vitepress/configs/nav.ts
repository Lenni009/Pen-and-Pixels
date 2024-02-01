import type { DefaultTheme } from 'vitepress';
import { data } from '../../pages/code/dataLoader/showTime.data';

export const nav: DefaultTheme.NavItem[] | undefined = data.showTime
  ? undefined
  : [
      { text: 'Wiki', link: '/intro' },
      { text: 'Seite erstellen', link: '/erstellen' },
    ];
