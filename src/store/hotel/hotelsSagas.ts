import { call, put, takeLatest } from "redux-saga/effects";

import { fetchHotels } from "../../utils/api";
import { fetchHotelsSuccess } from "./hotelActions";
import { FETCH_HOTELS } from "./hotelActionTypes";

export function* fetchHotelsSaga(action: any): any {
  try {
    const response = yield call(fetchHotels, action.payload);
    yield put(fetchHotelsSuccess(response.data));
  } catch (err) {
    console.log("ERROR" + err);
  }
}

export default function* hotelsSagas(): any {
  yield takeLatest(FETCH_HOTELS, fetchHotelsSaga);
}
