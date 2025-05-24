import { productsQueryOptions } from "@/api/queries/products.queries";
import { getUsdcDecimalsOptions } from "@/api/queries/usdc.queries";

import { HomePage } from "@/components/home-page/HomePage";

import { getQueryClient } from "@/configs/react-query.config";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.ensureQueryData(productsQueryOptions);
  queryClient.prefetchQuery(getUsdcDecimalsOptions); // ? secondary query, so need to wait

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomePage />
    </HydrationBoundary>
  );
}
