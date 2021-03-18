import { combineReducers } from "redux";

import hotelReducer from "./hotel/hotelReducer";

const hotelsRootReducer = combineReducers({
  hotelReducer,
});

export default hotelsRootReducer;
