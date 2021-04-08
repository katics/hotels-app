import { FC } from "react";

import "./HotelDetailsLayout.scss";
interface hotelDetailsProps {
  name: string;
  city: string;
  country: string;
  stars: number;
  image: string;
  likes: number;
  description: string;
}
const HotelDetailsLayout: FC<hotelDetailsProps> = props => {
  return (
    <div className="col-md-12 col-lg-12">
      <div className="hotel-details py-2 px-2 row h-100">
        <div className="col-sm-4">
          <img className="img-fluid" src={props.image} alt={props.name}></img>
        </div>
        <div className="col-sm-8">
          <div className="text-center">
            <h3>{props.name}</h3>
          </div>
          <div className="row">
            <div className="description col-sm-10">
              <p>{props.description}</p>
            </div>
            <div className="details col-sm-2">
              <div className="hotel-stars">
                <label>Stars: </label>
                <label> {props.stars}</label>
              </div>
              <div className="hotel-likes">
                <label>Likes: </label>
                <label> {props.likes}</label>
              </div>
              <div className="hotel-country">
                <label>Country: </label>
                <label> {props.country}</label>
              </div>
              <div className="hotel-country">
                <label>City: </label>
                <label> {props.city}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsLayout;
