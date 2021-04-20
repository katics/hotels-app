import { FC } from "react";

import { Hotel } from "../../../utils/types/Hotel";
import HotelCard from "../../hotelCard/HotelCard";
import { User } from "../../../utils/types/User";
import Button from "../../Button/Button";

interface hotelLayoutProps {
  hotels: Hotel[];
  title: string;
  user: User;
  fetchHotels: (token: string) => any;
}
const DashboardLayout: FC<hotelLayoutProps> = ({
  hotels,
  title,
  user,
  fetchHotels,
}) => {
  const handleButtonClick = () => {
    fetchHotels(user.token);
  };

  return (
    <div className="col-md-12 col-lg-12">
      <div className="row">
        {hotels.map((hotel: Hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
        {!hotels.length && (
          <Button title={title} handleClick={handleButtonClick} />
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
