import { FC } from "react";
import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../../utils/AppRoutes";

const PageNotFound: FC = () => (
  <div>
    Page Not Found
    <NavLink className="nav-link text-primary" to={APP_ROUTES.welcomePage}>
      Go Home
    </NavLink>
  </div>
);

export default PageNotFound;
