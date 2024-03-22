import React from 'react'

function FooterPartner({name,hname}) {

    const partner = ["Affiliate marketing","e-Procurement","Trade partners"]
    const partnerlist = partner.map((n)=>(
        <li> {n} </li>
    ))

    const help = ["Contact us","Travel alerts"]
    const helplist = help.map((h)=>(
        <li> {h} </li>
    ))

  return (
    <div className='flex list-none font1 space-x-8'>
       <div>
          <label className='text-xl font-medium'>{name}</label>
          <ul className='mt-5 font-extralight space-y-1'>{partnerlist}</ul>
       </div>
       <div>
          <label className='text-xl font-medium'>{hname}</label>
          <ul className='mt-5 font-extralight space-y-1'>{helplist}</ul>
       </div>
    </div>
  )
}

export default FooterPartner