import { useMemo } from "react";
import { formatUnits } from "ethers";

import { addresses } from "@/constants/addresses";
import { useUsdcDecimalsQuery } from "@/hooks/web3/useUsdcDecimals";
import { useUserBalanceQuery } from "@/hooks/web3/useUserBalance";

const UserBalance: React.FC = () => {
  const {
    data: balance,
    isPending: isPendingBalance,
    error: balanceError,
  } = useUserBalanceQuery(addresses.user);

  const {
    data: decimals,
    isPending: isPendingDecimals,
    error: decimalsError,
  } = useUsdcDecimalsQuery();

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
        <span>
          Balance:{" "}
          <span className="font-bold text-2xl font-(family-name:--font-montserrat)">
            ${processedUsdcBalance}
          </span>
        </span>
      ) : null}
    </div>
  );
};

export { UserBalance };
