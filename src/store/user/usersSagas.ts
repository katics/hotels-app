import { call, put, takeLatest } from "redux-saga/effects";
import { fetchLoginUserSuccess } from "./userActions";
import { FETCH_LOGIN_USER } from "./userActionTypes";
import { getTokenAPI } from "../../utils/api";

export function* getUserToken(action: any): any {
  try {
    const response = yield call(getTokenAPI, action.payload);
    yield put(fetchLoginUserSuccess(response.data));
  } catch (err) {
    console.log("ERROR: " + err);
  }
}

export default function* usersSagas(): any {
  yield takeLatest(FETCH_LOGIN_USER, getUserToken);
}
