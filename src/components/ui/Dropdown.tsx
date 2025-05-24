"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/utils/tailwind.utils";
import Image from "next/image";

type Option = { label: string; value: string };

interface DropdownProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  icon: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  className,
  icon,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div
      ref={ref}
      className={cn("relative text-lg font-medium h-full", className)}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-[52px] md:w-full bg-gray-input text-white border rounded-md px-4 py-2 flex justify-between items-center hover:bg-gray-card h-full"
      >
        <span className="hidden md:block">{selected?.label}</span>
        <svg
          className={`w-4 h-4 transform transition-transform hidden md:block ${
            open ? "rotate-180" : ""
          }`}
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

        <Image
          src={icon}
          alt="icon"
          width={20}
          height={20}
          className="md:hidden"
        />
      </button>

      {open && (
        <div className="absolute z-10 mt-1 w-full bg-gray-input border bg-(--bg-secondary)  rounded-md shadow-md">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={cn(
                "px-4 py-2 cursor-pointer hover:bg-(--bg-primary)/50 rounded-md",
                value === opt.value ? "text-yellow-brand" : "text-white"
              )}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Dropdown };
