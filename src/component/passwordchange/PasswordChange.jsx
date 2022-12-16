import React, { useState } from "react";
import "./PasswordChange.css";
const PasswordChange = () => {
  const [passwordList, setPasswordList] = useState({
    oldpassword: "",
    newpassword: "",
  });
  const hanldeChangePassword = (event) => {
    setPasswordList({
      ...passwordList,
      [event.target.name]: event.target.value,
    });
  };
  const passwordSubmit = (e) => {
    e.preventDefault();
    console.log(passwordList);
  };
  return (
    <section className="PasswordChange">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12 m-auto col-12">
            <div className="card card-primary">
              <div className="card-header ">
                <h3 className="card-title">Password</h3>
              </div>
              <form
                className="change--passowrd--form"
                onSubmit={passwordSubmit}
              >
                <input type="hidden" name="_token" />

                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="">Old Password</label>
                    <input
                      type="text"
                      placeholder="Enter old password"
                      name="oldpassword"
                      className="form-control"
                      value={passwordList.oldpassword}
                      onChange={hanldeChangePassword}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">New Password</label>
                    <input
                      type="text"
                      placeholder="Enter new password"
                      name="newpassword"
                      className="form-control"
                      value={passwordList.newpassword}
                      onChange={hanldeChangePassword}
                    />
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary">submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PasswordChange;
