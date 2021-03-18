import { createContext, FC } from "react";
import { createDispatchHook, createSelectorHook, Provider } from "react-redux";
import rootStore from ".";

import { IHotels } from "../utils/types/Hotels";

export interface HotelState {
  hotel: IHotels;
}

interface ContextProps {
  state: HotelState;
  dispatch: ({ type }: { type: string }) => void;
}

const hotelContext: any = createContext<ContextProps>({} as ContextProps);

export const useSelectorHotel = createSelectorHook(hotelContext);
export const useDispatchHotel = createDispatchHook(hotelContext);

const HotelProvider: FC = ({ children }) => (
  <Provider store={rootStore} context={hotelContext}>
    {children}
  </Provider>
);

export default HotelProvider;
