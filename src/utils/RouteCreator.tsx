import { FC } from "react";
import { Route, Switch } from "react-router-dom";

import HotelsPage from "../components/pages/hotelsPage/Hotels";
import LoginPage from "../components/pages/loginPage/LoginPage";
import PageNotFound from "../components/pages/pageNotFound/PageNotFound";
import UserRegistrationPage from "../components/pages/registerPage/RegisterPage";
import { COMPONENT_PAGES, ROUTE_COMPONENTS } from "./AppRoutes";
import WelcomePage from "../components/pages/welcomePage/WelcomePage";

const components = {
  blank: PageNotFound,
  [COMPONENT_PAGES.welcomePage]: WelcomePage,
  [COMPONENT_PAGES.hotelsPage]: HotelsPage,
  [COMPONENT_PAGES.loginPage]: LoginPage,
  [COMPONENT_PAGES.registerPage]: UserRegistrationPage,
};
const RouteCreator: FC = () => {
  return (
    <Switch>
      {ROUTE_COMPONENTS.map((route, routeKey) => {
        const componentRoute = components[route.component || "blank"];
        return (
          <Route
            key={`routesKey${routeKey.toString()}`}
            component={componentRoute}
            path={route.path}
            exact
          />
        );
      })}
    </Switch>
  );
};
export default RouteCreator;
