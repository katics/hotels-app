import { FC } from "react";

import store from "../../../store";
import { hotelsSelector } from "../../../store/hotel/hotelSelector";
import HotelProvider, {
  useDispatchHotel,
  useSelectorHotel,
  hotelContext,
} from "../../../store/HotelProvider";

import {
  fetchHotels,
  favouriteHotels,
} from "../../../store/hotel/hotelActions";
import { userSeletor } from "../../../store/user/userSelector";
import DashboardLayout from "../../layout/dashboardLayout/DashboardLayout";
import Spinner from "../../spinner/Spinner";
import { FavouriteHotelRequest } from "../../../utils/types/FavouriteHotelRequest";

const DashboardPage: FC = () => (
  <HotelProvider store={store} context={hotelContext}>
    <DashboardContainer />
  </HotelProvider>
);

const DashboardContainer: FC = () => {
  const fetchHotelForCurrentUser = () => {
    hotelDispatch(fetchHotels());
  };

  const { listOfHotels, isLoading } = useSelectorHotel(hotelsSelector);
  const { currentUser } = useSelectorHotel(userSeletor);
  const hotelDispatch = useDispatchHotel();

  const addRemoveFavHotel = (hotelId: number, isFavorite: boolean) => {
    const favHotel: FavouriteHotelRequest = {
      hotel_id: hotelId,
      is_favorite: isFavorite,
      userID: currentUser.user_id,
    };
    hotelDispatch(favouriteHotels(favHotel));
  };
  return (
    <>
      {!isLoading ? (
        <DashboardLayout
          hotels={listOfHotels}
          title="List of all hotels"
          fetchHotels={() => fetchHotelForCurrentUser()}
          user={currentUser}
          addRemoveFavHotel={addRemoveFavHotel}
        />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default DashboardPage;
