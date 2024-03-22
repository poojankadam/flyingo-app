import React from 'react'

function FooterRights() {

    const cookies = ["Cookie policy","Legal","Privacy","Accessibility","Combating human trafficking","Sitemap"]
    const cookieslist = cookies.map((n)=>(
        <li> {n} </li>
    ))

  return (
    <div className='flex justify-between items-baseline font2 mt-3'>
        <div className='flex space-x-5 list-none text-xs'>{cookieslist}</div>
        <label className=''>Flyingo Airways. All rights reserved</label>

    </div>
  )
}

export default FooterRights