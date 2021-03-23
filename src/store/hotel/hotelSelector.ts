import { Hotels } from "../../utils/types/Hotels";
import { HotelStore } from "../HotelProider";

export const hotelsSelector = (state: any): any => {
  return state.hotelReducer.hotels;
};
const allHotelsSelectors = {
  hotelsSelector,
};
export default allHotelsSelectors;
