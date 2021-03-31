import { AnyAction } from "redux";
import { User } from "../../utils/types/User";
import { UserLoginData } from "../../utils/types/UserLoginData";
import { UserRegistrationData } from "../../utils/types/UserRegistrationData";
import {
  FETCH_LOGIN_USER,
  FETCH_LOGIN_USER_ERROR,
  FETCH_LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER,
} from "./userActionTypes";

export const registerUser = (userRegData: UserRegistrationData): AnyAction => ({
  type: REGISTER_USER,
  payload: userRegData,
});

export const fetchLoginUser = (userLoginData: UserLoginData): AnyAction => ({
  type: FETCH_LOGIN_USER,
  payload: userLoginData,
});

export const fetchLoginUserSuccess = (currentUser: User): AnyAction => ({
  type: FETCH_LOGIN_USER_SUCCESS,
  payload: currentUser,
});
export const fetchloginUserError = (): AnyAction => ({
  type: FETCH_LOGIN_USER_ERROR,
});

export const logoutUser = (): AnyAction => ({
  type: LOGOUT_USER,
});
