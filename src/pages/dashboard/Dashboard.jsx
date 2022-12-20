import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BreadCrum from "../../component/breadcrum/BreadCrum";
import DashBoardChart from "../../component/dashboardChart/DashBoardChart";
import DashboardInfo from "../../component/dashboardInfo/DashboardInfo";
import DashBoardTable from "../../component/dashboardTable/DashBoardTable";
import "./Dashboard.css";
const Dashboard = () => {
  const [dashboardReport, setDashboarReport] = useState({});
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Token"));
    const header = {
      "x-auth-token": token,
      "Content-Type": "application/json",
    };
    axios
      .get(
        "https://5setwalbackend-production.up.railway.app/api/admin/dashboard",
        {
          headers: header,
        }
      )
      .then((resp) => {
        if (resp.data.success === 1) {
          setDashboarReport(resp.data.data);
        }
      })
      .catch((err) => {
        console.log(err, "An Error Occured");
      });
  }, []);

  return (
    <>
      <section className="aw_dashboard">
        <div className="container-fluid">
          <div className="row aw_dash_top">
            <BreadCrum pageName="Dashboard" currentPage="dashboard" />
          </div>
          <div className="row">
            <DashboardInfo dashboardReport={dashboardReport} />
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
