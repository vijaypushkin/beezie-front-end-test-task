import { getUsdcDecimalsOptions } from "@/api/queries/usdc.queries";
import { useQuery } from "@tanstack/react-query";

const useUsdcDecimalsQuery = () => useQuery(getUsdcDecimalsOptions);

export { useUsdcDecimalsQuery };
