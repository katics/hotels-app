import { ADD_HOTEL } from "./hotelActionTypes";
import { IHotels } from "../../utils/types/Hotels";

const initialState: IHotels = { listOfHotels: [{ name: "Hotel Park" }] };

const hotelReducer = (state = initialState, action: any = {}): any => {
  switch (action.type) {
    case ADD_HOTEL:
      return { ...state, ...action.hotel };
    default:
      return state;
  }
};

export default hotelReducer;
