import React from 'react'

function FooterGroup({name}) {
    const group =["India International Airport","Flyingo Executive","Flyingo Duty Free","Flyingo Airways Cargo","Internal Media Services","Group companies"]

    const grouplist= group.map((n)=>(
        <li> {n} </li>
    ))

  return (
    <div className='flex flex-col list-none font1'>
       <label className='text-xl font-medium'>{name}</label>
       <ul className='mt-5 font-extralight space-y-1 '>{grouplist}</ul>
    </div>
  )
}

export default FooterGroup