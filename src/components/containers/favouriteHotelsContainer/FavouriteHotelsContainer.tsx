import { FC } from "react";

import store from "../../../store";
import {
  favouriteHotels,
  fetchFavHotels,
} from "../../../store/hotel/hotelActions";
import { hotelsSelector } from "../../../store/hotel/hotelSelector";
import HotelProvider, {
  hotelContext,
  useDispatchHotel,
  useSelectorHotel,
} from "../../../store/HotelProvider";
import { userSeletor } from "../../../store/user/userSelector";
import { FavouriteHotelRequest } from "../../../utils/types/FavouriteHotelRequest";
import DashboardLayout from "../../layout/dashboardLayout/DashboardLayout";
import Spinner from "../../spinner/Spinner";

const FavHotelsPage: FC = () => (
  <HotelProvider store={store} context={hotelContext}>
    <FavHotelsContainer />
  </HotelProvider>
);

const FavHotelsContainer: FC = () => {
  const { favHotels, isLoading } = useSelectorHotel(hotelsSelector);
  const { currentUser } = useSelectorHotel(userSeletor);
  const hotelDispatch = useDispatchHotel();

  const fetchFavHotelsForCurrentUser = () => {
    hotelDispatch(fetchFavHotels());
  };
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
          hotels={favHotels}
          title="Favourite Hotels"
          fetchHotels={() => fetchFavHotelsForCurrentUser()}
          user={currentUser}
          addRemoveFavHotel={addRemoveFavHotel}
        />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default FavHotelsPage;
