import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import HotelsPage from "../components/pages/hotelsPage/Hotels";
import WelcomePage from "../components/pages/WelcomePage/WelcomePage";

const RouteCreator: FC = () => (
  <Switch>
    <Route exact path="/" component={WelcomePage} />
    <Route exact path="/hotels" component={HotelsPage} />
  </Switch>
);
export default RouteCreator;
