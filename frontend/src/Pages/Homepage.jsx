import React from "react";
import Navbar from "../Components/Navbar";
import StudyTimer from "../Components/StudyTimer";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import TodoApp from "../Components/TodoApp";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <StudyTimer />
      <TodoApp />
      <Carousel />
    </div>
  );
};

export default Homepage;
