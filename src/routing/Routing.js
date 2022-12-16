import Dashboard from "../pages/dashboard/Dashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>this is home page</h1>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<h1>this is users page</h1>} />
      <Route path="/posts" element={<h1>this is posts page</h1>} />
      <Route path="/reports" element={<h1>this is reports page</h1>} />
      <Route
        path="/change-password"
        element={<h1>this is change-password page</h1>}
      />
      <Route
        path="/recyclebin/posts"
        element={<h1>this is recyclebin/postspage</h1>}
      />
      <Route
        path="/recyclebin/users"
        element={<h1>this is recyclebin/postspage</h1>}
      />
    </Routes>
  );
};

export default Routing;
