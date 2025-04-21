"use client";

import { motion } from "framer-motion";

export default function AnimatedHeading() {
  const words = [
    "Building",
    "<pink>thoughtful</pink>",
    "web",
    "experiences",
    "that",
    "drive",
    "real",
    "<pink>impact</pink>",
  ];

  return (
    <motion.h2
      className="my-8 px-8 text-center text-2xl font-medium text-white"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {words.map((word, index) => {
        const isPink = word.includes("<pink>");
        const cleanWord = word.replace(/<\/?pink>/g, "");

        return (
          <motion.span
            key={index}
            variants={child}
            className={`inline-block ${isPink ? "font-bold text-pink-300" : ""} mr-2`}
          >
            {cleanWord}
          </motion.span>
        );
      })}
    </motion.h2>
  );
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};
