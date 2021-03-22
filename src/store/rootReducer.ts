import { combineReducers, Reducer } from "redux";

import hotelReducer from "./hotel/hotelReducer";

const appReducer = combineReducers({
  hotelReducer,
});

const rootReducer: Reducer = (state, action: any) => appReducer(state, action);

export default rootReducer;
