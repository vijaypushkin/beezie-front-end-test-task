import { queryOptions } from "@tanstack/react-query";
import { JsonRpcProvider } from "ethers";

import { addresses } from "@/constants/addresses";
import { QK } from "@/constants/query-keys.constants";
import { USDC__factory } from "@/typechain-types";
import { usdcContract } from "@/services/web3/contracts";

const provider = new JsonRpcProvider(
  `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
);

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

export { getUsdcDecimalsOptions };
