import { FC, useState } from "react";

import store from "../store";
import { hotelsSelector } from "../store/hotel/hotelSelector";
import HotelProvider, {
  useDispatchHotel,
  useSelectorHotel,
  hotelContext,
} from "../store/HotelProvider";
import { addHotel } from "../store/hotel/hotelActions";

import "./App.scss";
import { Hotel } from "../utils/types/Hotel";
import { Hotels } from "../utils/types/Hotels";

const AppPage: FC = () => (
  <HotelProvider store={store} context={hotelContext}>
    <App />
  </HotelProvider>
);

const App: FC = () => {
  console.log(useSelectorHotel(hotelsSelector));
  const { listOfHotels } = useSelectorHotel(hotelsSelector);
  console.log(listOfHotels);
  const hotelDispatch = useDispatchHotel();

  const hotelsta: Hotel = { name: "" };
  const [hotel, setHotel] = useState(hotelsta);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setHotel({ name: e.target.value });
  };

  const onAddClick = () => {
    hotelDispatch(addHotel(hotel));
    setHotel({ name: "" });
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="add Hotel"
        value={hotel.name}
        onChange={onInputChange}
      />
      <button onClick={onAddClick}>Add Hotel</button>
      <ul>
        {listOfHotels &&
          listOfHotels.map((hotel: Hotel) => (
            <li key={hotel.name}>{hotel.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default AppPage;
