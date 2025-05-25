import {
  getUsdcDecimalsOptions,
  getUserBalanceOptions,
} from "@/api/queries/usdc.queries";
import { addresses } from "@/constants/addresses";
import { useQuery } from "@tanstack/react-query";
import { formatUnits } from "ethers";
import { useMemo } from "react";

const UserBalance: React.FC = () => {
  const {
    data: balance,
    isPending: isPendingBalance,
    error: balanceError,
  } = useQuery(getUserBalanceOptions(addresses.user));

  const {
    data: decimals,
    isPending: isPendingDecimals,
    error: decimalsError,
  } = useQuery(getUsdcDecimalsOptions);

  const processedUsdcBalance = useMemo(() => {
    if (balance !== undefined && decimals !== undefined) {
      return formatUnits(balance, decimals);
    }
    return null;
  }, [balance, decimals]);

  return (
    <div className="text-white text-sm font-medium">
      {isPendingBalance || isPendingDecimals ? (
        <div className="h-4 w-24 bg-gray-400 animate-pulse rounded" />
      ) : balanceError || decimalsError ? (
        <span className="text-red-400">Balance error</span>
      ) : processedUsdcBalance !== null ? (
        <span>Balance: ${processedUsdcBalance}</span>
      ) : null}
    </div>
  );
};

export { UserBalance };
