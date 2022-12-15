import React from "react";
import DashboardInfo from "../../component/dashboardInfo/DashboardInfo";
import './Dashboard.css'
const Dashboard = () => {
  return (
    <>
      <section className="aw_dashboard">
        <div className="container-xxl">
          <div className="row aw_dash_top">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="aw_dashboard_heading">
                <h2>Dashboard</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 ">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row">
                <DashboardInfo/>
          </div>
          <div className="row">
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
