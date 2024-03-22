import React, { useContext, useState } from 'react'
import Book from '../../Components/Booking/Book'
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import AvailableFlights from './AvailableFlights';

function BookNow() {

  const navigate = useNavigate()
  const [from,setFrom] =useState('Mumbai')
  const [to,setTo] = useState('Select City')
  
  return (
    <div className='flex flex-col bg-gray-200'>
     <div className='border-2 flex justify- pt-4 bg-white'> 
      <BsArrowLeftShort size={"1.7rem"} onClick={()=>navigate(-1)} />
      <div className=' flex justify-center'> <Book/> </div>
     </div>

     <div className='flex flex-col'>
      <div className='font1 text-5xl pl-8 text-gray-600 '>
         <h1> Select your departure flight </h1>
         <h1> from <span className='textcolor'></span> to  <span  className='textcolor'> {to}</span>   </h1> 
      </div>
     </div>
     <div>
      <AvailableFlights/>
     </div>
    </div>
  )
}

export default BookNow





{/* <input type="date" value={selectedDate} onChange={handleDateChange} />
      <p>
          Selected Date: {selectedDate} <br />
          Selected Day: {selectedDay}
        </p> */}