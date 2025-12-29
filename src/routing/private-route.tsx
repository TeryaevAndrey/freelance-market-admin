import { Navigate, Outlet } from "react-router-dom";
import { DashboardLayout } from "@/layout/DashboardLayout";

export const PrivateRoute = () => {
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};
