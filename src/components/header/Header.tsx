import { FC } from "react";
import { NavLink } from "react-router-dom";
import { AppRoutes } from "../../utils/AppRoutes";

const Header: FC = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-secondary">
      <ul className="navbar-nav">
        <li className="">
          <NavLink className="nav-link text-light" to={AppRoutes.home}>
            Home
          </NavLink>
        </li>
        <li className="">
          <NavLink className="nav-link text-light" to={AppRoutes.hotels}>
            Hotels
          </NavLink>
        </li>
        <li className="">
          <NavLink className="nav-link text-light" to={AppRoutes.login}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
