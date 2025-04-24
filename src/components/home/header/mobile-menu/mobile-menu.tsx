"use client";

import { useRef, useState } from "react";
import { useDimensions } from "@/hooks/use-dimensions";
import * as motion from "motion/react-client";
import { MenuToggle } from "./menu-toggle";
import { Navigation } from "./navigation";
import { sidebarVariants } from "@/lib/menu-variants";
import { AnimatePresence } from "motion/react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(
    containerRef as React.RefObject<HTMLDivElement>,
  );

  return (
    <div className="flex items-center justify-end">
      <div>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className="absolute top-0 right-0 z-50 h-[450px] w-[300px]"
        >
          <motion.div
            variants={sidebarVariants}
            className="absolute top-0 right-0 bottom-0 z-10 w-[300px] rounded-2xl rounded-tr-none bg-indigo-300"
          />
          <Navigation onClick={() => setIsOpen(false)} />
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </motion.nav>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-10 bg-black/30 backdrop-blur-[3px]"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
