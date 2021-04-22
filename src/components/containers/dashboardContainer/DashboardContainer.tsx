import { FC } from "react";

import store from "../../../store";
import { hotelsSelector } from "../../../store/hotel/hotelSelector";
import HotelProvider, {
  useDispatchHotel,
  useSelectorHotel,
  hotelContext,
} from "../../../store/HotelProvider";

import { fetchHotels } from "../../../store/hotel/hotelActions";
import { userSeletor } from "../../../store/user/userSelector";
import DashboardLayout from "../../layout/dashboardLayout/DashboardLayout";
import Spinner from "../../spinner/Spinner";

const DashboardPage: FC = () => (
  <HotelProvider store={store} context={hotelContext}>
    <DashboardContainer />
  </HotelProvider>
);

const DashboardContainer: FC = () => {
  const fetchHotelForCurrentUser = (token: string) => {
    hotelDispatch(fetchHotels(token));
  };

  const { listOfHotels, isLoading } = useSelectorHotel(hotelsSelector);
  const { currentUser } = useSelectorHotel(userSeletor);
  const hotelDispatch = useDispatchHotel();

  return (
    <>
      {!isLoading ? (
        <DashboardLayout
          hotels={listOfHotels}
          title="List of all hotels"
          fetchHotels={token => fetchHotelForCurrentUser(token)}
          user={currentUser}
        />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default DashboardPage;
