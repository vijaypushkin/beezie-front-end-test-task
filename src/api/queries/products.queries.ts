import { CACHE_TAGS } from "@/constants/cache.constants";
import { QK } from "@/constants/query-keys.constants";
import { Product } from "@/types/api/products.type";
import { queryOptions } from "@tanstack/react-query";

export const productsQueryOptions = queryOptions({
  queryKey: QK.ALL_PRODUCTS,
  queryFn: async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/products`,
      {
        next: {
          revalidate: 60,
          tags: [CACHE_TAGS.TYPE.PRODUCTS, CACHE_TAGS.PAGE.HOME],
        },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch");
    return res.json() as Promise<Product[]>;
  },
});
