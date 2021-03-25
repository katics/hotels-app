import { FC } from "react";

const RegisterPage: FC = () => {
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
                  <input type="text" className="form-control" id="user-name" />
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-control" id="last-name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="form-group">
                  <label>Confirm password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirm-password"
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

export default RegisterPage;
