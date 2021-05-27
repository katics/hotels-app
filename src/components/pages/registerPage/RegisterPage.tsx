import { FC } from "react";

import { UserRegistrationData } from "../../../utils/types/UserRegistrationData";
import FormError from "../../error/Error";
import FormFieldSet from "../../formFieldSet/FormFieldSet";

import "./RegisterPage.scss";

interface UserRegisterProps {
  registerError: boolean;
  registrationData: UserRegistrationData;
  signInClick: (e: any) => void;
  userNameChanged: (e: any) => void;
  firstNameChanged: (e: any) => void;
  lastNameChanged: (e: any) => void;
  emailChanged: (e: any) => void;
  passwordChanged: (e: any) => void;
  confirmPasswordChanged: (e: any) => void;
}

const UserRegistrationPage: FC<UserRegisterProps> = ({
  registerError,
  registrationData,
  signInClick,
  userNameChanged,
  firstNameChanged,
  lastNameChanged,
  emailChanged,
  passwordChanged,
  confirmPasswordChanged,
}) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-6">
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
