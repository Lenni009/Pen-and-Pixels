import { DefaultTheme } from 'vitepress';
import { sidebar } from '../sidebar';
import { showTime } from '../../pages/code/variables/env';
import { CustomSidebarItem } from '../../pages/code/types/customSidebar';

function processItems(items: CustomSidebarItem[]): DefaultTheme.SidebarItem[] {
  const result: DefaultTheme.SidebarItem[] = [];

  for (const item of items) {
    // This needs to be an explicit false check, since the value can also be undefined, and undefined should be equal to true.
    if (showTime && item.isPublic === false) continue;
    delete item.isPublic;

    if (item.items) item.items = processItems(item.items);

    result.push(item);
  }

  return result;
}

const normalSidebar = processItems(sidebar);

export { normalSidebar as sidebar };
