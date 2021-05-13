import LoginContainer from "../components/containers/loginContainer/LoginContainer";
import { StaticRouter } from "react-router-dom";

import { render } from "@testing-library/react";

describe("Login Page", () => {
  it("Should match login page snapshot", () => {
    const { container } = render(
      <StaticRouter>
        <LoginContainer />
      </StaticRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
