import RegisterContainer from "../components/containers/registerContainer/RegisterContainer";
import { StaticRouter } from "react-router-dom";

import { render } from "@testing-library/react";

describe("Register Page", () => {
  it("Should match register page snapshot", () => {
    const { container } = render(
      <StaticRouter>
        <RegisterContainer />
      </StaticRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
