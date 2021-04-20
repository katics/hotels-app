import { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import DashboardPage from "../components/containers/dashboardContainer/DashboardContainer";
import LoginContainer from "../components/containers/loginContainer/LoginContainer";
import PageNotFound from "../components/pages/pageNotFound/PageNotFound";
import UserRegistrationPage from "../components/containers/registerContainer/RegisterContainer";
import { APP_ROUTES, COMPONENT_PAGES, ROUTE_COMPONENTS } from "./AppRoutes";
import HotelProvider, {
  hotelContext,
  useSelectorHotel,
} from "../store/HotelProvider";
import store from "../store";
import { userSeletor } from "../store/user/userSelector";
import HotelDetailsPage from "../components/containers/hotelDetailsContainer/HotelDetailsContainer";

const components = {
  blank: undefined,
  [COMPONENT_PAGES.dashboard]: DashboardPage,
  [COMPONENT_PAGES.hotelDetails]: HotelDetailsPage,
  [COMPONENT_PAGES.loginPage]: LoginContainer,
  [COMPONENT_PAGES.registerPage]: UserRegistrationPage,
  [COMPONENT_PAGES.pageNotFound]: PageNotFound,
};

const RouteCreatorProvider: FC = () => {
  return (
    <HotelProvider store={store} context={hotelContext}>
      <RouteCreator />
    </HotelProvider>
  );
};

const RouteCreator: FC = () => {
  const { isLogged } = useSelectorHotel(userSeletor);

  const routeComponent = isLogged
    ? ROUTE_COMPONENTS
    : ROUTE_COMPONENTS.filter(item => item.protected == false);
  return (
    <Switch>
      {routeComponent.map((route, routeKey) => {
        const component = components[route.component || "blank"];
        return (
          <Route
            key={`routesKey${routeKey.toString()}`}
            component={component}
            path={route.path}
            exact
          />
        );
      })}
      <Route render={() => <Redirect to={APP_ROUTES.pageNotFound} />} />
    </Switch>
  );
};
export default RouteCreatorProvider;
