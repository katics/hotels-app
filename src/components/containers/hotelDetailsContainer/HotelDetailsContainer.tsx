import { FC, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import store from "../../../store";
import {
  fetchHotelDetails,
  fetchHotelReviews,
} from "../../../store/hotel/hotelActions";
import { hotelsSelector } from "../../../store/hotel/hotelSelector";
import HotelProvider, {
  hotelContext,
  useDispatchHotel,
  useSelectorHotel,
} from "../../../store/HotelProvider";
import HotelDetailsLayout from "../../layout/hotelDetailsLayout/HotelDetailsLayout";
import Spinner from "../../spinner/Spinner";

const HotelDetailsContainer: FC = () => (
  <HotelProvider store={store} context={hotelContext}>
    <HotelDetailsPage />
  </HotelProvider>
);

interface Params {
  hotelId: string;
}

const HotelDetailsPage: FC = () => {
  const history = useHistory();

  const { hotelDetails, isLoading } = useSelectorHotel(hotelsSelector);
  const hotelDispatch = useDispatchHotel();

  const { hotelId } = useParams<Params>();

  useEffect(() => {
    hotelDispatch(fetchHotelDetails(hotelId));
  }, [hotelId]);

  const goBack = () => {
    history.goBack();
  };
  const loadHotelReviews = () => {
    hotelDispatch(fetchHotelReviews(hotelId));
  };
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
          reviews={hotelDetails.reviews}
          goBack={goBack}
          loadHotelReviews={loadHotelReviews}
        />
      )}
    </>
  );
};
export default HotelDetailsContainer;
