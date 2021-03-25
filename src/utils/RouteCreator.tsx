import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import HotelsPage from "../components/pages/hotelsPage/Hotels";
import LoginPage from "../components/pages/loginPage/LoginPage";
import RegisterPage from "../components/pages/registerPage/RegisterPage";
import WelcomePage from "../components/pages/welcomePage/WelcomePage";

const RouteCreator: FC = () => (
  <Switch>
    <Route exact path="/" component={WelcomePage} />
    <Route exact path="/hotels" component={HotelsPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/Register" component={RegisterPage} />
  </Switch>
);
export default RouteCreator;
