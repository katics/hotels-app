import { UserData } from "../../utils/types/UserData";
import {
  FETCH_LOGIN_USER,
  FETCH_LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  FETCH_REGISTER_USER,
  FETCH_REGISTER_USER_SUCCESS,
  FETCH_LOGIN_USER_ERROR,
  FETCH_REGISTER_USER_ERROR,
} from "./userActionTypes";

const initialState: UserData = {
  loginError: false,
  registerError: false,
  isLogged: false,
  hasRegisred: false,
  currentUser: {
    token: "",
    username: "",
    first_name: "",
    last_name: "",
    user_id: 0,
    email: "",
  },
};

const user = (state = initialState, action: any = {}): UserData => {
  switch (action.type) {
    case FETCH_LOGIN_USER:
      return { ...state, loginError: false, registerError: false };
    case FETCH_LOGIN_USER_SUCCESS:
      return { ...state, currentUser: action.payload, isLogged: true };
    case FETCH_LOGIN_USER_ERROR:
      return { ...state, loginError: true };
    case LOGOUT_USER:
      return initialState;
    case FETCH_REGISTER_USER:
      return { ...state };
    case FETCH_REGISTER_USER_SUCCESS:
      return { ...state, hasRegisred: true, registerError: false };
    case FETCH_REGISTER_USER_ERROR:
      return { ...state, registerError: true };
    default:
      return state;
  }
};

export default user;
