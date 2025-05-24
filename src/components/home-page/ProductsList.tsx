"use client";

import { useQuery } from "@tanstack/react-query";
import { CardItem } from "./CardItem";
import { productsQueryOptions } from "@/api/queries/products.queries";
import { formatUnits } from "ethers";
import { getUsdcDecimalsOptions } from "@/api/queries/usdc.queries";
import { useMemo } from "react";
import Image from "next/image";
import { Pill } from "../ui/Pill";

type ProductsListProps = {
  query: string;
  filters: string[];
  sort: string;
  onFilterClick: (filter: string) => void;
};

const ProductsList: React.FC<ProductsListProps> = ({
  query,
  filters,
  sort,
  onFilterClick,
}) => {
  const { data = [], isPending } = useQuery(productsQueryOptions);

  const { data: decimals } = useQuery(getUsdcDecimalsOptions);

  const filteredData = useMemo(() => {
    return data
      .filter((product) => {
        if (query === "" && filters.length === 0) {
          return true;
        }

        const isNameMatch =
          query !== ""
            ? product.name.toLowerCase().includes(query.toLowerCase())
            : true;
        const isFilterMatch =
          filters.length > 0
            ? filters.some((filter) =>
                product.name.toLowerCase().includes(filter.toLowerCase())
              )
            : true;

        return isNameMatch && isFilterMatch;
      })
      .toSorted((a, b) => {
        if (sort === "low") {
          return Number(a.priceUsdc) - Number(b.priceUsdc);
        } else {
          return Number(b.priceUsdc) - Number(a.priceUsdc);
        }
      });
  }, [data, query, filters, sort]);

  return (
    <div className="flex flex-col">
      {filters.length > 0 && (
        <div className="flex gap-2 mb-4">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              active
              onRemove={() => onFilterClick(filter)}
              variant="removable"
            />
          ))}
        </div>
      )}

      <div className="mb-4 font-normal text-(--text-secondary)">
        {filteredData.length} Results
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] md:gap-[30px]">
        {isPending &&
          Array.from({ length: 10 }).map((_, i) => (
            <div className="w-full aspect-[3/4] bg-gray-200 animate-pulse" />
          ))}

        {filteredData.map((product) => (
          <CardItem
            key={product.id}
            image={product.imageUrl}
            title={product.name}
            price={decimals ? formatUnits(product.priceUsdc, decimals) : null}
          />
        ))}
      </div>
    </div>
  );
};

export { ProductsList };
