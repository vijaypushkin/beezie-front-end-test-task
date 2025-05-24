"use client";

import Image from "next/image";

import { Input } from "@/components/ui/Input";
import { Dropdown } from "@/components/ui/Dropdown";

const sortOptions = [
  { label: "Price low to high", value: "low" },
  { label: "Price high to low", value: "high" },
];

type HPToolbarProps = {
  query: string;
  setQuery: (query: string) => void;
  sort: string;
  setSort: (sort: string) => void;
  onOpenFilter: () => void;
};

const HPToolbar: React.FC<HPToolbarProps> = ({
  query,
  setQuery,
  sort,
  setSort,
  onOpenFilter,
}) => {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <h1 className="text-4xl font-bold text-white font-(family-name:--font-montserrat)">
        Pokemon
      </h1>

      <div className="flex items-center gap-3 w-full h-13">
        {/* Filter Icon Button */}
        <button
          className="w-[52px] flex items-center justify-center md:w-18 rounded-md border border-gray-border text-white hover:bg-gray-card h-11 md:h-13"
          onClick={onOpenFilter}
        >
          <Image
            src="/assets/icons/filter.svg"
            alt="Filter"
            width={24}
            height={24}
          />
        </button>

        {/* Search Bar */}
        <div className="flex-1">
          <Input
            placeholder="Search by name, set name, or anything"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-11 md:h-13"
            icon={
              <Image
                src="/assets/icons/search.svg"
                alt="Search"
                width={16}
                height={16}
              />
            }
            rightIcon={
              <Image
                src="/assets/icons/enter.svg"
                alt="Reset"
                width={16}
                height={16}
              />
            }
          />
        </div>

        {/* Sort Dropdown */}
        <Dropdown
          value={sort}
          onChange={setSort}
          options={sortOptions}
          className="md:w-inherit md:min-w-[210px] h-11 md:h-13"
          icon="/assets/icons/sort.svg"
        />
      </div>
    </div>
  );
};

export { HPToolbar };
