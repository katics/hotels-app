import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

import "./Header.scss";
import store from "../../store";
import HotelProvider, {
  hotelContext,
  useDispatchHotel,
  useSelectorHotel,
} from "../../store/HotelProvider";
import { logoutUser } from "../../store/user/userActions";
import { userSeletor } from "../../store/user/userSelector";
import { APP_ROUTES } from "../../utils/AppRoutes";
import { resetHotelState } from "../../store/hotel/hotelActions";

const HeaderContainer: FC = () => (
  <HotelProvider store={store} context={hotelContext}>
    <Header />
  </HotelProvider>
);

const Header: FC = () => {
  const history = useHistory();
  const userDispatch = useDispatchHotel();
  const { isLogged } = useSelectorHotel(userSeletor);

  const logout = () => {
    userDispatch(logoutUser());
    userDispatch(resetHotelState());
    history.push(APP_ROUTES.loginPage);
  };
  const userLoggedInNaigation = (
    <ul className="navbar-nav">
      <li>
        <NavLink className="nav-link text-light" to={APP_ROUTES.dashboard}>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link text-light" to={APP_ROUTES.favHotelsPage}>
          Favourites
        </NavLink>
      </li>
      <li>
        <div className="nav-link text-light logout-link" onClick={logout}>
          Logout
        </div>
      </li>
    </ul>
  );

  const userNotLoggiedIn = (
    <ul className="navbar-nav">
      <li>
        <NavLink className="nav-link text-light" to={APP_ROUTES.loginPage}>
          Login
        </NavLink>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-sm navigation">
      {isLogged ? userLoggedInNaigation : userNotLoggiedIn}
    </nav>
  );
};

export default HeaderContainer;
