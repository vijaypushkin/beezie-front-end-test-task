import { useQuery } from "@tanstack/react-query";
import { productsQueryOptions } from "@/api/queries/products.queries";

const useProductsQuery = () => useQuery(productsQueryOptions);

export { useProductsQuery };
