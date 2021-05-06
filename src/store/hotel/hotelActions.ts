import { AnyAction } from "redux";
import { FavouriteHotelRequest } from "../../utils/types/FavouriteHotelRequest";
import { Hotel } from "../../utils/types/Hotel";
import { Hotels } from "../../utils/types/Hotels";
import {
  ADD_HOTEL,
  FETCH_FAV_HOTELS_ERROR,
  FETCH_FAV_HOTELS_REQUEST,
  FETCH_FAV_HOTELS_SUCCESS,
  FETCH_HOTELS_ERROR,
  FETCH_HOTELS_REQUEST,
  FETCH_HOTELS_SUCCESS,
  FETCH_HOTEL_DETAILS,
  FETCH_HOTEL_DETAILS_SUCCESS,
  TOGGLE_FAVOURITES_REQUEST,
  ADD_REMOVE_FAV_HOTEL,
  RESET_HOTEL_STATE,
} from "./hotelActionTypes";

export const addHotel = (hotel: Hotel): AnyAction => ({
  type: ADD_HOTEL,
  hotel,
});

export const fetchHotels = (): AnyAction => ({
  type: FETCH_HOTELS_REQUEST,
});

export const fetchFavHotels = (): AnyAction => ({
  type: FETCH_FAV_HOTELS_REQUEST,
});
export const fetchFavHotelsSuccess = (favHotels: Hotels): AnyAction => ({
  type: FETCH_FAV_HOTELS_SUCCESS,
  payload: favHotels,
});
export const fetchFavHotelsError = (): AnyAction => ({
  type: FETCH_FAV_HOTELS_ERROR,
});

export const fetchHotelsSuccess = (hotels: Hotels): AnyAction => ({
  type: FETCH_HOTELS_SUCCESS,
  payload: hotels,
});

export const fetchHotelsError = (): AnyAction => ({
  type: FETCH_HOTELS_ERROR,
});

export const fetchHotelDetails = (hotelId: string): AnyAction => ({
  type: FETCH_HOTEL_DETAILS,
  payload: hotelId,
});

export const fetchHotelDetailsSuccess = (hotel: Hotel): AnyAction => ({
  type: FETCH_HOTEL_DETAILS_SUCCESS,
  payload: hotel,
});

export const favouriteHotels = (data: FavouriteHotelRequest): AnyAction => ({
  type: TOGGLE_FAVOURITES_REQUEST,
  payload: data,
});

export const resetHotelState = (): AnyAction => ({
  type: RESET_HOTEL_STATE,
});

export const addRemoveFavHotel = (
  favHotel: FavouriteHotelRequest
): AnyAction => ({
  type: ADD_REMOVE_FAV_HOTEL,
  payload: favHotel,
});
