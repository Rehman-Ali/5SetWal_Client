import React from "react";
import { Route, Routes } from "react-router-dom";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>this is home page</h1>} />
    </Routes>
  );
};

export default Routing;
