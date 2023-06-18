import React from "react";
import { Route, Routes } from "react-router-dom";
import StatsPage from "../Pages/StatsPage";
import { Feedback } from "../Feedback/Main";
import Homepage from "../Pages/Homepage";
import Adminpage from "../Pages/Adminpage";
import AdminLogin from "../Pages/AdminLogin";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import AdminTodo from "../Components/AdminTodo";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/users/:id" element={<AdminTodo />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
