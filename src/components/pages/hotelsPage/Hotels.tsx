import { FC, useEffect, useState } from "react";

import store from "../../../store";
import HotelCard from "../../hotelCard/HotelCard";
import { hotelsSelector } from "../../../store/hotel/hotelSelector";
import HotelProvider, {
  useDispatchHotel,
  useSelectorHotel,
  hotelContext,
} from "../../../store/HotelProvider";

import { fetchHotels } from "../../../store/hotel/hotelActions";

import "./Hotels.scss";
import { Hotel } from "../../../utils/types/Hotel";
import { userSeletor } from "../../../store/user/userSelector";

const HotelsPage: FC = () => (
  <HotelProvider store={store} context={hotelContext}>
    <Hotels />
  </HotelProvider>
);

const Hotels: FC = () => {
  const { listOfHotels } = useSelectorHotel(hotelsSelector);
  const { currentUser } = useSelectorHotel(userSeletor);
  const hotelDispatch = useDispatchHotel();

  useEffect(() => {
    hotelDispatch(fetchHotels(currentUser.token as string));
  }, []);

  return (
    <div className="col-md-12 col-lg-12">
      <div className="row">
        {listOfHotels.map((hotel: Hotel, key: any) => (
          <HotelCard key={key} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelsPage;
