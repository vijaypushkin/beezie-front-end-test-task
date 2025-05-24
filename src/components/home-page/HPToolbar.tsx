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
};

const HPToolbar: React.FC<HPToolbarProps> = ({
  query,
  setQuery,
  sort,
  setSort,
}) => {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <h1 className="text-2xl font-semibold text-white">Pokemon</h1>

      <div className="flex flex-wrap items-center gap-3 w-full">
        {/* Filter Icon Button */}
        <button className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-border text-white hover:bg-gray-card">
          <Image
            src="/assets/icons/filter.svg"
            alt="Filter"
            width={20}
            height={20}
          />
        </button>

        {/* Search Bar */}
        <div className="flex-1 min-w-[200px]">
          <Input
            placeholder="Search by name, set name, or anything"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
          className="min-w-[180px]"
        />
      </div>
    </div>
  );
};

export { HPToolbar };
