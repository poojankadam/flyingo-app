import React from 'react'
import { FaPlaneDeparture } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';



function BookBtn({btnname,showFlights,setShowFlights}) {
  const handleShow = ()=>{
    setShowFlights(!showFlights)
  }
  return (
    <div className='flex space-x-2 justify-end mt-4 mr-8 items-center'>
        <button onClick={handleShow} className=' font-semibold px-7 py-4 bg-yellow-400 rounded-lg text-lg font1 effect flex items-center space-x-3' > <FaPlaneDeparture size={"2rem"}/> <h1> {btnname}</h1></button>
        {/* <button className=' font-semibold px-7 py-4 bg-yellow-400 rounded-lg text-lg font1 effect flex items-center space-x-3' > <FaPlaneDeparture size={"2rem"}/> <NavLink to='/booknow'> {btnname}</NavLink></button> */}
    </div>
  )
}

export default BookBtn