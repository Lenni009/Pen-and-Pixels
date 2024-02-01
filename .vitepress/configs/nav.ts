import type { DefaultTheme } from 'vitepress';
import { isShowTime } from '../../pages/code/dataLoader/showTime.data';

export const nav: DefaultTheme.NavItem[] | undefined = isShowTime
  ? undefined
  : [
      { text: 'Wiki', link: '/intro' },
      { text: 'Seite erstellen', link: '/erstellen' },
    ];
