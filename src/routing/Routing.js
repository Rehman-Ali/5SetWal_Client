import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from '../pages/dashboard/Dashboard.jsx'
const Routing = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<h1>this is home page</h1>} /> */}
      <Route path="/" element={<Dashboard/>} />
    </Routes>
  );
};

export default Routing;
