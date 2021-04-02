import { FC } from "react";
import { NavLink } from "react-router-dom";
import { AppRoutes } from "../../../utils/AppRoutes";

const PageNotFound: FC = () => (
  <div>
    Page Not Found
    <NavLink className="nav-link text-primary" to={AppRoutes.home}>
      Go Home
    </NavLink>
  </div>
);

export default PageNotFound;
