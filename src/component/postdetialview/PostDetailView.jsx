import React from "react";
import "./PostDetailView.css";
import postplaceholder from "../../assets/images/post-user-placehoolder.png";
const PostDetailView = () => {
  return (
    <section className="PostDetailView">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="post--title">Post Details</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="gr-post-info-box ">
                      <span className="post-info--img elevation-1">
                        <i class="fa-regular fa-image"></i>
                      </span>
                      <div className="info-box-content">
                        <h5 className="info-box-text">Link</h5>
                        <h5 className="info-box-number">0</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="gr-post-info-box  ">
                      <span className="post-info--img elevation-2">
                        <i class="fa-solid fa-user-group"></i>
                      </span>
                      <div className="info-box-content">
                        <h5 className="info-box-text">comments</h5>
                        <h5 className="info-box-number">0</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="gr-post-info-box  ">
                      <span className="post-info--img elevation-3">
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
                        <img src={postplaceholder} alt="img" />
                      </th>
                    </tr>
                    <tr>
                      <th>Description</th>
                      <td>image</td>
                    </tr>
                    <tr>
                      <th>User Name</th>
                      <td>Jatin Jangra</td>
                    </tr>
                    <tr>
                      <th>Post Created At</th>
                      <td>May 18, 2021</td>
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

export default PostDetailView;