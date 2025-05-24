"use client";

import { cn } from "@/utils/tailwind.utils";

interface PillProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-xl text-sm font-medium cursor-pointer",
        active ? "bg-white text-black" : "bg-white/10 text-white"
      )}
    >
      {label}
    </button>
  );
};

export { Pill };
