import { ReactNode, FC } from "react";

import Header from "../header/Header";
import "./Layout.scss";

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = ({ children = null }) => (
  <div className="main-wrapper col-md-12 bg-white">
    <Header />
    <main className="child-wrapper container-fluid d-flex justify-content-center">
      {children}
    </main>
  </div>
);

export default Layout;
