import { FC } from "react";
import CustomButton from "../../Button/Button";

import "./HotelDetailsLayout.scss";
interface hotelDetailsProps {
  name: string;
  city: string;
  country: string;
  stars: number;
  image: string;
  likes: number;
  description: string;
  price: number;
  goBack: () => void;
}
const HotelDetailsLayout: FC<hotelDetailsProps> = ({
  name,
  city,
  country,
  stars,
  image,
  likes,
  description,
  price,
  goBack,
}) => {
  return (
    <div className="col-sm-12 col-lg-12">
      <div className="hotel-details py-2 px-2 row h-100">
        <div className="col-sm-4 py-2 px-2">
          <img
            data-testid="HotelDetailsImgTestId"
            className="hotel-img img-fluid"
            src={image}
            alt={name}
          ></img>
        </div>
        <div className="col-sm-8">
          <div className="text-center">
            <h3>{name}</h3>
          </div>
          <div className="row">
            <div className="description col-sm-9">
              <p>{description}</p>
            </div>
            <div className="details col-sm-3">
              <div className="hotel-stars">
                <label>Stars: </label>
                <label className="float-right"> {stars}</label>
              </div>
              <div className="hotel-likes">
                <label>Likes: </label>
                <label className="float-right"> {likes}</label>
              </div>
              <div className="hotel-country">
                <label>Country: </label>
                <label className="float-right"> {country}</label>
              </div>
              <div className="hotel-city">
                <label>City: </label>
                <label className="float-right"> {city}</label>
              </div>
              <div className="hotel-price">
                <label>Price: </label>
                <label className="float-right">{price} RSD</label>
              </div>
            </div>
            <div className="py-3">
              <CustomButton title="Go Back" handleClick={goBack} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsLayout;
