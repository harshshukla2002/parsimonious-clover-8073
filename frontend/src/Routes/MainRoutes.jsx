import React from "react";
import { Route, Routes } from "react-router-dom";
import StatsPage from "../Pages/StatsPage";
import { Feedback } from "../Feedback/Main";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
