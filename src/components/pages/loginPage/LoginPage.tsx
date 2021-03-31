import { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

import store from "../../../store";
import HotelProvider, {
  hotelContext,
  useDispatchHotel,
  useSelectorHotel,
} from "../../../store/HotelProvider";
import { fetchLoginUser } from "../../../store/user/userActions";
import { userSeletor } from "../../../store/user/userSelector";
import { AppRoutes } from "../../../utils/AppRoutes";
import { UserLoginData } from "../../../utils/types/UserLoginData";

const LoginPage: FC = () => (
  <HotelProvider store={store} context={hotelContext}>
    <UserLogin />
  </HotelProvider>
);

const UserLogin: FC = () => {
  const userDispatch = useDispatchHotel();
  const { currentUser } = useSelectorHotel(userSeletor);
  const history = useHistory();

  useEffect(() => {
    if (currentUser.token) {
      history.push(AppRoutes.hotels);
    }
  }, [currentUser.token]);

  const userLoginData: UserLoginData = { username: "", password: "" };
  const [loginData, setLoginData] = useState(userLoginData);

  const setUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      username: e.target.value,
      password: loginData.password,
    });
  };

  const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      username: loginData.username,
      password: e.target.value,
    });
  };

  const signInClick = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    userDispatch(fetchLoginUser(loginData));
  };

  return (
    <div className="col-md-6 login-container">
      <div className="card login-form">
        <div className="card-body">
          <h3 className="card-title text-center">Log in</h3>
          <div className="card-text">
            <form onSubmit={signInClick}>
              <div className="form-group">
                <label>User name</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  value={loginData.username}
                  onChange={e => setUserName(e)}
                ></input>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="input-password"
                  value={loginData.password}
                  onChange={e => {
                    setPassword(e);
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Sign in
              </button>
              <div className="sign-up">
                Don't have an account?
                <NavLink className="float-right" to={AppRoutes.register}>
                  Register
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
