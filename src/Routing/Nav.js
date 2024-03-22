import React from 'react'
import { Outlet } from 'react-router-dom';
import Booking from "../Components/Booking/Booking";
import Navbar from '../Components/Navbar/Navbar'


function Main() {
  return (
    <div>
      <Navbar/>
      <Booking/>
      <Outlet/>
    </div>
  )
}

export default Main