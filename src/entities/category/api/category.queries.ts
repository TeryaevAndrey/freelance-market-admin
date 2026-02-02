import { queryOptions } from "@tanstack/react-query";
import type { GetCategoriesParams } from "../model/types";
import { categoryApi } from "./category.api";

export const categoryQueries = {
  allKeys: () => ["categories"] as const,
  listKeys: () => [...categoryQueries.allKeys(), "list"] as const,

  list: (params: GetCategoriesParams) =>
    queryOptions({
      queryKey: [...categoryQueries.listKeys(), params] as const,
      queryFn: () => categoryApi.getCategoriesList(params)
    }),
};
