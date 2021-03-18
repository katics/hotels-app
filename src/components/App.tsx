import { FC, useState } from "react";
import { connect } from "react-redux";

import { addHotel } from "../store/hotel/hotelActions";
import { IHotel } from "../utils/types/Hotel";
import { IHotels } from "../utils/types/Hotels";

import "./App.scss";

const mapStateToProps = (hotel: IHotels) => {
  const { listOfHotels } = hotel;
  return { listOfHotels };
};

const mapDispatcherToProps = (dispatch: any) => {
  return {
    addHotel: (hotel: IHotel) => dispatch(addHotel(hotel)),
  };
};

type ReduxType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatcherToProps>;

const App: FC<ReduxType> = props => {
  const { listOfHotels } = props;
  const [hotel, setHotel] = useState({ name: "" });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHotel({ name: e.target.value });
  };

  const onAddClick = () => {
    // const newHotel: IHotel = {
    //   name: ,
    // };
    // props.addHotel(newHotel);
    // setHotel(newHotel);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="add Hotel"
        value={hotel.name}
        onChange={onInputChange}
      />
      <button onClick={onAddClick}>Add</button>
      <ul>
        {listOfHotels.map(hotel => (
          <li key={hotel.name}>{hotel.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatcherToProps)(App);
