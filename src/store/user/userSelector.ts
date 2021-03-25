import { User } from "../../utils/types/User";
import { HotelState } from "../HotelProvider";

export const userSeletor = (state: HotelState): User => {
  return state.user;
};

const allUserSelector = {
  userSeletor,
};

export default allUserSelector;
