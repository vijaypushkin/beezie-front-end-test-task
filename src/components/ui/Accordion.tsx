"use client";

import { cn } from "@/utils/tailwind.utils";
import { useState } from "react";

type AccordionProps = {
  title: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t px-6">
      <button
        className="w-full flex items-center justify-between py-4 font-medium text-left text-(--text-primary)"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="text-lg font-medium">{title}</span>
        <svg
          className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
};

export { Accordion };
