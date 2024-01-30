import type { DefaultTheme } from 'vitepress';
import { showTime } from '../../pages/code/variables/env';

export const nav: DefaultTheme.NavItem[] | undefined = showTime
  ? undefined
  : [
      { text: 'Wiki', link: '/intro' },
      { text: 'Seite erstellen', link: '/erstellen' },
    ];
