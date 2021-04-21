import { FC, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { fetchHotelDetails } from "../../../store/hotel/hotelActions";
import { hotelsSelector } from "../../../store/hotel/hotelSelector";
import {
  useDispatchHotel,
  useSelectorHotel,
} from "../../../store/HotelProvider";
import HotelDetailsLayout from "../../layout/hotelDetailsLayout/HotelDetailsLayout";
import Spinner from "../../spinner/Spinner";

interface Params {
  hotelId: string;
}

const HotelDetailsPage: FC = () => {
  //const history = useHistory();
  const { hotelDetails, isLoading } = useSelectorHotel(hotelsSelector);
  const hotelDispatch = useDispatchHotel();

  const { hotelId } = useParams<Params>();

  useEffect(() => {
    hotelDispatch(fetchHotelDetails(hotelId));
  }, [hotelId]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
};
export default HotelDetailsPage;
