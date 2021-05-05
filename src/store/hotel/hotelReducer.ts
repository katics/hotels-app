import {
  ADD_HOTEL,
  ADD_REMOVE_FAV_HOTEL,
  FETCH_FAV_HOTELS_ERROR,
  FETCH_FAV_HOTELS_REQUEST,
  FETCH_FAV_HOTELS_SUCCESS,
  FETCH_HOTELS_ERROR,
  FETCH_HOTELS_REQUEST,
  FETCH_HOTELS_SUCCESS,
  FETCH_HOTEL_DETAILS,
  FETCH_HOTEL_DETAILS_SUCCESS,
} from "./hotelActionTypes";
import { Hotels } from "../../utils/types/Hotels";
import { Hotel } from "../../utils/types/Hotel";

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
  favHotels: [],
  isLoading: false,
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
        isLoading: true,
      };
    case FETCH_HOTELS_SUCCESS:
      return {
        ...state,
        listOfHotels: action.payload,
        isLoading: false,
      };
    case FETCH_HOTELS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_HOTEL_DETAILS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_HOTEL_DETAILS_SUCCESS:
      return {
        ...state,
        hotelDetails: action.payload,
        isLoading: false,
      };

    case FETCH_FAV_HOTELS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_FAV_HOTELS_SUCCESS:
      return {
        ...state,
        favHotels: action.payload,
        isLoading: false,
      };

    case FETCH_FAV_HOTELS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_REMOVE_FAV_HOTEL:
      return {
        ...state,
        listOfHotels: state.listOfHotels.map(hotel => {
          if (hotel.id === action.payload.hotel_id) {
            if (action.payload.is_favorite) {
              hotel.user.push(action.payload.userID);
            } else {
              hotel.user = hotel.user.filter(
                user => user !== action.payload.userID
              );
            }
          }
          return hotel;
        }),
        favHotels: FavHotels(
          state.favHotels,
          state.listOfHotels,
          action.payload
        ),
      };
    default:
      return state;
  }
};

const FavHotels = (favHotels: Hotel[], hotels: Hotel[], payload: any): any => {
  const favHotel = favHotels.find(fHotel => fHotel.id === payload.hotel_id);
  if (favHotel) {
    if (payload.is_favorite) {
      favHotel.user.push(payload.userID);
    } else {
      favHotels = favHotels.filter(e => e.id !== favHotel.id);
    }
  } else {
    const hotel = hotels.find(h => h.id === payload.hotel_id);
    if (hotel) {
      favHotels.push(hotel);
    }
  }
  return favHotels;
};
export default hotel;
