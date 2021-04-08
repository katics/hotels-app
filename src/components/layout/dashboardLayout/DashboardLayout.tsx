import { FC } from "react";

import { Hotel } from "../../../utils/types/Hotel";
import HotelCard from "../../hotelCard/HotelCard";
import { User } from "../../../utils/types/User";
import Button from "../../Button/Button";

interface hotelLayoutProps {
  hotels: Hotel[];
  title: string;
  user: User;
  fetchAllHotels: (token: string) => any;
}
const DashboardLayout: FC<hotelLayoutProps> = props => {
  const handleButtonClick = () => {
    props.fetchAllHotels(props.user.token as string);
  };

  return (
    <div className="col-md-12 col-lg-12">
      <div className="row">
        {props.hotels.length > 0 ? (
          props.hotels.map((hotel: Hotel, key: any) => (
            <HotelCard key={key} hotel={hotel} />
          ))
        ) : (
          <Button title="Load Hotels" handleClick={handleButtonClick} />
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
