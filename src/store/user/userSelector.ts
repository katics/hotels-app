import { UserData } from "../../utils/types/UserData";
import { HotelState } from "../HotelProvider";

export const userSeletor = (state: HotelState): UserData => {
  return state.user;
};
