import { ADD_HOTEL } from "./hotelActionTypes";
import { HotelStore } from "../HotelProider";

const initialState: HotelStore = {
  hotels: { listOfHotels: [{ name: "Hotel Park" }] },
};

const hotelReducer = (
  state: HotelStore = initialState,
  action: any = {}
): HotelStore => {
  switch (action.type) {
    case ADD_HOTEL:
      return {
        hotels: {
          listOfHotels: [
            ...state.hotels.listOfHotels,
            { name: action.hotel.name },
          ],
        },
      };
    default:
      return state;
  }
};

export default hotelReducer;
