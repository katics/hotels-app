import { call, put, takeLatest } from "redux-saga/effects";
import * as toastr from "toastr";

import {
  fetchFavHotelsAPI,
  fetchHotelDetailsAPI,
  fetchHotels,
  toggleFavouritesAPI,
} from "../../utils/api";
import {
  addRemoveFavHotel,
  fetchFavHotelsSuccess,
  fetchHotelDetailsSuccess,
  fetchHotelsError,
  fetchHotelsSuccess,
} from "./hotelActions";
import {
  FETCH_FAV_HOTELS_REQUEST,
  FETCH_HOTELS_REQUEST,
  FETCH_HOTEL_DETAILS,
  TOGGLE_FAVOURITES_REQUEST,
} from "./hotelActionTypes";

export function* fetchHotelsSaga(): any {
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
    const response = yield call(toggleFavouritesAPI, action.payload);
    toastr.success(response.data.Message);
    yield put(addRemoveFavHotel(action.payload));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchFavHotels(): any {
  try {
    const response = yield call(fetchFavHotelsAPI);
    yield put(fetchFavHotelsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}

export default function* hotelsSagas(): any {
  yield takeLatest(FETCH_HOTELS_REQUEST, fetchHotelsSaga);
  yield takeLatest(FETCH_HOTEL_DETAILS, fetchHotelDetails);
  yield takeLatest(TOGGLE_FAVOURITES_REQUEST, toggleFavourites);
  yield takeLatest(FETCH_FAV_HOTELS_REQUEST, fetchFavHotels);
}
