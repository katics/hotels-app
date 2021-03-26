import { FC } from "react";
import { Route, Switch } from "react-router-dom";
import HotelsPage from "../components/pages/hotelsPage/Hotels";
import LoginPage from "../components/pages/loginPage/LoginPage";
import UserRegistrationPage from "../components/pages/registerPage/RegisterPage";
import WelcomePage from "../components/pages/welcomePage/WelcomePage";
import { AppRoutes } from "./AppRoutes";

const RouteCreator: FC = () => (
  <Switch>
    <Route exact path={AppRoutes.home} component={WelcomePage} />
    <Route exact path={AppRoutes.hotels} component={HotelsPage} />
    <Route exact path={AppRoutes.login} component={LoginPage} />
    <Route exact path={AppRoutes.register} component={UserRegistrationPage} />
  </Switch>
);
export default RouteCreator;
