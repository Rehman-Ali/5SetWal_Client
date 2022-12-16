import Dashboard from "../pages/dashboard/Dashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "../pages/user/User.jsx";
import Posts from "../pages/posts/Posts";
import Reports from "../pages/reports/Reports";
import RecycleUser from "../pages/recycleUser/RecycleUser";
import RecyclePost from "../pages/recyclePost/RecyclePost";
import Comments from "../component/comments/Comments";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<User/>} />
      <Route path="/posts" element={<Posts/>} />
      <Route path="/reports" element={<Reports/>} />
      <Route path="/comments" element={<Comments/>} />
      <Route
        path="/change-password"
        element={<h1>this is change-password page</h1>}
      />
      <Route
        path="/recyclebin/posts"
        element={<RecyclePost/>}
      />
      <Route
        path="/recyclebin/users"
        element={<RecycleUser/>}
      />
    </Routes>
  );
};

export default Routing;
