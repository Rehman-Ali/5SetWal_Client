import React from "react";
import "./UserDetailView.css";
import placeholder from "../../assets/images/placeholder.png";
const UserDetailView = () => {
  return (
    <section className="UserDetailView">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="user--title">user Details</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="gr-user-info-box ">
                      <span className="user-info--img elevation-1">
                        <i class="fa-regular fa-image"></i>
                      </span>
                      <div className="info-box-content">
                        <h5 className="info-box-text">Link</h5>
                        <h5 className="info-box-number">0</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="gr-user-info-box  ">
                      <span className="user-info--img elevation-2">
                        <i class="fa-solid fa-user-group"></i>
                      </span>
                      <div className="info-box-content">
                        <h5 className="info-box-text">comments</h5>
                        <h5 className="info-box-number">0</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="gr-user-info-box  ">
                      <span className="user-info--img elevation-3">
                        <i class="fa-solid fa-users"></i>
                      </span>
                      <div className="info-box-content">
                        <h5 className="info-box-text">viewers</h5>
                        <h5 className="info-box-number">0</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="gr-user-info-box  ">
                      <span className="user-info--img elevation-4">
                        <i class="fa-solid fa-users"></i>
                      </span>
                      <div className="info-box-content">
                        <h5 className="info-box-text">viewers</h5>
                        <h5 className="info-box-number">0</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <table className="table table-bordered text-center">
                  <tbody>
                    <tr>
                      <th colSpan={2}>
                        <img src={placeholder} alt="placeholder" />
                      </th>
                    </tr>
                    <tr>
                      <th>Name </th>
                      <td>saurabh</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>saurabh2@gmail.com</td>
                    </tr>
                    <tr>
                      <th>Website </th>
                      <td> </td>
                    </tr>
                    <tr>
                      <th>Bio </th>
                      <td> </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetailView;
