import { FC } from "react";

import store from "../../../store";
import { userSeletor } from "../../../store/user/userSelector";
import HotelProvider, {
  useDispatchHotel,
  useSelectorHotel,
  hotelContext,
} from "../../../store/HotelProvider";

import "./RegisterPage";

const UserRegistrationPage: FC = () => (
  <HotelProvider store={store} context={hotelContext}>
    <UserRegistration />
  </HotelProvider>
);

const UserRegistration: FC = () => {
  const { userRegistrationData } = useSelectorHotel(userSeletor);
  console.log(userRegistrationData);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <h2 className="card-title text-center">Register</h2>
            <div className="card-body py-md-4">
              <form>
                <div className="form-group">
                  <label>User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="user-name"
                    value={userRegistrationData.userName}
                  />
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={userRegistrationData.firstName}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last-name"
                    value={userRegistrationData.lastName}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={userRegistrationData.email}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={userRegistrationData.password}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirm-password"
                    value={userRegistrationData.confirmPassword}
                  />
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <button className="btn btn-primary btn-block">
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegistrationPage;
