import { UserCard } from "@/entities/user";
import { PageBreadCrumbs } from "@/shared/ui/page-breadcrumbs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { UserContent } from "@/widgets/user-content";
import { UserOverview } from "@/widgets/user-overview";
import { UserProfileAndAccess } from "@/widgets/user-profile-and-access";
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
        <TabsContent value="overview">
          <UserOverview />
        </TabsContent>
        <TabsContent value="profile-and-access">
          <UserProfileAndAccess />
        </TabsContent>
        <TabsContent value="content">
          <UserContent />
        </TabsContent>
      </Tabs>
    </>
  );
};
