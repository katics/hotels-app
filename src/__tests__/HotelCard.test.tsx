import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom";

import HotelCard from "../components/hotelCard/HotelCard";

import { singleHotel } from "../utils/mocks/Hotel.mock";

describe("Hootel Card", () => {
  it("Should match snapshot", () => {
    const { container } = render(
      <StaticRouter>
        <HotelCard
          userId={1}
          hotel={singleHotel}
          addRemoveFavHotel={() => {
            return true;
          }}
        />
      </StaticRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should show hotel image", async () => {
    const hotelCard = render(
      <StaticRouter>
        <HotelCard
          userId={1}
          hotel={singleHotel}
          addRemoveFavHotel={() => {
            return true;
          }}
        />
      </StaticRouter>
    );
    const hotelCardImage: any = await hotelCard.findByTestId(
      "HotelCardImgTestId"
    );
    expect(hotelCardImage.src).toContain(singleHotel.image);
  });
  it("Should display hotel city", async () => {
    const hotelCard = render(
      <StaticRouter>
        <HotelCard
          userId={1}
          hotel={singleHotel}
          addRemoveFavHotel={() => {
            return true;
          }}
        />
      </StaticRouter>
    );
    const hotelCity = await hotelCard.findByText(singleHotel.city);
    expect(hotelCity.innerHTML).toContain(singleHotel.city);
  });
});
