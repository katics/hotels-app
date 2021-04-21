import { combineReducers, Reducer } from "redux";

import hotels from "./hotel/hotelReducer";
import user from "./user/userReducer";
import spinner from "./spinner/spinnerReducer";

const appReducer = combineReducers({
  hotels,
  user,
  spinner,
});

const rootReducer: Reducer = (state, action: any) => appReducer(state, action);

export default rootReducer;
