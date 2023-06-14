import React from "react";
import { Route, Routes } from "react-router-dom";
import StatsPage from "../Pages/StatsPage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
