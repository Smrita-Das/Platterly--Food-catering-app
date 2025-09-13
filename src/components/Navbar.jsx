import React from 'react'
import {Link} from 'react-router-dom'
import platerllyLOGO from '../assets/platterly_Logo.png'

function Navbar() {
  return (
    <>
    <div className="fixed top-0 w-full bg-white ">
      <div className="flex px-5 py-1 justify-between items-center">

        <div className="flex items-center gap-2">
          <img src={platerllyLOGO} alt="" className="h-10 w-10 rounded-full " />
          <p className="">Platterly by SD</p>
        </div>
      <Link to='/about'>About Us</Link>
      <Link to='/products'>Products/Services</Link>
      <Link>SignUp</Link>

      </div>
    </div>
    </>
  )
}

export default Navbar;
