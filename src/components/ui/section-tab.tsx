import type { ReactNode } from "react";

interface SectionTabProps {
  children: ReactNode;
  bgColor: string;
  textColor?: string;
}

export default function SectionTab({
  children,
  bgColor,
  textColor,
}: SectionTabProps) {
  return (
    <div
      className={`absolute -top-10 left-1/2 flex h-10 w-48 -translate-x-1/2 items-center justify-center rounded-t-2xl tracking-[0.15em] md:-top-11 md:h-12 md:w-56 lg:w-64 ${bgColor}`}
    >
      <h3 className={`logo-text mt-2 text-sm font-bold uppercase ${textColor}`}>
        {children}
      </h3>
    </div>
  );
}
