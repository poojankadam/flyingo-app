import React from 'react'
import '../../App.css'
import '../Css/Booking.css'
import FooterAbout from './FooterAbout'
import FooterBusiness from './FooterBusiness'
import FooterGroup from './FooterGroup'
import FooterPartner from './FooterPartner'
import FooterRights from './FooterRights'

function Footer() {
  return (
    <div className='bgcolor text-white flex flex-col pt-6 pb-10 px-60'>
      <div className='flex justify- space-x-8'>
        <FooterAbout name='Flyingo Airways'></FooterAbout>
        <FooterGroup name='Group companies'></FooterGroup>
        <FooterBusiness name='Business solutions' ></FooterBusiness>
        <FooterPartner name='Business partners' hname="Help"></FooterPartner>
      </div>
      <hr className='mt-6' />
      <FooterRights></FooterRights>
    </div>
  )
}

export default Footer