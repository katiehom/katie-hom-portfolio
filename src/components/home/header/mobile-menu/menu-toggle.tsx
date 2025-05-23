"use client";

import * as motion from "motion/react-client";
import { Path } from "./path";

export const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button
    onClick={toggle}
    className="user-select-none absolute top-[12px] right-[9px] z-20 grid h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border-none bg-transparent transition-all duration-300 ease-in-out outline-none"
  >
    <motion.svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </motion.svg>
  </button>
);
