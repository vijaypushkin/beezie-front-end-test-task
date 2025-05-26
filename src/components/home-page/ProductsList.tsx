"use client";

import { useMemo } from "react";

import { CardItem } from "../core/CardItem";
import { Pill } from "../ui/Pill";
import { addresses } from "@/constants/addresses";
import { useProductsQuery } from "@/hooks/products/useProducts";
import { useUsdcDecimalsQuery } from "@/hooks/web3/useUsdcDecimals";
import { useUserBalanceQuery } from "@/hooks/web3/useUserBalance";

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
  const { data = [], isPending, error } = useProductsQuery();

  const {
    data: decimals,
    isPending: isPendingDecimals,
    error: decimalsError,
  } = useUsdcDecimalsQuery();

  const {
    data: balance,
    isPending: isPendingBalance,
    error: balanceError,
  } = useUserBalanceQuery(addresses.user);

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
            <div
              key={i}
              className="w-full aspect-[3/4] bg-gray-200 animate-pulse"
            />
          ))}

        {error && (
          <div className="w-full col-span-full py-12 flex flex-col items-center justify-center text-white gap-4">
            <p>Something went wrong while loading products.</p>
            <button
              onClick={() => location.reload()}
              className="bg-white text-black px-4 py-2 rounded-md"
            >
              Refresh
            </button>
          </div>
        )}

        {filteredData.map((product) => (
          <CardItem
            key={product.id}
            image={product.imageUrl}
            title={product.name}
            price={product.priceUsdc}
            decimals={decimals}
            isDecimalsPending={isPendingDecimals}
            decimalsError={decimalsError}
            userBalancePending={isPendingBalance}
            balanceError={balanceError}
            onBuy={() => {
              console.log("Buying:", product.name);
            }}
            disabled={BigInt(balance ?? 0) < BigInt(product.priceUsdc)}
          />
        ))}
      </div>
    </div>
  );
};

export { ProductsList };
