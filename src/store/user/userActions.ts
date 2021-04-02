import { AnyAction } from "redux";
import { User } from "../../utils/types/User";
import { UserLoginData } from "../../utils/types/UserLoginData";
import { UserRegistrationData } from "../../utils/types/UserRegistrationData";
import {
  FETCH_LOGIN_USER,
  FETCH_LOGIN_USER_ERROR,
  FETCH_LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  FETCH_REGISTER_USER,
  FETCH_REGISTER_USER_SUCCESS,
  FETCH_REGISTER_USER_ERROR,
} from "./userActionTypes";

export const fetchRegisterUser = (
  userRegData: UserRegistrationData
): AnyAction => ({
  type: FETCH_REGISTER_USER,
  payload: userRegData,
});
export const fetchRegisterUserSucces = (): AnyAction => ({
  type: FETCH_REGISTER_USER_SUCCESS,
});
export const fetchRegisterUserError = (err: boolean): AnyAction => ({
  type: FETCH_REGISTER_USER_ERROR,
  payload: err,
});

export const fetchLoginUser = (userLoginData: UserLoginData): AnyAction => ({
  type: FETCH_LOGIN_USER,
  payload: userLoginData,
});

export const fetchLoginUserSuccess = (currentUser: User): AnyAction => ({
  type: FETCH_LOGIN_USER_SUCCESS,
  payload: currentUser,
});
export const fetchloginUserError = (err: boolean): AnyAction => ({
  type: FETCH_LOGIN_USER_ERROR,
  payload: err,
});

export const logoutUser = (): AnyAction => ({
  type: LOGOUT_USER,
});
