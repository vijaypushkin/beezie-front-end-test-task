import { CACHE_TAGS } from "./cache.constants";

const QUERY_KEYS = {
  USDC_DECIMALS: ["ethers", "usdc", "decimals"],
  ALL_PRODUCTS: [CACHE_TAGS.PAGE.HOME, CACHE_TAGS.TYPE.PRODUCTS],
} as const;

export { QUERY_KEYS as QK };
