import { queryOptions } from "@tanstack/react-query";
import { regionsApi } from "../api/regions.api";

export const regionsQueries = {
  all: () => ["regions"] as const,

  listsKeys: () => [...regionsQueries.all(), "list"] as const,
  list: () =>
    queryOptions({
      queryKey: [...regionsQueries.listsKeys()] as const,
      queryFn: () => regionsApi.getRegions(),
    }),
};
