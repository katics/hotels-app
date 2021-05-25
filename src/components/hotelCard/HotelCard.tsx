import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

import { APP_ROUTES } from "../../utils/AppRoutes";
import { Heart, HeartFill } from "react-bootstrap-icons";

import { Hotel } from "../../utils/types/Hotel";
import "./HotelCard.scss";
import LabelSpanSet from "../labelSpanSet/LabelSpanSet";
interface HotelData {
  hotel: Hotel;
  userId: number;
  addRemoveFavHotel: (hotelId: number, isFavorite: boolean) => any;
}

const HotelCard: FC<HotelData> = ({ hotel, userId, addRemoveFavHotel }) => {
  const isFavorite = hotel.user.includes(userId);

  const checkImgUrl = (imgUrl: string) => {
    return imgUrl.includes("http://") ? true : false;
  };

  const generateImgUrl = (image: string) => {
    return (
      window.location.protocol +
      "//" +
      window.location.hostname +
      ":8000" +
      image
    );
  };

  const [hotelImg] = useState(() => {
    return checkImgUrl(hotel.image) ? hotel.image : generateImgUrl(hotel.image);
  });

  const favIcon = isFavorite ? (
    <div
      className="float-right pointer"
      onClick={() => addRemoveFavHotel(hotel.id, false)}
    >
      <HeartFill color="royalblue" />
    </div>
  ) : (
    <div
      className="float-right pointer"
      onClick={() => addRemoveFavHotel(hotel.id, true)}
    >
      <Heart color="royalblue" />
    </div>
  );
  return (
    <div className="col-md-3 py-2">
      <div className=" hotel-card card card-body h-100">
        <img
          className="card-img-top"
          data-testid="HotelCardImgTestId"
          src={hotelImg}
          alt="Card image"
        />
        <h4 className="card-title h-100">{hotel.name}</h4>
        <LabelSpanSet labelTitle="Country:" spanValue={hotel.country} />
        <LabelSpanSet labelTitle="City:" spanValue={hotel.city} />
        <LabelSpanSet labelTitle="Stars:" spanValue={hotel.stars.toString()} />
        <div>
          <NavLink to={`${APP_ROUTES.dashboard}/${hotel.id}`}>Details</NavLink>{" "}
          {favIcon}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
