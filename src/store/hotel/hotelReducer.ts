import {
  ADD_HOTEL,
  FETCH_HOTELS_REQUEST,
  FETCH_HOTELS_SUCCESS,
  FETCH_HOTEL_DETAILS_SUCCESS,
} from "./hotelActionTypes";
import { Hotels } from "../../utils/types/Hotels";

const initialState: Hotels = {
  listOfHotels: [],
  hotelDetails: {
    id: 0,
    name: "",
    city: "",
    country: "",
    image: "",
    stars: 0,
    date: new Date(),
    description: "",
    price: 0,
    likes: 0,
    dislikes: 0,
    user: [],
    location: "",
  },
};

const hotel = (state = initialState, action: any = {}): Hotels => {
  switch (action.type) {
    case ADD_HOTEL:
      return {
        ...state,
      };
    case FETCH_HOTELS_REQUEST:
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
