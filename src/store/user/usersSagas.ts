import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchloginUserError,
  fetchLoginUserSuccess,
  fetchRegisterUserError,
  fetchRegisterUserSucces,
} from "./userActions";
import { FETCH_LOGIN_USER, FETCH_REGISTER_USER } from "./userActionTypes";
import {
  userLogin,
  registerUser,
  response_status_created,
} from "../../utils/api";

export function* getUserTokenAPI(action: any): any {
  try {
    const response = yield call(userLogin, action.payload);
    yield put(fetchLoginUserSuccess(response.data));
  } catch (err) {
    yield put(fetchloginUserError((err = true)));
  }
}

export function* registerUserAPI(action: any): any {
  try {
    const response = yield call(registerUser, action.payload);
    if (response) {
      if (response.status === response_status_created)
        yield put(fetchRegisterUserSucces());
      else {
        const registerError = true;
        yield put(fetchRegisterUserError(registerError));
      }
    } else {
      const registerError = true;
      yield put(fetchRegisterUserError(registerError));
    }

    console.log(response);
  } catch (err) {
    const registerError = true;
    yield put(fetchRegisterUserError(registerError));
  }
}

export default function* usersSagas(): any {
  yield takeLatest(FETCH_LOGIN_USER, getUserTokenAPI);
  yield takeLatest(FETCH_REGISTER_USER, registerUserAPI);
}
