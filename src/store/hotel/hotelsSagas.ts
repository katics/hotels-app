import { call, put, takeLatest } from "redux-saga/effects";

import {
  fetchHotelDetailsAPI,
  fetchHotels,
  toggleFavouritesAPI,
} from "../../utils/api";
import {
  fetchHotelDetailsSuccess,
  fetchHotelsError,
  fetchHotelsSuccess,
} from "./hotelActions";
import {
  FETCH_HOTELS_REQUEST,
  FETCH_HOTEL_DETAILS,
  TOGGLE_FAVOURITES_REQUEST,
} from "./hotelActionTypes";

export function* fetchHotelsSaga(action: any): any {
  try {
    const response = yield call(fetchHotels);
    yield put(fetchHotelsSuccess(response.data));
  } catch (err) {
    yield put(fetchHotelsError());
    console.log("ERROR" + err);
  }
}

export function* fetchHotelDetails(action: any): any {
  try {
    const response = yield call(fetchHotelDetailsAPI, action.payload);
    yield put(fetchHotelDetailsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* toggleFavourites(action: any): any {
  try {
    yield call(toggleFavouritesAPI, action.payload);
  } catch (err) {
    console.log(err);
  }
}

export default function* hotelsSagas(): any {
  yield takeLatest(FETCH_HOTELS_REQUEST, fetchHotelsSaga);
  yield takeLatest(FETCH_HOTEL_DETAILS, fetchHotelDetails);
  yield takeLatest(TOGGLE_FAVOURITES_REQUEST, toggleFavourites);
}
