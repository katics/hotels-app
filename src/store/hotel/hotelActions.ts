import { Hotel } from "../../utils/types/Hotel";
import { ADD_HOTEL } from "./hotelActionTypes";

export const addHotel = (hotel: Hotel): any => ({
  type: ADD_HOTEL,
  hotel,
});
