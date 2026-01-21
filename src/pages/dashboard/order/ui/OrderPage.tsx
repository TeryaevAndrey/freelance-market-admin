import { PageBreadCrumbs } from "@/shared/ui/page-breadcrumbs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { LoggingOfActionsCard } from "@/widgets/logging-of-actions-card";
import { OrderMainInfo } from "@/widgets/order-main-info";
import { OrderPaymentsCard } from "@/widgets/order-payments-card";
import { OrderServices } from "@/widgets/order-services";
import { useParams } from "react-router-dom";

export const OrderPage = () => {
  const { id } = useParams();

  return (
    <>
      <PageBreadCrumbs
        items={[
          { label: "Admin panel" },
          { label: "Заказы", href: "/dashboard/orders" },
          {
            label: `${id}`,
            href: `/dashboard/orders/${id}`,
          },
        ]}
      />

      <OrderMainInfo />

      <Tabs defaultValue="order">
        <TabsList>
          <TabsTrigger value="order">Заказ</TabsTrigger>
          <TabsTrigger value="finance">Финансы</TabsTrigger>
          <TabsTrigger value="logs">Логи</TabsTrigger>
        </TabsList>
        <TabsContent value="order">
          <OrderServices withFooter={false} />
        </TabsContent>
        <TabsContent value="finance">
          <OrderPaymentsCard />
        </TabsContent>
        <TabsContent value="logs">
          <LoggingOfActionsCard />
        </TabsContent>
      </Tabs>
    </>
  );
};
