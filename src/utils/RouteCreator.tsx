import { FC, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router";

import HotelsPage from "../components/pages/hotelsPage/Hotels";
import LoginPage from "../components/pages/loginPage/LoginPage";
import PageNotFound from "../components/pages/pageNotFound/PageNotFound";
import UserRegistrationPage from "../components/pages/registerPage/RegisterPage";
import store from "../store";
import HotelProvider, {
  hotelContext,
  useSelectorHotel,
} from "../store/HotelProvider";
import { userSeletor } from "../store/user/userSelector";
import { AppRoutes } from "./AppRoutes";
import WelcomePage from "../components/pages/welcomePage/WelcomePage";

const RouteCreatorWrapper: FC = () => (
  <HotelProvider store={store} context={hotelContext}>
    <RouteCreator />
  </HotelProvider>
);

const RouteCreator: FC = () => {
  const history = useHistory();

  const { isLogged, hasRegisred } = useSelectorHotel(userSeletor);

  useEffect(() => {
    if (isLogged) {
      history.push(AppRoutes.hotels);
    } else {
      history.push(AppRoutes.login);
    }
    if (hasRegisred) {
      history.push(AppRoutes.login);
    }
  }, [isLogged, hasRegisred]);

  const loggedUserRoutes = (
    <Switch>
      <Route exact path={AppRoutes.home} component={WelcomePage} />
      <Route exact path={AppRoutes.hotels} component={HotelsPage} />
      <Route component={PageNotFound} />
    </Switch>
  );

  const notLoggedUserRoutes = (
    <Switch>
      <Route exact path={AppRoutes.login} component={LoginPage} />
      <Route exact path={AppRoutes.register} component={UserRegistrationPage} />
      <Route component={PageNotFound} />
    </Switch>
  );

  return (
    // <>{isLogged ? loggedUserRoutes : notLoggedUserRoutes}</>

    <Switch>
      <Route exact path={AppRoutes.home} component={WelcomePage} />
      <Route exact path={AppRoutes.hotels} component={HotelsPage} />
      <Route exact path={AppRoutes.login} component={LoginPage} />
      <Route exact path={AppRoutes.register} component={UserRegistrationPage} />
      <Route exact path={AppRoutes.pageNotFound} component={PageNotFound} />
      <Route render={() => <Redirect to={AppRoutes.pageNotFound} />} />
    </Switch>
  );
};
export default RouteCreatorWrapper;
