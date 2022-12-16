import React from "react";
import { Link } from "react-router-dom";
import BreadCrum from "../../component/breadcrum/BreadCrum";
import DashBoardChart from "../../component/dashboardChart/DashBoardChart";
import DashboardInfo from "../../component/dashboardInfo/DashboardInfo";
import DashBoardTable from "../../component/dashboardTable/DashBoardTable";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <>
      <section className="aw_dashboard">
        <div className="container-fluid">
          <div className="row aw_dash_top">
           <BreadCrum 
           pageName="Dashboard"
           currentPage="dashboard"
           />
          </div>
          <div className="row">
            <DashboardInfo />
          </div>
          <div className="row">
            <DashBoardChart />
          </div>
          <div className="row">
            <DashBoardTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
