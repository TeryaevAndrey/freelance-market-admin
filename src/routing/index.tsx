import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { SignInPage } from "@/pages/auth/sign-in";
import { UsersPage } from "@/pages/dashboard/users";
import { PrivateRoute } from "./private-route";
import { OrdersPage } from "@/pages/dashboard/orders";
import { ModerationPage } from "@/pages/dashboard/moderation";
import { TicketsPage } from "@/pages/dashboard/tickets";

export const Routing = () => {
  return (
    <Routes>
      {/* Публичные роуты */}
      <Route path="/auth/sign-in" element={<SignInPage />} />
      
      {/* Обычные роуты без специального лейаута */}
      <Route path="/" element={<HomePage />} />

      {/* Группа защищенных роутов */}
      {/* Все, что внутри, будет обернуто в PrivateRoute (и DashboardLayout) */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/dashboard/users" element={<UsersPage />} />
        <Route path="/dashboard/orders" element={<OrdersPage />} />
        <Route path="/dashboard/moderation" element={<ModerationPage />} />
        <Route path="/dashboard/tickets" element={<TicketsPage />} />
      </Route>

      {/* Редирект для всех несуществующих страниц (вместо Redirect) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};