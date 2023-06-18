import React from "react";
import { Route, Routes } from "react-router-dom";

import StatsPage from "../Pages/StatsPage";
import { Feedback } from "../Feedback/Main";
import AdminLogin from "../Pages/AdminLogin";
import Homepage from "../Pages/Homepage";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
      
    </div>
  );


};

export default MainRoutes;
