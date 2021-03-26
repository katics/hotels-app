import { Hotels } from "../utils/types/Hotels";
import { User } from "../utils/types/User";
import { HotelState } from "./HotelProvider";

export const hotelsSelector = (state: HotelState): Hotels => {
  return state.hotels;
};

export const userSeletor = (state: HotelState): User => {
  return state.user;
};
const allHotelsSelectors = {
  hotelsSelector,
  userSeletor,
};
export default allHotelsSelectors;
