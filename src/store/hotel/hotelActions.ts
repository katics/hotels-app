import { IHotel } from "../../utils/types/Hotel";
import { ADD_HOTEL } from "./hotelActionTypes";

export const addHotel = (hotel: IHotel): any => ({
  type: ADD_HOTEL,
  hotel,
});
