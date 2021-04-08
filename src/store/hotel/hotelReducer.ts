import {
  ADD_HOTEL,
  FETCH_HOTELS,
  FETCH_HOTELS_SUCCESS,
  FETCH_HOTEL_DETAILS_SUCCESS,
} from "./hotelActionTypes";
import { Hotels } from "../../utils/types/Hotels";

const initialState: Hotels = {
  listOfHotels: [],
  hotelDetails: {},
};

const hotel = (state = initialState, action: any = {}): Hotels => {
  switch (action.type) {
    case ADD_HOTEL:
      return {
        ...state,
      };
    case FETCH_HOTELS:
      return {
        ...state,
      };
    case FETCH_HOTELS_SUCCESS:
      return {
        ...state,
        listOfHotels: action.payload,
      };
    case FETCH_HOTEL_DETAILS_SUCCESS:
      return {
        ...state,
        hotelDetails: action.payload,
      };
    default:
      return state;
  }
};

export default hotel;
