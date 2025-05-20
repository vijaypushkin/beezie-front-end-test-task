import { ethers } from "ethers";

export const provider = new ethers.JsonRpcProvider(
  "https://testnet.evm.nodes.onflow.org/"
);
