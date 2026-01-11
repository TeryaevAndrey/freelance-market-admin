import { OrderStatsCards } from "@/entities/order";
import { OrderFilters } from "@/features/order-filters";
import { PageBreadCrumbs } from "@/shared/ui/page-breadcrumbs";
import { OrdersTable } from "@/widgets/orders-table";

export const OrdersPage = () => {
  return (
    <>
      <PageBreadCrumbs
        items={[
          { label: "Admin panel" },
          { label: "Заказы", href: "/dashboard/orders" },
        ]}
      />

      <OrderFilters />

      <OrderStatsCards
        data={{
          total: 1,
          sum: 1,
          success: 1,
          pending: 1,
          problems: 1,
        }}
      />

      <OrdersTable />
    </>
  );
};
