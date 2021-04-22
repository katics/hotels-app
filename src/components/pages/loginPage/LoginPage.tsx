import { FC } from "react";
import { NavLink } from "react-router-dom";

import { APP_ROUTES } from "../../../utils/AppRoutes";
import FormError from "../../error/Error";
import FormFieldSet from "../../formFieldSet/FormFieldSet";

import "./LoginPage.scss";

import { LoginProps } from "../../../utils/props/LoginPageProps";

const LoginPage: FC<LoginProps> = ({ loginProps }) => {
  return (
    <div className="col-lg-6 login-container">
      <div className="card login-form">
        <div className="card-body">
          <h3 className="card-title text-center">Log in</h3>
          <div className="card-text">
            <form onSubmit={loginProps.signInClick}>
              <FormFieldSet
                label="User Name"
                type="text"
                inputValue={loginProps.loginData.username}
                handleChange={loginProps.setUserName}
              />
              <FormFieldSet
                label="Password"
                type="password"
                inputValue={loginProps.loginData.password}
                handleChange={loginProps.setPassword}
              />
              <button type="submit" className="btn btn-primary btn-block">
                Sign in
              </button>
              <div className="sign-up">
                Don't have an account?
                <NavLink className="float-right" to={APP_ROUTES.registerPage}>
                  Register
                </NavLink>
                {loginProps.loginError && (
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
