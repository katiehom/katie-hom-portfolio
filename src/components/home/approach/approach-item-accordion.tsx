"use client";

import { IoChevronDownOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import type { ApproachItem } from "@/types/approach";

interface ApproachItemAccordionProps {
  item: ApproachItem;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ApproachItemAccordion({
  item,
  isOpen,
  onToggle,
}: ApproachItemAccordionProps) {
  const Icon = item.icon;

  return (
    <>
      <div className="item">
        <button
          type="button"
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls={`accordion-content-${item.id}`}
          id={`accordion-button-${item.id}`}
          className="flex w-full cursor-pointer items-center gap-6 rounded-2xl p-2 py-6 pr-3 pl-5 text-left transition-shadow duration-300 ease-in-out hover:bg-indigo-50/30 hover:shadow-lg hover:shadow-indigo-300/50 hover:outline hover:outline-indigo-400/30 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
          onClick={onToggle}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500">
            <Icon className="font-light text-white" />
          </div>
          <h4
            className="flex-1 font-semibold"
            id={`accordion-label-${item.id}`}
          >
            {item.title}
          </h4>
          <motion.span
            animate={{
              rotate: isOpen ? 180 : 0,
              transition: { duration: 0.5 },
            }}
            className="text-2xl text-indigo-600"
          >
            <IoChevronDownOutline />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              id={`accordion-label-${item.id}`}
              aria-labelledby={`accordion-label-${item.id}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden px-4"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(191, 200, 254, 0.2) 10%, rgba(191, 192, 254, 0.2) 90%, transparent)",
              }}
            >
              <p className="pt-4 pr-8 pb-2 pl-10 text-sm leading-relaxed text-indigo-950">
                {item.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
