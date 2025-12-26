import { DashboardLayout } from "@/layout/DashboardLayout";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const isAuth = true;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <DashboardLayout>
            <Component {...props} />
          </DashboardLayout>
        ) : (
          <Redirect to="/auth/sign-in" />
        )
      }
    />
  );
};