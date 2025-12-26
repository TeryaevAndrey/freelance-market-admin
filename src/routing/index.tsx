import { HomePage } from "@/pages/home";
import { Redirect, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./private-route";
import { SignInPage } from "@/pages/auth/sign-in";
import { UsersPage } from "@/pages/dashboard/users";

export const Routing = () => {
  return (
    <Switch>
      {/* Публичные роуты */}
      <Route exact path="/auth/sign-in" component={SignInPage} />

      {/* Роуты внутри основного layout */}
      <Route exact path="/" component={HomePage} />

      {/* Защищенные роуты */}
      <PrivateRoute exact path="/dashboard" component={HomePage} />
      <PrivateRoute exact path="/dashboard/users" component={UsersPage} />

      <Redirect to="/" />
    </Switch>
  );
};
