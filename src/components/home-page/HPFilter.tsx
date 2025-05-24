"use client";

import { useState } from "react";
import { Accordion } from "../ui/Accordion";
import { Checkbox } from "../ui/Checkbox";
import { Pill } from "../ui/Pill";

type HPFilterProps = {
  filters: string[];
  onFilterChange: (filters: string) => void;
};

const HPFilter: React.FC<HPFilterProps> = ({ filters, onFilterChange }) => {
  const [status, setStatus] = useState<string[]>([]);

  const handleStatusChange = (value: string) => {
    if (status.includes(value)) {
      setStatus((prev) => prev.filter((s) => s !== value));
    } else {
      setStatus((prev) => [...prev, value]);
    }
  };

  return (
    <div className="space-y-2">
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
