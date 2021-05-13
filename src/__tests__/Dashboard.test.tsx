import DashboardContainer from "../components/containers/dashboardContainer/DashboardContainer";
import { StaticRouter } from "react-router-dom";

import { render } from "@testing-library/react";

describe("Dashboard Page", () => {
  it("Should match dashboard page snapshot", () => {
    const { container } = render(
      <StaticRouter>
        <DashboardContainer />
      </StaticRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
