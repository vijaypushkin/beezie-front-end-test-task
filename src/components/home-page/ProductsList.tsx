"use client";

import { useQuery } from "@tanstack/react-query";
import { CardItem } from "./CardItem";
import { productsQueryOptions } from "@/api/queries/products.queries";
import { formatUnits } from "ethers";
import { getUsdcDecimalsOptions } from "@/api/queries/usdc.queries";
import { useMemo } from "react";

type ProductsListProps = {
  query: string;
  filters: string[];
  sort: string;
};

const ProductsList: React.FC<ProductsListProps> = ({
  query,
  filters,
  sort,
}) => {
  const { data = [], isPending } = useQuery(productsQueryOptions);

  const { data: decimals } = useQuery(getUsdcDecimalsOptions);

  const filteredData = useMemo(() => {
    return data
      .filter((product) => {
        return (
          product.name.toLowerCase().includes(query.toLowerCase()) &&
          filters.every((filter) => product.name.includes(filter))
        );
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
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-[14px]">
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
  );
};

export { ProductsList };
