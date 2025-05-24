"use client";

import { cn } from "@/utils/tailwind.utils";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div onClick={onChange} className="flex items-center gap-3 cursor-pointer">
      <div
        className={cn(
          "w-5 h-5 rounded-xs border border-white flex items-center justify-center",
          checked && "bg-lime-500 border-none"
        )}
      >
        {checked && (
          <svg
            className="w-3 h-3 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <span className="text-white">{label}</span>
    </div>
  );
};

export { Checkbox };
