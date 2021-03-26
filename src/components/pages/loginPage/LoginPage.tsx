import { FC } from "react";
import { NavLink } from "react-router-dom";
import store from "../../../store";
import HotelProvider, {
  hotelContext,
  useSelectorHotel,
} from "../../../store/HotelProvider";
import { userSeletor } from "../../../store/appSelector";

const LoginPage: FC = () => (
  <HotelProvider store={store} context={hotelContext}>
    <UserLogin />
  </HotelProvider>
);

const UserLogin: FC = () => {
  const { userLoginData } = useSelectorHotel(userSeletor);
  console.log(userLoginData);
  return (
    <div className="col-md-6 login-container">
      <div className="card login-form">
        <div className="card-body">
          <h3 className="card-title text-center">Log in</h3>
          <div className="card-text">
            <form>
              <div className="form-group">
                <label>User name</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  value={userLoginData.userName}
                ></input>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="input-password"
                  value={userLoginData.password}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Sign in
              </button>
              <div className="sign-up">
                Don't have an account?{" "}
                <NavLink className="float-right" to="/Register">
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
