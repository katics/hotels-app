import { FC } from "react";
import { Hotel } from "../../utils/types/Hotel";
import "./HotelCard.scss";

interface HotelData {
  hotel: Hotel;
}

const HotelCard: FC<HotelData> = props => {
  return (
    <div className="col-md-4 py-2">
      <div className="card card-body h-100">
        <img
          className="card-img-top"
          src={props.hotel.image}
          alt="Card image"
        />
        <h4 className="card-title h-100">{props.hotel.name}</h4>
        <div>
          <label>Country:</label>
          <span> {props.hotel.country}</span>
        </div>
        <div>
          <label>City:</label>
          <span> {props.hotel.city}</span>
        </div>
        <div>
          <label>Stars:</label>
          <span>{props.hotel.stars}</span>
        </div>
        <button className="btn btn-primary">Details</button>
      </div>
    </div>
  );
};

export default HotelCard;
