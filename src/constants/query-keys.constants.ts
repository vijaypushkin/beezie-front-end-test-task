import { CACHE_TAGS } from "./cache.constants";

const QUERY_KEYS = {
  USDC_DECIMALS: ["ethers", "usdc", "decimals"],
  USER_BALANCE: ["ethers", "user", "balance"],
  ALL_PRODUCTS: [CACHE_TAGS.PAGE.HOME, CACHE_TAGS.TYPE.PRODUCTS],
} as const;

export { QUERY_KEYS as QK };
