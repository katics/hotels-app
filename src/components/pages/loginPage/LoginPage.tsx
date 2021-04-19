import { FC } from "react";
import { NavLink } from "react-router-dom";

import { APP_ROUTES } from "../../../utils/AppRoutes";
import { UserLoginData } from "../../../utils/types/UserLoginData";
import FormError from "../../error/Error";
import FormFieldSet from "../../formFieldSet/FormFieldSet";

import "./LoginPage.scss";

interface LoginProps {
  signInClick: (e: any) => void;
  setUserName: (e: any) => void;
  setPassword: (e: any) => void;
  loginData: UserLoginData;
  loginError: boolean;
}

const LoginPage: FC<LoginProps> = ({
  signInClick,
  loginData,
  loginError,
  setUserName,
  setPassword,
}) => {
  return (
    <div className="col-md-3 login-container">
      <div className="card login-form">
        <div className="card-body">
          <h3 className="card-title text-center">Log in</h3>
          <div className="card-text">
            <form onSubmit={signInClick}>
              <FormFieldSet
                label="User Name"
                type="text"
                inputValue={loginData.username}
                handleChange={setUserName}
              />
              <FormFieldSet
                label="Password"
                type="password"
                inputValue={loginData.password}
                handleChange={setPassword}
              />
              <button type="submit" className="btn btn-primary btn-block">
                Sign in
              </button>
              <div className="sign-up">
                Don't have an account?
                <NavLink className="float-right" to={APP_ROUTES.registerPage}>
                  Register
                </NavLink>
                {loginError && (
                  <FormError
                    ErrorMessage="Username or password is not valid"
                    CssClass="login_error"
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
