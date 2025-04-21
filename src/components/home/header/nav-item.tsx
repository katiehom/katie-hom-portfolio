"use client";

import { motion } from "framer-motion";

interface NavItemProps {
  href: string;
  label: string;
}

export default function NavItem({ href, label }: NavItemProps) {
  return (
    <motion.li
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.7 },
      }}
    >
      <a
        href={href}
        role="button"
        aria-label={`Scroll to the ${label} section`}
        className="relative inline-block rounded-lg p-3 after:block after:h-[2px] after:origin-left after:scale-x-0 after:bg-pink-300 after:transition-transform hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
      >
        {label}
      </a>
    </motion.li>
  );
}
