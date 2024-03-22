import React from 'react'

function FooterBusiness({name}) {
    const business = ["Corporate travel","Beyond Business"," QMICE Meetings and Events","Advertise with us"]
    const businesslist = business.map((n) =>(
        <li> {n} </li>
    ))
  return (
    <div className='flex flex-col list-none font1'>
       <label className='text-xl font-medium'>{name}</label>
       <ul className=' mt-5 font-extralight space-y-1'>{businesslist}</ul>
    </div>
  )
}

export default FooterBusiness