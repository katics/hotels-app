import { combineReducers, Reducer } from "redux";

import hotels from "./hotel/hotelReducer";
import user from "./user/userReducer";

const appReducer = combineReducers({
  hotels,
  user,
});

const rootReducer: Reducer = (state, action: any) => appReducer(state, action);

export default rootReducer;
