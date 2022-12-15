import React from "react";
import BarChart from "../barChart/BarChart";
import LineChartDemo from "../lineChart/LineChart";

const DashBoardChart = () => {
  return (
    <>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <LineChartDemo />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <BarChart />
      </div>
    </>
  );
};

export default DashBoardChart;
