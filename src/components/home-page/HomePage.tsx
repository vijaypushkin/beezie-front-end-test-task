"use client";

import { useDeferredValue, useState } from "react";
import { HPFilter } from "./HPFilter";
import { HPToolbar } from "./HPToolbar";
import { ProductsList } from "./ProductsList";

const HomePage: React.FC = () => {
  // ? Usually this would live in Zustand or other global state management
  // ? Since no library rule is enforced, using useState
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<string[]>([]);
  const [sort, setSort] = useState("low");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleOpenFilter = () => setIsFilterOpen(true);
  const handleCloseFilter = () => setIsFilterOpen(false);

  const deferredQuery = useDeferredValue(query);
  const deferredFilters = useDeferredValue(filters);
  const deferredSort = useDeferredValue(sort);

  const handleFilterChange = (filter: string) => {
    if (filters.includes(filter)) {
      setFilters((prev) => prev.filter((f) => f !== filter));
    } else {
      setFilters((prev) => [...prev, filter]);
    }
  };

  const handleClearAll = () => {
    setFilters([]);
  };

  return (
    <div className="flex flex-col px-[15px] py-[30px] md:px-[50px] md:py-[50px]">
      {/* Header */}
      <aside>
        <HPToolbar
          query={query}
          setQuery={setQuery}
          sort={sort}
          setSort={setSort}
          onOpenFilter={handleOpenFilter}
        />
      </aside>

      <div className="flex gap-10">
        {/* Sidebar */}
        <aside className="w-64 shrink-0 hidden md:block">
          <HPFilter
            filters={filters}
            onFilterChange={handleFilterChange}
            clearAll={handleClearAll}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 py-4">
          <ProductsList
            query={deferredQuery}
            filters={deferredFilters}
            sort={deferredSort}
            onFilterClick={handleFilterChange}
          />
        </main>
      </div>

      {/* Mobile Filter Overlay */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 bg-(--bg-primary) md:hidden overflow-y-auto">
          <HPFilter
            filters={filters}
            onFilterChange={handleFilterChange}
            clearAll={handleClearAll}
          />
          <div className="fixed z-100 bottom-0 left-0 right-0 h-20 flex items-center justify-between bg-[#1A1A1A] px-6 py-5">
            <button
              className="text-sm font-bold text-(color:--tertiary)"
              onClick={handleClearAll}
            >
              Clear All
            </button>
            <button
              className="text-black text-sm font-normal bg-(--brand) px-4 py-2 rounded-md"
              onClick={handleCloseFilter}
            >
              Show Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { HomePage };
