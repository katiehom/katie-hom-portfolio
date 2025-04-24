import type { IconType } from "react-icons";

export interface NavItem {
  id: number;
  label: string;
  href: string;
  icon: IconType;
}
