import { call, put, takeLatest } from "redux-saga/effects";

import { fetchHotelDetailsAPI, fetchHotels } from "../../utils/api";
import { fetchHotelDetailsSuccess, fetchHotelsSuccess } from "./hotelActions";
import { FETCH_HOTELS, FETCH_HOTEL_DETAILS } from "./hotelActionTypes";

export function* fetchHotelsSaga(action: any): any {
  try {
    const response = yield call(fetchHotels, action.payload);
    yield put(fetchHotelsSuccess(response.data));
  } catch (err) {
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
export default function* hotelsSagas(): any {
  yield takeLatest(FETCH_HOTELS, fetchHotelsSaga);
  yield takeLatest(FETCH_HOTEL_DETAILS, fetchHotelDetails);
}
