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

  return (
    <div className="flex flex-col p-[50px]">
      {/* Header */}
      <aside>
        <HPToolbar
          query={query}
          setQuery={setQuery}
          sort={sort}
          setSort={setSort}
        />
      </aside>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 shrink-0">
          <HPFilter filters={filters} onFilterChange={handleFilterChange} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6 py-4">
          <ProductsList
            query={deferredQuery}
            filters={deferredFilters}
            sort={deferredSort}
          />
        </main>
      </div>
    </div>
  );
};

export { HomePage };
