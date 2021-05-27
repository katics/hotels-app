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
  FETCH_HOTEL_REVIEWS_REQUEST,
  FETCH_HOTEL_REVIEWS_ERROR,
  FETCH_HOTEL_REVIEWS_SUCCESS,
  RESET_HOTEL_STATE,
} from "./hotelActionTypes";
import { Hotels } from "../../utils/types/Hotels";
import { Hotel } from "../../utils/types/Hotel";
import { HotelReview } from "../../utils/types/HotelReview";

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
    reviews: [] as HotelReview[],
  },
  favHotels: [],
  isLoading: false,
  isFavouriteFetched: false,
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
        isFavouriteFetched: true,
      };

    case FETCH_FAV_HOTELS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case RESET_HOTEL_STATE:
      return initialState;
    case ADD_REMOVE_FAV_HOTEL:
      return {
        ...state,
        listOfHotels: hotelsList(state.listOfHotels, action.payload),
        favHotels: favHotels(
          state.favHotels,
          state.listOfHotels,
          action.payload,
          state.isFavouriteFetched
        ),
      };
    case FETCH_HOTEL_REVIEWS_REQUEST:
      return {
        ...state,
      };
    case FETCH_HOTEL_REVIEWS_SUCCESS:
      return {
        ...state,
        hotelDetails: { ...state.hotelDetails, reviews: action.payload },
      };
    case FETCH_HOTEL_REVIEWS_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
const hotelsList = (hotelsList: Hotel[], payload: any): any => {
  hotelsList.map(hotel => {
    if (hotel.id === payload.hotel_id) {
      if (payload.is_favorite) {
        hotel.user.push(payload.userID);
      } else {
        hotel.user = hotel.user.filter(user => user !== payload.userID);
      }
    }
    return hotel;
  });
  return hotelsList;
};

const favHotels = (
  favHotels: Hotel[],
  hotels: Hotel[],
  payload: any,
  isFavFetched: boolean
): any => {
  const favHotel = favHotels.find(fHotel => fHotel.id === payload.hotel_id);
  if (favHotel) {
    if (payload.is_favorite) {
      favHotel.user.push(payload.userID);
    } else {
      favHotels = favHotels.filter(e => e.id !== favHotel.id);
    }
  } else if (isFavFetched) {
    const hotel = hotels.find(h => h.id === payload.hotel_id);
    if (hotel) {
      favHotels.push(hotel);
    }
  }
  return favHotels;
};
export default hotel;
