import { clear } from "node:console";
import { Hotels } from "../../utils/types/Hotels";
import { HotelState } from "../HotelProider";

const hotelsSelector = (state: HotelState): Hotels => {
  return state.hotels;
};

export default hotelsSelector;
