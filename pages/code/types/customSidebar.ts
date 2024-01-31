import { DefaultTheme } from "vitepress";

export interface CustomSidebarItem extends DefaultTheme.SidebarItem {
  isInternal?: boolean;
  items?: CustomSidebarItemChildren[];
}

interface CustomSidebarItemChildren extends CustomSidebarItem {
  isPublicEntry?: boolean;
}
