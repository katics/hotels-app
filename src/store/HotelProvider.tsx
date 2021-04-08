import { createContext, FC } from "react";
import { createDispatchHook, createSelectorHook, Provider } from "react-redux";
import { AnyAction, Store } from "redux";
import { Hotel } from "../utils/types/Hotel";

import { Hotels } from "../utils/types/Hotels";
import { UserData } from "../utils/types/UserData";

export interface HotelState {
  hotels: Hotels;
  user: UserData;
  hotelDetails: Hotel; //TODO!!!!!
}

interface ContextProps {
  state: HotelState;
  dispatch: ({ type }: { type: string }) => void;
}

export const hotelContext: any = createContext<ContextProps>(
  {} as ContextProps
);

export const useSelectorHotel = createSelectorHook(hotelContext);
export const useDispatchHotel = createDispatchHook(hotelContext);

interface Props {
  store: any;
  context: any;
}
const HotelProvider: FC<Props> = ({ store, context, ...props }) => (
  <Provider
    store={store as Store<HotelState, AnyAction>}
    context={context}
    {...props}
  />
);

export default HotelProvider;
