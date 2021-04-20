import { AnyAction } from "redux";
import { Hotel } from "../../utils/types/Hotel";
import { Hotels } from "../../utils/types/Hotels";
import {
  ADD_HOTEL,
  FETCH_HOTELS_REQUEST,
  FETCH_HOTELS_SUCCESS,
  FETCH_HOTEL_DETAILS,
  FETCH_HOTEL_DETAILS_SUCCESS,
} from "./hotelActionTypes";

export const addHotel = (hotel: Hotel): AnyAction => ({
  type: ADD_HOTEL,
  hotel,
});

export const fetchHotels = (token: string): AnyAction => ({
  type: FETCH_HOTELS_REQUEST,
  payload: token,
});

export const fetchHotelsSuccess = (hotels: Hotels): AnyAction => ({
  type: FETCH_HOTELS_SUCCESS,
  payload: hotels,
});

export const fetchHotelDetails = (hotelId: string): AnyAction => ({
  type: FETCH_HOTEL_DETAILS,
  payload: hotelId,
});

export const fetchHotelDetailsSuccess = (hotel: Hotel): AnyAction => ({
  type: FETCH_HOTEL_DETAILS_SUCCESS,
  payload: hotel,
});
