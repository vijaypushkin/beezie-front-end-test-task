import { addresses } from "@/constants/addresses";
import { USDC__factory } from "@/typechain-types";
import { JsonRpcProvider } from "ethers";

const provider = new JsonRpcProvider(
  `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
);

const usdcContract = USDC__factory.connect(addresses.usdc, provider);

export { usdcContract };
