import { UserCard } from "@/entities/user";
import { EditUserModal } from "@/features/user-edit";
import { PageBreadCrumbs } from "@/shared/ui/page-breadcrumbs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { ComplaintsAndModerationCard } from "@/widgets/complaints-and-moderation-card";
import { LoggingOfActionsCard } from "@/widgets/logging-of-actions-card";
import { NoteFeedCard } from "@/widgets/note-feed-card";
import { TemplatesCard } from "@/widgets/templates-card";
import { UserContent } from "@/widgets/user-content";
import { UserFinance } from "@/widgets/user-finance";
import { UserOrdersAndTransactions } from "@/widgets/user-orders-and-transactions";
import { UserOverview } from "@/widgets/user-overview";
import { UserProfileAndAccess } from "@/widgets/user-profile-and-access";
import { UserTicketsCard } from "@/widgets/user-tickets-card";
import { useParams } from "react-router-dom";

export const UserPage = () => {
  const { id } = useParams();

  return (
    <>
      <PageBreadCrumbs
        items={[
          { label: "Admin panel" },
          { label: "Пользователи", href: "/dashboard/users" },
          {
            label: `Пользователь ${id}`,
            href: `/dashboard/users/${id}`,
          },
        ]}
      />

      <UserCard />

      <Tabs defaultValue="overview">
        <div className="flex justify-between items-center gap-3 flex-wrap">
          <TabsList>
          <TabsTrigger value="overview">Обзор</TabsTrigger>
          <TabsTrigger value="profile-and-access">Профиль и доступ</TabsTrigger>
          <TabsTrigger value="content">Контент</TabsTrigger>
          <TabsTrigger value="orders-and-transactions">
            Заказы и сделки
          </TabsTrigger>
          <TabsTrigger value="finance">Финансы</TabsTrigger>
          <TabsTrigger value="tickets">Обращения</TabsTrigger>
          <TabsTrigger value="logs">Логирование</TabsTrigger>
          <TabsTrigger value="notes">Заметки</TabsTrigger>
        </TabsList>

        <EditUserModal />
        </div>
        <TabsContent value="overview">
          <UserOverview />
        </TabsContent>
        <TabsContent value="profile-and-access">
          <UserProfileAndAccess />
        </TabsContent>
        <TabsContent value="content">
          <UserContent />
        </TabsContent>
        <TabsContent value="orders-and-transactions">
          <UserOrdersAndTransactions />
        </TabsContent>
        <TabsContent value="finance">
          <UserFinance />
        </TabsContent>
        <TabsContent value="tickets">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
            <UserTicketsCard className="lg:col-span-2" />
            <ComplaintsAndModerationCard />
          </div>
        </TabsContent>
        <TabsContent value="logs">
          <div className="grid grid-cols-1 items-start gap-4">
            <LoggingOfActionsCard />
          </div>
        </TabsContent>
        <TabsContent value="notes">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-4">
            <NoteFeedCard className="lg:col-span-2" />
            <TemplatesCard />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};
