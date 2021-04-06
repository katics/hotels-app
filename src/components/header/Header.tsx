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

const HeaderContainer: FC = () => (
  <HotelProvider store={store} context={hotelContext}>
    <Header />
  </HotelProvider>
);

const Header: FC = () => {
  const history = useHistory();
  const userDispatch = useDispatchHotel();
  const { isLogged, currentUser } = useSelectorHotel(userSeletor);

  const logout = () => {
    userDispatch(logoutUser());
    history.push(APP_ROUTES.welcomePage);
  };
  const userLoggedInNaigation = (
    <ul className="navbar-nav">
      <li>
        <NavLink className="nav-link text-light" to={APP_ROUTES.welcomePage}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link text-light" to={APP_ROUTES.hotelsPage}>
          Hotels
        </NavLink>
      </li>
      <li>
        <div className="nav-link text-light logout-link" onClick={logout}>
          Logout {currentUser.username}
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
    <nav className="navbar navbar-expand-sm bg-secondary">
      {isLogged ? userLoggedInNaigation : userNotLoggiedIn}
    </nav>
  );
};

export default HeaderContainer;
