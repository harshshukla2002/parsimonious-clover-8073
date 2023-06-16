import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AdminLogin from "../Pages/AdminLogin";

const MainRoutes = () => {
  return <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/adminlogin" element={<AdminLogin />} />
  </Routes>
};

export default MainRoutes;
