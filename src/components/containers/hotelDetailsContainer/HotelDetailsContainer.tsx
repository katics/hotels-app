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
      name={hotelDetails.name as string}
      city={hotelDetails.city as string}
      country={hotelDetails.country as string}
      stars={hotelDetails.stars as number}
      image={hotelDetails.image as string}
      likes={hotelDetails.likes as number}
      description={hotelDetails.description as string}
    />
  );
};
export default HotelDetailsPage;
