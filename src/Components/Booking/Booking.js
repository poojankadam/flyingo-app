import React, { useContext,useState } from 'react'
import '../../App.css'
import '../Css/Booking.css'
import Book from './Book'
import BookBtn from './BookBtn'
import { IoAirplaneSharp, IoLocationOutline } from "react-icons/io5";
import { BiTrip } from "react-icons/bi";
import { BsFillCalendar2Fill } from "react-icons/bs";
import ShowFlights from './ShowFlights/ShowFlights'



function Booking() {
  const [showFlights,setShowFlights] = useState()
  const [from,setFrom] = useState('Kindly Select the city')
  const [to,setTo] = useState('Kindly Select the city')
  const [eDate,setEDate] = useState('s')

  const valueFrom = (e) =>{
    setFrom(e)
  }
  const valueTo = (e) =>{
    setTo(e)
  }
  const valueDate = (e)=>{
    setEDate(e)
  }
 console.log(eDate)
  return (
      <div className='flex flex-col'>
        <div className='width  -mt-20  m-auto shadow-2xl rounded-b-2xl pb-2'>
            <div className='flex justify-evenly bgcolor rounded-t-2xl text-lg text-white font4 py-2'>
                <div className='flex items-center space-x-1'> <IoAirplaneSharp size={"1.4rem"} /> <label>Book</label> </div>
                <div className='flex items-center space-x-1'> <BiTrip size={"1.4rem"}/> <label>My Trip</label> </div>
                <div className='flex items-center space-x-1'> <BsFillCalendar2Fill/><label>Check-In</label></div>
                <div className='flex items-center space-x-1'> <IoLocationOutline size={'1.4rem'} /><label>Flight Status</label></div>
            </div>
            <div className='h-48 flex flex-col justify-center bg-white pt-2'>
              <Book valueFrom={valueFrom} valueTo={valueTo} valueDate={valueDate} ></Book>
              <BookBtn btnname="Show Flights" showFlights={showFlights} setShowFlights={setShowFlights} ></BookBtn>
            </div>
        </div>
        <div>
          {showFlights &&

          <ShowFlights fromValue={from} toValue={to} dateValue={eDate} /> }
        </div>
      </div>
  )
}

export default Booking