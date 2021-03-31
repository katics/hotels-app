import { FC, useState } from "react";
import { UserRegistrationData } from "../../../utils/types/UserRegistrationData";
import "./RegisterPage";

const UserRegistrationPage: FC = () => {
  const userRegistrationData: UserRegistrationData = {
    userName: "",
    firstName: "",
    password: "",
    confirmPassword: "",
    lastName: "",
    email: "",
  };

  const [registrationData, setRegistrationData] = useState(
    userRegistrationData
  );
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
                    value={registrationData.userName}
                    onChange={e => {
                      setRegistrationData({ userName: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={registrationData.firstName}
                    onChange={e => {
                      setRegistrationData({ firstName: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last-name"
                    value={registrationData.lastName}
                    onChange={e => {
                      setRegistrationData({ lastName: e.target.value });
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
                      setRegistrationData({ email: e.target.value });
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
                      setRegistrationData({ password: e.target.value });
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
                      setRegistrationData({ confirmPassword: e.target.value });
                    }}
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
