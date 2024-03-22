import {useState} from 'react'

function ChildTicket({passenger,setPassenger}) {
    const[childCount,setChildCount] = useState(0)

    const handleChildCount= () =>{
        setChildCount(childCount +1)
        setPassenger(passenger +1)
    }
    const handleChildeCount1= () =>{
        setChildCount(childCount -1)
        setPassenger(passenger -1)
    }
  return (
        <div className="flex justify-center items-center space-x-3">
            <button disabled={childCount <= 1} onClick={handleChildeCount1} className="h-6 w-6 border border-gray-500 rounded text-3xl grid place-content-center cursor-pointer hover:bg-yellow-300">-</button>
            <div>{childCount}</div>
            <div onClick={handleChildCount} className="h-6 w-6 border border-gray-500 rounded text-3xl grid place-content-center pt-1 cursor-pointer hover:bg-yellow-300">+</div>
         </div>
  )
}

export default ChildTicket