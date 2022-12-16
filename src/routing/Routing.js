import Dashboard from "../pages/dashboard/Dashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import PasswordReset from "../component/passwordreset/PasswordReset";
import PasswordChange from "../component/passwordchange/PasswordChange";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<h1>users</h1>} />
      <Route path="/posts" element={<h1> post</h1>} />
      <Route path="/reports" element={<h1>this is reports page</h1>} />
      <Route path="/password/reset" element={<PasswordReset />} />
      <Route path="/change-password" element={<PasswordChange />} />
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
