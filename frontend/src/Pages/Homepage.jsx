import React from "react";
import StudyTimer from "../Components/StudyTimer";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <StudyTimer />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Homepage;
