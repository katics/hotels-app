import { ChangeEvent, FC, useEffect, useState } from "react";

import store from "../../../store";
import HotelProvider, {
  hotelContext,
  useDispatchHotel,
  useSelectorHotel,
} from "../../../store/HotelProvider";
import { fetchLoginUser } from "../../../store/user/userActions";
import { userSeletor } from "../../../store/user/userSelector";
import { APP_ROUTES } from "../../../utils/AppRoutes";
import { UserLoginData } from "../../../utils/types/UserLoginData";
import { useHistory } from "react-router";
import LoginPage from "../../pages/loginPage/LoginPage";

const LoginContainer: FC = () => (
  <HotelProvider store={store} context={hotelContext}>
    <UserLogin />
  </HotelProvider>
);

const UserLogin: FC = () => {
  const history = useHistory();

  const userDispatch = useDispatchHotel();
  const { loginError, isLogged } = useSelectorHotel(userSeletor);

  const userLoginData: UserLoginData = { username: "", password: "" };
  const [loginData, setLoginData] = useState(userLoginData);

  const setUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      username: e.target.value,
    });
  };

  const setPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      password: e.target.value,
    });
  };

  const signInClick = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginData);
    userDispatch(fetchLoginUser(loginData));
  };
  useEffect(() => {
    console.log("Redirect na loginu, user je logovan: " + isLogged.toString());
    if (isLogged) history.push(APP_ROUTES.dashboard);
  }, [isLogged]);

  return (
    <LoginPage
      loginData={loginData}
      loginError={loginError}
      signInClick={signInClick}
      setUserName={setUserName}
      setPassword={setPassword}
    />
  );
};

export default LoginContainer;
