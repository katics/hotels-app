import { Hotels } from "../../utils/types/Hotels";
import { HotelState } from "../HotelProvider";

export const hotelsSelector = (state: HotelState): Hotels => {
  return state.hotels;
};
const allHotelsSelectors = {
  hotelsSelector,
};
export default allHotelsSelectors;
