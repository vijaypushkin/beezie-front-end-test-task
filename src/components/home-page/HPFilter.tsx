"use client";

import { useState } from "react";
import { Accordion } from "../ui/Accordion";
import { Checkbox } from "../ui/Checkbox";
import { Pill } from "../ui/Pill";
import Image from "next/image";

type HPFilterProps = {
  filters: string[];
  onFilterChange: (filters: string) => void;
  clearAll: () => void;
};

const HPFilter: React.FC<HPFilterProps> = ({
  filters,
  onFilterChange,
  clearAll,
}) => {
  const [status, setStatus] = useState<string[]>([]);

  const handleStatusChange = (value: string) => {
    if (status.includes(value)) {
      setStatus((prev) => prev.filter((s) => s !== value));
    } else {
      setStatus((prev) => [...prev, value]);
    }
  };

  return (
    <div className="">
      <div className="flex items-center gap-2 h-18 px-6 justify-between">
        <Image
          className="hidden md:block"
          src="/assets/icons/filter.svg"
          alt="Filter"
          width={24}
          height={24}
        />

        <div className="md:hidden" />

        <div className="md:flex-1 font-bold text-xl">Filters</div>

        <button className="cursor-pointer" onClick={clearAll}>
          <Image
            src="/assets/icons/close.svg"
            alt="Filter"
            width={24}
            height={24}
          />
        </button>
      </div>

      <Accordion title="Status">
        <div className="flex flex-wrap gap-2">
          <Pill
            label="All"
            active={status.includes("all")}
            onClick={() => handleStatusChange("all")}
          />
          <Pill
            label="For Sale"
            active={status.includes("for sale")}
            onClick={() => handleStatusChange("for sale")}
          />
        </div>
      </Accordion>

      <Accordion title="Name">
        <div className="space-y-2">
          <Checkbox
            label="Japanese"
            checked={filters.includes("Japanese")}
            onChange={() => onFilterChange("Japanese")}
          />
          <Checkbox
            label="Scarlet"
            checked={filters.includes("Scarlet")}
            onChange={() => onFilterChange("Scarlet")}
          />
          <Checkbox
            label="Classic"
            checked={filters.includes("Classic")}
            onChange={() => onFilterChange("Classic")}
          />
        </div>
      </Accordion>
      <Accordion title="Language">
        <div className="text-sm text-(--text-secondary)">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </Accordion>
      <Accordion title="Year">
        {" "}
        <div className="text-sm text-(--text-secondary)">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </Accordion>
      <Accordion title="Grader">
        {" "}
        <div className="text-sm text-(--text-secondary)">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </Accordion>
      <Accordion title="Grade">
        {" "}
        <div className="text-sm text-(--text-secondary)">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </Accordion>
      <Accordion title="Edition">
        <div className="text-sm text-(--text-secondary)">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </Accordion>
      <Accordion title="Card Number">
        <div className="text-sm text-(--text-secondary)">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </Accordion>
      <Accordion title="Card Type">
        {" "}
        <div className="text-sm text-(--text-secondary)">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </Accordion>
    </div>
  );
};

export { HPFilter };
