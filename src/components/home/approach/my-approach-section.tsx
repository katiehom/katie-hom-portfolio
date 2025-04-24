"use client";

import { useState } from "react";
import { approachItems } from "@/lib/approach-items";
import ApproachItemAccordion from "./approach-item-accordion";
import { motion } from "framer-motion";
import PillButton from "@/components/ui/pill-button";
import SectionTab from "@/components/ui/section-tab";

export default function MyApproachSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  if (!approachItems.length) {
    return <p>No solutions found. Please try again later.</p>;
  }

  const handleToggle = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  const expandAll = () => {
    setOpenItems(approachItems.map((item) => item.id));
  };

  const collapseAll = () => {
    setOpenItems([]);
  };

  return (
    <section
      id="approach"
      className="relative scroll-mt-16 bg-indigo-100 bg-[url(/overlay.png)] px-6 pb-36 bg-blend-multiply md:px-20"
    >
      <SectionTab bgColor="bg-indigo-100 bg-[url(/overlay.png)]">
        My Approach
      </SectionTab>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="mb-3 pt-16 text-center text-2xl font-medium">
          Thoughtful by design. Built to make an impact.
        </p>
      </motion.div>
      <div className="mx-auto max-w-lg text-center sm:text-left">
        <div className="mt-10 flex items-center justify-end">
          <div className="flex justify-center gap-4">
            <PillButton onClick={expandAll}>Expand All</PillButton>
            <PillButton onClick={collapseAll}>Collapse All</PillButton>
          </div>
        </div>
        <div className="item-border mt-4">
          {approachItems.map((item) => (
            <ApproachItemAccordion
              key={item.id}
              item={item}
              isOpen={openItems.includes(item.id)}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
