import { queryOptions } from "@tanstack/react-query";
import type { GetUsersParams } from "../model/types";
import { userApi } from "./user.api";

export const userQueries = {
  all: () => ["users"] as const,
  listsKeys: () => [...userQueries.all(), "list"] as const,

  list: (params: GetUsersParams) =>
    queryOptions({
      queryKey: [...userQueries.listsKeys(), params] as const,
      queryFn: () => userApi.getUsersList(params),
    }),

  detailKeys: () => [...userQueries.all(), "detail"] as const,
  detail: (id: number) =>
    queryOptions({
      queryKey: [...userQueries.detailKeys(), id] as const,
      queryFn: () => userApi.getUserById(id),
      staleTime: 5 * 60 * 1000,
    }),
};
