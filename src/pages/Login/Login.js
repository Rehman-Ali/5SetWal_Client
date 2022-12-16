import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/images/logo-admin-5etwal.png";
import { Link } from "react-router-dom";
const Login = () => {
  const [loginCreditional, setLoginCreditional] = useState({
    email: "",
    password: "",
  });

  const handelChange = (event) => {
    setLoginCreditional({
      ...loginCreditional,
      [event.target.name]: event.target.value,
    });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    console.log(loginCreditional);
  };
  return (
    <>
      <div className="container-fluid login_container">
        <div className="row form-row">
          <div className="col form-col">
            <form className="form" onSubmit={handleLogin}>
              <div className="brand_logo_container">
                <img src={logo} className="brand_logo" alt="Logo" />
              </div>
              <div className="row-div">
                <div className="row justify-content-center">
                  <div className="col-9">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text icons"
                          id="basic-addon1"
                        >
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control input"
                        onChange={handelChange}
                        placeholder="Email"
                        value={loginCreditional.email}
                        name="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-9">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text icons"
                          id="basic-addon1"
                        >
                          <i className="fas fa-key"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control input"
                        onChange={handelChange}
                        placeholder="Password"
                        name="password"
                        value={loginCreditional.password}
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-6">
                    <button
                      type="submit"
                      name="button"
                      className="btn login_btn"
                    >
                      Login
                    </button>
                  </div>
                </div>
                <div className="d-flex justify-content-center forget--links">
                  <Link to="/password/reset">Forgot Your Password?</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
