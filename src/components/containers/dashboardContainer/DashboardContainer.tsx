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

const DashboardPage: FC = () => (
  <HotelProvider store={store} context={hotelContext}>
    <DashboardContainer />
  </HotelProvider>
);

const DashboardContainer: FC = () => {
  const fetchHotelForCurrentUser = (token: string) => {
    console.log("FETCH hotels Function:   " + token);
    hotelDispatch(fetchHotels(token));
  };

  const { listOfHotels } = useSelectorHotel(hotelsSelector);
  const { currentUser } = useSelectorHotel(userSeletor);
  const hotelDispatch = useDispatchHotel();

  return (
    <DashboardLayout
      hotels={listOfHotels}
      title="List of all hotels"
      fetchHotels={token => fetchHotelForCurrentUser(token)}
      user={currentUser}
    />
  );
};

export default DashboardPage;
