import { combineReducers, Reducer } from "redux";

import hotels from "./hotel/hotelReducer";
import user from "./user/userReducer";

const appReducer = combineReducers({
  hotels,
  user,
});
window.localStorage.clear();
const rootReducer: Reducer = (state, action: any) => appReducer(state, action);

export default rootReducer;
