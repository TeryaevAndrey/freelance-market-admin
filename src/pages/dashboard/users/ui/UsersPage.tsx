import { UserStatsCards } from "@/entities/user";
import { UserFilters } from "@/features/user-filters";
import { PageBreadCrumbs } from "@/shared/ui/page-breadcrumbs";
import { UsersTable } from "@/widgets/users-table";

export const UsersPage = () => {
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
      <UsersTable />
    </>
  );
};
