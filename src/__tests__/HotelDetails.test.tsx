import HotelDetailsContainer from "../components/containers/hotelDetailsContainer/HotelDetailsContainer";
import { StaticRouter } from "react-router-dom";

import { render } from "@testing-library/react";

describe("Hotel Details Page", () => {
  it("Should match hotel details page snapshot", () => {
    const { container } = render(
      <StaticRouter>
        <HotelDetailsContainer />
      </StaticRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
