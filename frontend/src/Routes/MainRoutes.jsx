import React from "react";
import { Route, Routes } from "react-router-dom";
import StatsPage from "../Pages/StatsPage";
import StudyTimer from "../Components/StudyTimer";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
      <Navbar/>
      <StudyTimer/>
      <Carousel/>
      <Footer/>
    </div>
  );
};

export default MainRoutes;
