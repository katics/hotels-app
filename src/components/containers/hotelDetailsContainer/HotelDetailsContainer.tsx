import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchHotelDetails } from "../../../store/hotel/hotelActions";
import { hotelsSelector } from "../../../store/hotel/hotelSelector";
import {
  useDispatchHotel,
  useSelectorHotel,
} from "../../../store/HotelProvider";
import HotelDetailsLayout from "../../layout/hotelDetailsLayout/HotelDetailsLayout";

interface Params {
  hotelId: string;
}

const HotelDetailsPage: FC = () => {
  const { hotelDetails } = useSelectorHotel(hotelsSelector);
  const hotelDispatch = useDispatchHotel();

  const { hotelId } = useParams<Params>();

  useEffect(() => {
    hotelDispatch(fetchHotelDetails(hotelId));
  }, [hotelId]);
  return (
    <HotelDetailsLayout
      name={hotelDetails.name}
      city={hotelDetails.city}
      country={hotelDetails.country}
      stars={hotelDetails.stars}
      image={hotelDetails.image}
      likes={hotelDetails.likes}
      description={hotelDetails.description}
      price={hotelDetails.price}
    />
  );
};
export default HotelDetailsPage;
