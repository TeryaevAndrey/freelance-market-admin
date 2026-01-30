import { userQueries, UserStatsCards } from "@/entities/user";
import type { USER_ROLES, USER_STATUSES } from "@/entities/user";
import {
  UserFilters,
  useUserFiltersSearchParams,
} from "@/features/user-filters";
import { DEFAULT_PAGE_SIZE } from "@/shared/constants/pagination.constants";
import { PageBreadCrumbs } from "@/shared/ui/page-breadcrumbs";
import { UsersTable } from "@/widgets/users-table";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const UsersPage = () => {
  const [searchParams] = useSearchParams();
  const [userFilters] = useUserFiltersSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || DEFAULT_PAGE_SIZE;

  const { data: users, isLoading } = useQuery(
    userQueries.list({
      ...userFilters,
      page: currentPage,
      page_size: pageSize,
      role:
        userFilters.role === "all"
          ? undefined
          : (userFilters.role as unknown as USER_ROLES),
      status:
        userFilters.status === "all"
          ? undefined
          : (userFilters.status as unknown as USER_STATUSES),
      city: userFilters.city === "all" ? undefined : userFilters.city,
    }),
  );

  return (
    <>
      <PageBreadCrumbs
        items={[
          { label: "Admin panel" },
          { label: "Пользователи", href: "/dashboard/users" },
        ]}
      />
      <UserStatsCards
        data={{
          total: 10,
          active: 10,
          pending: 2,
          verification: 1,
          blocked: 5,
        }}
      />
      <UserFilters />
      <UsersTable
        data={users?.results}
        isLoading={isLoading}
        totalCount={users?.count || 0}
        pageSize={DEFAULT_PAGE_SIZE}
      />
    </>
  );
};
