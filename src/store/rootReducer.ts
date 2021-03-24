import { combineReducers, Reducer } from "redux";

import hotels from "./hotel/hotelReducer";

const appReducer = combineReducers({
  hotels,
});

const rootReducer: Reducer = (state, action: any) => appReducer(state, action);

export default rootReducer;
