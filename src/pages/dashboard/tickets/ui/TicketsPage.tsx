import { TicketsFilters } from "@/features/tickets-filters";
import { PageBreadCrumbs } from "@/shared/ui/page-breadcrumbs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { TicketsTable } from "@/widgets/tickets-table";
import { Link } from "react-router-dom";

export const TicketsPage = () => {
  return (
    <>
      <PageBreadCrumbs
        items={[
          { label: "Admin panel" },
          { label: "Модерация", href: "/dashboard/moderation" },
        ]}
      />

      <Tabs defaultValue="tickets">
        <TabsList>
          <TabsTrigger value="content" asChild>
            <Link to="/dashboard/moderation">Модерация контента</Link>
          </TabsTrigger>
          <TabsTrigger value="tickets" asChild>
            <Link to="/dashboard/tickets">Обращения (тикеты)</Link>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tickets">
          <div className="flex flex-col gap-6 mt-4">
            <TicketsFilters />
            <TicketsTable />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};
