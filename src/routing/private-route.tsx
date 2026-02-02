import { Navigate, Outlet } from "react-router-dom";
import { DashboardLayout } from "@/layout/DashboardLayout";

export const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  const isAuth = Boolean(token);

  if (!isAuth) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};
