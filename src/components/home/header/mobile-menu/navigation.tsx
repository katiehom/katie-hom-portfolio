"use client";

import { navVariants } from "@/lib/menu-variants";
import * as motion from "motion/react-client";
import { MenuItem } from "./menu-item";
import { navLinks } from "@/lib/nav-links";

interface NavigationProps {
  onClick: () => void;
}

export const Navigation = ({ onClick }: NavigationProps) => (
  <motion.ul
    variants={navVariants}
    className="absolute top-[80px] z-20 m-0 w-[230px] list-none p-[25px]"
  >
    {navLinks?.map((item) => (
      <MenuItem item={item} key={item.id} onClick={onClick} />
    ))}
  </motion.ul>
);
