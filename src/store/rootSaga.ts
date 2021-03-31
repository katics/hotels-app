import { fork } from "redux-saga/effects";
import usersSagas from "../store/user/usersSagas";

export function* rootSaga(): any {
  yield fork(usersSagas);
}

export default rootSaga;
