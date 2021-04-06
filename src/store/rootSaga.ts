import { fork } from "redux-saga/effects";
import usersSagas from "../store/user/usersSagas";
import hotelsSagas from "./hotel/hotelsSagas";

export function* rootSaga(): any {
  yield fork(usersSagas);
  yield fork(hotelsSagas);
}

export default rootSaga;
