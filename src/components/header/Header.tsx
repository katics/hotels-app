import { FC } from "react";
import { NavLink } from "react-router-dom";

const Header: FC = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-secondary">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/hotels">
            Hotels
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
