import React, { createContext, FC } from "react";
import { createDispatchHook, createSelectorHook, Provider } from "react-redux";

import { Hotels } from "../utils/types/Hotels";
import { AnyAction, Store } from "redux";

export interface HotelState {
  hotels: Hotels;
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

// const HotelProvider: FC = ({ children }) => (
//   <Provider store={rootStore} context={hotelContext}>
//     {children}
//   </Provider>
// );

export default HotelProvider;
