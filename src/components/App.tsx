import { FC, useState } from "react";
import store from "../store";
import hotelReducer from "../store/hotel/hotelReducer";

import hotelsSelector from "../store/hotel/hotelSelector";
import HotelProvider, {
  useDispatchHotel,
  useSelectorHotel,
  hotelContext,
} from "../store/HotelProider";

import "./App.scss";

const AppPage: FC = () => (
  <HotelProvider store={store} context={hotelContext}>
    <App />
  </HotelProvider>
);

const App: FC = () => {
  // const userDispatch = useDispatchHotel();
  const listOfHotels = useSelectorHotel(hotelsSelector);
  console.log(listOfHotels);

  const [hotel, setHotel] = useState({ name: "" });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHotel({ name: e.target.value });
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="add Hotel"
        value={hotel.name}
        onChange={onInputChange}
      />

      {/* <ul>
        {listOfHotels.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default AppPage;
