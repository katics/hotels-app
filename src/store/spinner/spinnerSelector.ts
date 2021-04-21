import { Spinner } from "../../utils/types/Spinner";
import { HotelState } from "../HotelProvider";

export const spinnerSelector = (state: HotelState): Spinner => {
  return state.spinner;
};
