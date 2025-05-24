import { addresses } from "@/constants/addresses";
import { USDC__factory } from "@/typechain-types";
import { provider } from "./provider";

const usdcContract = USDC__factory.connect(addresses.usdc, provider);

export { usdcContract };
