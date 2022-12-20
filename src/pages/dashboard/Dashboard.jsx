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
    
    // dashBoardApi();
    axios.get("https://5setwalbackend-production.up.railway.app/api/admin/post", {
      headers: { "x-auth-token": token, "Content-Type": "application/json", }

    }).then((resp) => {
      // console.log(resp.data, "post data")
    })
    
    // const header = {
      //   "x-auth-token": token,
      //   "Content-Type": "application/json",
      // };
      
  }, []);
  // const dashBoardApi = () => {
  //   axios
  //     .get(
  //       `${process.env.REACT_APP_MY_SECRET_KEY}/api/admin/dashboard`,
  //       {
  //         headers: header,
  //       }
  //     )
  //     .then((resp) => {
  //       // console.log("Dashboard API :", resp)
  //       if (resp.data.success === 1) {
  //         setDashboarReport(resp.data.data);
  //         setFound(true)
  //         // console.log("asdfgsdfg", resp)
  //       }
  //     })
  //     .catch((err) => {
  //       // console.log(err, "An Error Occured");
  //     });
  // }
  const latestUserTable = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to update status",
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes Update it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const body = {
          user_status: data.user_status === 1 ? 0 : 1,
        };
        axios
          .put(
            `https://5setwalbackend-production.up.railway.app/api/admin/user/${data.d.ID}`,
            body,
            {
              headers: header,
            }
          )
          .then((res) => {
            if (res.data.success === 1) {
              Swal.fire("Updated!", "User status has been Updated.", "success");
              setIsLoading(false);
            } else {
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((err) => {
            // console.log(err, "An Error Occured");
          });
      }
    });
  }
  return (
    <>
      <section className="aw_dashboard">
        <div className="container-fluid">
          <div className="row aw_dash_top">
            <BreadCrum pageName="Dashboard" currentPage="dashboard" />
          </div>
          <div className="row">
            <DashboardInfo  />
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
