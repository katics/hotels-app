import { call, put, takeLatest } from "redux-saga/effects";
import * as toastr from "toastr";
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

import { SaveToLoalStorage } from "../../utils/common/LocalStorage";
import { TOKEN_LS_NAME } from "../../utils/common/constantNames";

export function* getUserTokenAPI(action: any): any {
  try {
    const response = yield call(userLogin, action.payload);

    SaveToLoalStorage(TOKEN_LS_NAME, response.data.token);
    yield put(fetchLoginUserSuccess(response.data));
  } catch (err) {
    yield put(fetchloginUserError((err = true)));
  }
}

export function* registerUserAPI(action: any): any {
  try {
    const response = yield call(registerUser, action.payload);
    if (response) {
      if (response.statusText === response_status_created) {
        yield put(fetchRegisterUserSucces());
        toastr.success("User registered");
      } else {
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
