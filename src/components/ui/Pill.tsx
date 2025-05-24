"use client";

import { cn } from "@/utils/tailwind.utils";

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  variant?: "filter" | "removable";
}

export const Pill = ({
  label,
  active = false,
  onClick,
  onRemove,
  variant = "filter",
}: PillProps) => {
  const baseClass =
    "px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2";

  const filterStyles = active
    ? "bg-white text-black cursor-pointer"
    : "bg-white/10 text-white cursor-pointer";

  const removableStyles =
    "border border-(--border-primary) text-white bg-transparent";

  return (
    <button
      onClick={onClick}
      className={cn(
        baseClass,
        variant === "filter" ? filterStyles : removableStyles
      )}
    >
      <span>{label}</span>
      {variant === "removable" && (
        <span
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="cursor-pointer"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      )}
    </button>
  );
};
