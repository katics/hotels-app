import { UserData } from "../../utils/types/UserData";
import {
  FETCH_LOGIN_USER,
  FETCH_LOGIN_USER_SUCCESS,
  REGISTER_USER,
} from "./userActionTypes";

const initialState: UserData = {
  isLoggedIn: false,
  currentUser: {},
};

const user = (state = initialState, action: any = {}): UserData => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state };
    case FETCH_LOGIN_USER:
      return { ...state };
    case FETCH_LOGIN_USER_SUCCESS:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export default user;
