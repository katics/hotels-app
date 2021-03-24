import { ADD_HOTEL } from "./hotelActionTypes";
import { Hotels } from "../../utils/types/Hotels";

const initialState: Hotels = {
  listOfHotels: [{ name: "Hotel Park" }],
};

const hotel = (state = initialState, action: any = {}): Hotels => {
  switch (action.type) {
    case ADD_HOTEL:
      return {
        ...state,
        listOfHotels: [...state.listOfHotels, { name: action.hotel.name }],
      };
    default:
      return state;
  }
};

export default hotel;
