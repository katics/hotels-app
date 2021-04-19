import { ChangeEvent, FC, useState } from "react";

import store from "../../../store";
import HotelProvider, {
  hotelContext,
  useDispatchHotel,
  useSelectorHotel,
} from "../../../store/HotelProvider";
import { fetchRegisterUser } from "../../../store/user/userActions";
import { userSeletor } from "../../../store/user/userSelector";
import { UserRegistrationData } from "../../../utils/types/UserRegistrationData";
import FormError from "../../error/Error";
import FormFieldSet from "../../formFieldSet/FormFieldSet";
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

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="card">
            <h2 className="card-title text-center">Register</h2>
            <div className="card-body py-md-4">
              <form onSubmit={signInClick} autoComplete="off">
                <FormFieldSet
                  type="text"
                  label="User Name"
                  inputValue={registrationData.username}
                  handleChange={userNameChanged}
                />
                <FormFieldSet
                  type="text"
                  label="First Name"
                  inputValue={registrationData.first_name}
                  handleChange={firstNameChanged}
                />
                <FormFieldSet
                  type="text"
                  label="Last Name"
                  inputValue={registrationData.last_name}
                  handleChange={lastNameChanged}
                />
                <FormFieldSet
                  type="text"
                  label="Email"
                  inputValue={registrationData.email}
                  handleChange={emailChanged}
                />

                <FormFieldSet
                  type="password"
                  label="Password"
                  inputValue={registrationData.password}
                  handleChange={passwordChanged}
                />

                <FormFieldSet
                  type="password"
                  label="Confirm Password"
                  inputValue={registrationData.confirmPassword}
                  handleChange={confirmPasswordChanged}
                />
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <button className="btn btn-primary btn-block">
                    Create Account
                  </button>
                </div>
                {registerError && (
                  <FormError
                    ErrorMessage="Error, unable to register use"
                    CssClass="register_error"
                  />
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegistrationPage;
