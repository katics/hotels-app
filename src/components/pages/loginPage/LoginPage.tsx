import { FC } from "react";
import { NavLink } from "react-router-dom";

const LoginPage: FC = () => {
  return (
    <div className="col-md-6 login-container">
      <div className="card login-form">
        <div className="card-body">
          <h3 className="card-title text-center">Log in</h3>
          <div className="card-text">
            <form>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                ></input>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="exampleInputPassword1"
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
