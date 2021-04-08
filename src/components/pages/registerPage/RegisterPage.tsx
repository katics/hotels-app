import { FC, useState } from "react";

import store from "../../../store";
import HotelProvider, {
  hotelContext,
  useDispatchHotel,
  useSelectorHotel,
} from "../../../store/HotelProvider";
import { fetchRegisterUser } from "../../../store/user/userActions";
import { userSeletor } from "../../../store/user/userSelector";
import { UserRegistrationData } from "../../../utils/types/UserRegistrationData";
import "./RegisterPage";
import "./RegisterPage.scss";

const UserRegistrationPage: FC = () => (
  <HotelProvider store={store} context={hotelContext}>
    <UserRegistration />
  </HotelProvider>
);

const UserRegistration: FC = () => {
  const userDispatch = useDispatchHotel();
  const { registerError } = useSelectorHotel(userSeletor);

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

  const signInClick = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registrationData);
    userDispatch(fetchRegisterUser(registrationData));
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="card">
            <h2 className="card-title text-center">Register</h2>
            <div className="card-body py-md-4">
              <form onSubmit={signInClick}>
                <div className="form-group">
                  <label>User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="user-name"
                    value={registrationData.username}
                    onChange={e => {
                      setRegistrationData({
                        ...registrationData,
                        username: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={registrationData.first_name}
                    onChange={e => {
                      setRegistrationData({
                        ...registrationData,
                        first_name: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last-name"
                    value={registrationData.last_name}
                    onChange={e => {
                      setRegistrationData({
                        ...registrationData,
                        last_name: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={registrationData.email}
                    onChange={e => {
                      setRegistrationData({
                        ...registrationData,
                        email: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={registrationData.password}
                    onChange={e => {
                      setRegistrationData({
                        ...registrationData,
                        password: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirm-password"
                    value={registrationData.confirmPassword}
                    onChange={e => {
                      setRegistrationData({
                        ...registrationData,
                        confirmPassword: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <button className="btn btn-primary btn-block">
                    Create Account
                  </button>
                </div>
                {registerError ? (
                  <div className="register_error">
                    Error, unable to register user
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegistrationPage;
