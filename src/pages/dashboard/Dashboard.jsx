import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import BreadCrum from "../../component/breadcrum/BreadCrum";
import DashBoardChart from "../../component/dashboardChart/DashBoardChart";
import DashboardInfo from "../../component/dashboardInfo/DashboardInfo";
import DashBoardTable from "../../component/dashboardTable/DashBoardTable";
import UserTable from "../../component/userTable/UserTable";
import "./Dashboard.css";
const Dashboard = () => {
  const [dashboardReport, setDashboarReport] = useState({});
  const [dashToken, setDashToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const header = {
    "x-auth-token": dashToken,
    "Content-Type": "application/json",
  };
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Token"));
    setDashToken(token);

    axios
      .get(
        "https://5setwalbackend-production.up.railway.app/api/admin/dashboard",
        {
          headers: header,
        }
      )
      .then((resp) => {
        if (resp.data.success === 1) {
          console.log(resp.data);
          setDashboarReport(resp.data.data);
        }
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
            <DashboardInfo />
          </div>
          <div className="row">
            <DashBoardChart />
          </div>
          <div className="row">
            {/* <DashBoardTable /> */}
            <UserTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
