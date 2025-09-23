import React from 'react'
import {Link} from 'react-router-dom'
import platerllyLOGO from '../assets/platterly_Logo.png'
import { BsCart3 } from 'react-icons/bs';

function Navbar() {
  return (
    <>
    <div className="sticky top-0 w-full bg-[#bfa7b3] text-[#000]">
      <div className="flex py-3 mx-5 justify-between items-center">

        <div className="">
          <Link to='/'><img src={platerllyLOGO} alt="" className="h-8 w-full object-contain" /></Link>
        </div>
        <div className='flex gap-4 items-center font-semibold text-[#7e1b41]'>
          <Link to='/about'>About Us</Link>
          <Link to='/products'>Products & Services</Link>
          <Link>SignUp</Link>
          <div><BsCart3/></div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Navbar;
