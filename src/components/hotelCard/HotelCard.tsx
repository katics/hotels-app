import { FC } from "react";
import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../utils/AppRoutes";

import { Hotel } from "../../utils/types/Hotel";
import "./HotelCard.scss";

interface HotelData {
  hotel: Hotel;
}

const HotelCard: FC<HotelData> = ({ hotel }) => {
  return (
    <div className="col-md-3 py-2">
      <div className=" hotel-card card card-body h-100">
        <img className="card-img-top" src={hotel.image} alt="Card image" />
        <h4 className="card-title h-100">{hotel.name}</h4>
        <div>
          <label>Country:</label>
          <span> {hotel.country}</span>
        </div>
        <div>
          <label>City:</label>
          <span> {hotel.city}</span>
        </div>
        <div>
          <label>Stars:</label>
          <span>{hotel.stars}</span>
        </div>
        <NavLink to={`${APP_ROUTES.dashboard}/${hotel.id}`}>Details</NavLink>
      </div>
    </div>
  );
};

export default HotelCard;
