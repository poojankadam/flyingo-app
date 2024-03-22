import React from 'react'

function FooterAbout({name}) {
    const about = ["About us","Awards","Careers","Press releases","Sponsorship","Environmental sustainability"]
    const aboutlist = about.map((n)=>(
        <li> {n} </li>
    ))
  return (
    <div className='flex flex-col list-none font1'>
        <label className='text-xl font-medium'>{name}</label>
        <ul className=' mt-5 font-extralight space-y-1'>{aboutlist}</ul>
    </div>
  )
}  


export default FooterAbout