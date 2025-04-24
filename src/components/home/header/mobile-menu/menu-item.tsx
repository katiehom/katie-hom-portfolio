"use client";

import { itemVariants } from "@/lib/menu-variants";
import type { NavItem } from "@/types/nav";
import * as motion from "motion/react-client";

interface MenuItemProps {
  item: NavItem;
  onClick: () => void;
}

export const MenuItem = ({ item, onClick }: MenuItemProps) => {
  const Icon = item.icon;

  return (
    <motion.li
      className="m-0 mb-[20px] flex cursor-pointer list-none items-center justify-start p-0 text-indigo-900 hover:font-semibold hover:text-indigo-950"
      variants={itemVariants}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <a href={item.href}>
        <div className="flex items-center">
          <div
            className={`mr-[20px] grid h-[40px] w-[40px] flex-none basis-[40px] items-center justify-center rounded-full bg-indigo-700 text-lg text-white`}
          >
            <Icon />
          </div>
          <span className="font-medium">{item.label}</span>
        </div>
      </a>
    </motion.li>
  );
};
