import React from 'react'
import Navbar from '../Components/Navbar'
import StudyTimer from '../Components/StudyTimer'
import Carousel from '../Components/Carousel'
import Footer from '../Components/Footer'
import TodoApp from '../Components/TodoApp'

export const Homepage = () => {
  return (
    <div>
      <StudyTimer/>
      <TodoApp/>
      <Carousel/>
      
    </div>
  )
}
