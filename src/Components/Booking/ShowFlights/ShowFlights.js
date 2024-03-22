import React from 'react'

function ShowFlights({fromValue,toValue,eDate}) {
  console.log(eDate)
  return (
    <div className='border-2 border-black h-64' >
      <table className='w-full border-collapse'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='py-2 px-4 text-left'>From</th>
            <th className='py-2 px-4 text-left'>To</th>
            <th className='py-2 px-4 text-left'>Depart</th>
            <th className='py-2 px-4 text-left'>Arrive</th>
            <th className='py-2 px-4 text-left'>Total Duration</th>
            <th className='py-2 px-4 text-left'>Price</th>
            <th className='py-2 px-4 text-left'>Book</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-t border-gray-200'>
            <td className='py-2 px-4'>{fromValue}</td>
            <td className='py-2 px-4'>{toValue}</td>
            <td className='py-2 px-4'>{eDate}</td>
            <td className='py-2 px-4'>d</td>
            <td className='py-2 px-4'>e</td>
            <td className='py-2 px-4'>f</td>
            <td className='py-2 px-4'><button className='bg-yellow-400 text-white px-2 py-1 rounded'>Book Now</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ShowFlights ;