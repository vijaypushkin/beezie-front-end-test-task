import { useQuery } from "@tanstack/react-query";
import { getUserBalanceOptions } from "@/api/queries/usdc.queries";

const useUserBalanceQuery = (address: string) =>
  useQuery(getUserBalanceOptions(address));

export { useUserBalanceQuery };
