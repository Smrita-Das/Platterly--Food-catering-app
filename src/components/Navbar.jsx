import React from 'react'
import {Link} from 'react-router-dom'
import platerllyLOGO from '../assets/platterly_Logo.png'

function Navbar() {
  return (
    <>
    <div className="sticky top-0 w-full bg-[#bfa7b3] text-[#000]">
      <div className="flex px-10 py-2 justify-between items-center">

        <div className="flex items-center gap-2">
          <Link to='/'><img src={platerllyLOGO} alt="" className="h-8 w-full object-contain  " /></Link>
          
          {/* <Link to='/'><p className=" inline">Platterly by SD</p></Link> */}
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
