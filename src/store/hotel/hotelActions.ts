import { AnyAction } from "redux";
import { Hotel } from "../../utils/types/Hotel";
import { ADD_HOTEL } from "./hotelActionTypes";

export const addHotel = (hotel: Hotel): AnyAction => ({
  type: ADD_HOTEL,
  hotel,
});
