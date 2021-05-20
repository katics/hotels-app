import { StaticRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import HotelDetailsContainer from "../components/containers/hotelDetailsContainer/HotelDetailsContainer";
import HotelDetailsLayout from "../components/layout/hotelDetailsLayout/HotelDetailsLayout";
import { singleHotel } from "../utils/mocks/Hotel.mock";

describe("Hotel Details Page", () => {
  it("Should match hotel details page snapshot", () => {
    const { container } = render(
      <StaticRouter>
        <HotelDetailsContainer />
      </StaticRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should display hotel details", async () => {
    render(
      <StaticRouter>
        <HotelDetailsLayout
          {...singleHotel}
          goBack={() => {
            return true;
          }}
        />
      </StaticRouter>
    );
    expect(screen.queryByText(singleHotel.country)).toBeInTheDocument();
    expect(screen.queryByText(singleHotel.city)).toBeInTheDocument();
    expect(screen.queryByText(singleHotel.stars)).toBeInTheDocument();
    expect(screen.queryByText(singleHotel.name)).toBeInTheDocument();
  });
});
