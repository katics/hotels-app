import { AnyAction } from "redux";
import { Hotel } from "../../utils/types/Hotel";
import { Hotels } from "../../utils/types/Hotels";
import {
  ADD_HOTEL,
  FETCH_HOTELS,
  FETCH_HOTELS_SUCCESS,
} from "./hotelActionTypes";

export const addHotel = (hotel: Hotel): AnyAction => ({
  type: ADD_HOTEL,
  hotel,
});

export const fetchHotels = (token: string): AnyAction => ({
  type: FETCH_HOTELS,
  payload: token,
});

export const fetchHotelsSuccess = (hotels: Hotels): AnyAction => ({
  type: FETCH_HOTELS_SUCCESS,
  payload: hotels,
});
