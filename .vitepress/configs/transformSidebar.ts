import { DefaultTheme } from 'vitepress';
import { sidebar } from '../sidebar';
import { isShowTime } from '../../pages/code/dataLoader/showTime.data';
import { CustomSidebarItem } from '../../pages/code/types/customSidebar';

function processItems(items: CustomSidebarItem[]): DefaultTheme.SidebarItem[] {
  const result: DefaultTheme.SidebarItem[] = [];

  for (const item of items) {
    if (isShowTime && item.isInternal) continue;
    delete item.isInternal;

    if (item.items) item.items = processItems(item.items);

    result.push(item);
  }

  return result;
}

const normalSidebar = processItems(sidebar);

export { normalSidebar as sidebar };
