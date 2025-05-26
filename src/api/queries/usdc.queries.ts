import { queryOptions } from "@tanstack/react-query";

import { QK } from "@/constants/query-keys.constants";
import { usdcContract } from "@/services/web3/contracts";

const getUsdcDecimals = async (): Promise<bigint> => {
  const decimals = await usdcContract.decimals().catch((err) => {
    console.log(err);
    return 6n;
  });

  return decimals;
};

const getUsdcDecimalsOptions = queryOptions({
  queryKey: QK.USDC_DECIMALS,
  queryFn: getUsdcDecimals,
});

const getUserBalance = async (address: string) => {
  const balance = await usdcContract.balanceOf(address).catch((err) => {
    console.log(err);
    return 0n;
  });

  return balance;
};

const getUserBalanceOptions = (address: string) =>
  queryOptions({
    queryKey: [...QK.USER_BALANCE, { address }],
    queryFn: () => getUserBalance(address),
  });

export { getUsdcDecimalsOptions, getUserBalanceOptions };
