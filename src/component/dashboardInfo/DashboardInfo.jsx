import React from "react";
import "./DashboardInfo.css";
const DashboardInfo = () => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="aw_small_box bg-warning">
          <div className="inner">
            <h3>130</h3>
            <p>Total Users</p>
          </div>
          <div className='icon'>
          <i className="fa-solid fa-user-plus"></i>
          </div>
          <a href="#" className='aw_small_footer_box'>More Info  <i className="fa-sharp fa-solid fa-circle-right"></i></a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="aw_small_box bg-info">
          <div className="inner">
            <h3 className="aw_heading">106</h3>
            <p className="aw_users">Total Post</p>
          </div>
          <div className='icon'>
          <i className="fa-regular fa-image"></i>
          </div>
          <a href="#" className='aw_small_footer_box aw_white_te'>More Info  <i className="fa-sharp fa-solid fa-circle-right"></i></a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="aw_small_box bg-danger">
          <div className="inner">
            <h3 className="aw_heading">7</h3>
            <p className="aw_users">Inactive Users</p>
          </div>
          <div className='icon'>
          <i className="fa-solid fa-user"></i>
          </div>
          <a href="#" className='aw_small_footer_box aw_white_te'>More Info  <i className="fa-sharp fa-solid fa-circle-right"></i></a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="aw_small_box bg-success">
          <div className="inner">
            <h3 className="aw_heading">123</h3>
            <p className="aw_users">Active Users</p>
          </div>
          <div className='icon'>
          <i className="fa-solid fa-user"></i>
          </div>
          <a href="#" className='aw_small_footer_box aw_white_te'>More Info  <i className="fa-sharp fa-solid fa-circle-right"></i></a>
        </div>
      </div>
    </>
  );
};

export default DashboardInfo;
