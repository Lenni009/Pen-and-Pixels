import { DefaultTheme } from "vitepress";

export interface CustomSidebarItem extends DefaultTheme.SidebarItem {
  isPublic?: boolean;
  items?: CustomSidebarItemChildren[];
}

interface CustomSidebarItemChildren extends CustomSidebarItem {
  isPublicEntry?: boolean;
}
