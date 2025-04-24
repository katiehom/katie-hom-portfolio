"use client";

import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

export const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(245, 41%, 34%)"
    strokeLinecap="round"
    {...props}
  />
);
