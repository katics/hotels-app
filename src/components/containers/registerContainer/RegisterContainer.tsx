import { ChangeEvent, FC, useEffect, useState } from "react";
import { useHistory } from "react-router";

import store from "../../../store";
import HotelProvider, {
  hotelContext,
  useDispatchHotel,
  useSelectorHotel,
} from "../../../store/HotelProvider";
import { fetchRegisterUser } from "../../../store/user/userActions";
import { userSeletor } from "../../../store/user/userSelector";
import { APP_ROUTES } from "../../../utils/AppRoutes";
import { UserRegistrationData } from "../../../utils/types/UserRegistrationData";
import UserRegistrationPage from "../../pages/registerPage/RegisterPage";
import Spinner from "../../spinner/Spinner";

const UserRegistrationContainer: FC = () => (
  <HotelProvider store={store} context={hotelContext}>
    <UserRegistration />
  </HotelProvider>
);

const UserRegistration: FC = () => {
  const history = useHistory();
  const userDispatch = useDispatchHotel();
  const { registerError, hasRegisred, isLoading } = useSelectorHotel(
    userSeletor
  );

  const userRegistrationData: UserRegistrationData = {
    username: "",
    first_name: "",
    password: "",
    confirmPassword: "",
    last_name: "",
    email: "",
  };

  const [registrationData, setRegistrationData] = useState(
    userRegistrationData
  );

  const signInClick = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registrationData);
    userDispatch(fetchRegisterUser(registrationData));
  };

  const userNameChanged = (e: any) => {
    setRegistrationData({
      ...registrationData,
      username: e.target.value,
    });
  };

  const firstNameChanged = (e: any) => {
    setRegistrationData({
      ...registrationData,
      first_name: e.target.value,
    });
  };

  const lastNameChanged = (e: any) => {
    setRegistrationData({
      ...registrationData,
      last_name: e.target.value,
    });
  };

  const emailChanged = (e: any) => {
    setRegistrationData({
      ...registrationData,
      email: e.target.value,
    });
  };

  const passwordChanged = (e: any) => {
    setRegistrationData({
      ...registrationData,
      password: e.target.value,
    });
  };

  const confirmPasswordChanged = (e: any) => {
    setRegistrationData({
      ...registrationData,
      confirmPassword: e.target.value,
    });
  };
  useEffect(() => {
    if (hasRegisred) history.push(APP_ROUTES.loginPage);
  }, [hasRegisred]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <UserRegistrationPage
          registerError={registerError}
          registrationData={registrationData}
          signInClick={signInClick}
          userNameChanged={userNameChanged}
          firstNameChanged={firstNameChanged}
          lastNameChanged={lastNameChanged}
          emailChanged={emailChanged}
          passwordChanged={passwordChanged}
          confirmPasswordChanged={confirmPasswordChanged}
        />
      )}
    </>
  );
};

export default UserRegistrationContainer;
