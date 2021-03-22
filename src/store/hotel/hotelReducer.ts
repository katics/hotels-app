import { ADD_HOTEL } from "./hotelActionTypes";
import { Hotels } from "../../utils/types/Hotels";
import { HotelState } from "../HotelProider";

const initialState: HotelState = {
  hotels: { listOfHotels: ["Hotel Park"] },
  // hotels: { listOfHotels: [{ name: "Hotel Park" }] },
}; //{ listOfHotels: [{ name: "Hotel Park" }] };

const hotelReducer = (state = initialState, action: any = {}): any => {
  switch (action.type) {
    case ADD_HOTEL:
      return { ...state, ...action.hotel };
    default:
      return state;
  }
};

export default hotelReducer;
