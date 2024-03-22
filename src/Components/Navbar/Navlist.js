import React from 'react'
import { NavLink } from 'react-router-dom'

function Navlist() {

       const list = [
        {id:1,name:"Home"},
        {id:1,name:"Explore"},
        {id:1,name:"Book"},
        {id:1,name:"Experience"},
       ]
    const listName = list.map((l)=> <nav key={l.id} >{l.name}</nav> )
     

  return (
        <ol className='flex space-x-14 font1'>
          <li><NavLink to="/">home</NavLink></li>
          <li><NavLink to='/club' >Club</NavLink></li>
          <li><NavLink to='/cargo' >Cargo</NavLink></li>
        </ol>
  )
}

export default Navlist