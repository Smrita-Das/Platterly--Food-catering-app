import React from 'react'
import {Link} from 'react-router-dom'
import platerllyLOGO from '../assets/platterly_Logo.png'
import { GiGreenhouse } from 'react-icons/gi';
import { FaRegClock } from 'react-icons/fa6';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';
import { PiPackageLight } from 'react-icons/pi';
import {useAuth0} from '@auth0/auth0-react'


function Intro() {
  const {user , loginWithRedirect} =useAuth0();
   
  return (
    <>
    <div className="sticky top-0 w-full bg-[#bfa7b3] text-[#000]">
          <div className="flex py-3 mx-5 justify-between items-center">
    
          <div className="">
              <Link to='/'><img src={platerllyLOGO} alt="" className="h-8 w-full object-contain" /></Link>
            </div>
            <div className='font-semibold text-[#7e1b41]'>
                <button onClick={e => loginWithRedirect()} className='cursor-pointer'>Login/SignUp</button>
            </div>
         </div>
        </div>

<div className="mt-8  max-w-[960px] mx-auto bg-[] ">
<div className="flex items-center p-8 gap-10">
  <div id='content' className="">
     <h1 className="text-6xl text-[#7e1b41] font-semibold">Designed to Delight</h1>
     <p className="mt-3 text-lg">With a touch of creativity and a lot of flavor, <span className='font-bold' >PLatterly by SD</span> makes your celebrations special through thoughtful menus and modern presentation. We craft platters that are easy to share and impossible to forget. </p>
  </div>
<img className="w-1/2 object-contain  animate-float" src={platerllyLOGO} alt=""  />
</div>
</div>


        <div className="mt-5 px-10 w-[980px] mx-auto p-10 rounded-2xl bg-[#cebfc6]">
            <h1 className="font-semibold text-4xl text-[#452234]">Why choose Platterly?</h1>
            <div className="flex justify-between mt-5">
        
             <div className="flex gap-2 items-center">
              <div className='text-2xl text-[#6d0b3c] '><GiGreenhouse/></div>
              <h3 className='text-lg text-[#772a51]'>Fresh Ingredients</h3>
             </div>
        
             <div className="flex gap-2 items-center">
              <div className='text-2xl text-[#6d0b3c]'><FaRegClock/></div>
              <h3 className='text-lg text-[#772a51]'>On-time Delivery</h3>
             </div>
        
             <div className="flex gap-2 items-center">
              <div className='text-2xl text-[#6d0b3c]'><MdOutlinePublishedWithChanges/></div>
              <h3 className='text-lg text-[#772a51]'>Customizations</h3>
             </div>
        
             <div className="flex gap-2 items-center">
              <div className='text-2xl text-[#6d0b3c]'><PiPackageLight/></div>
              <h3 className='text-lg text-[#772a51]'>Eco-friendly packaging</h3>
             </div>
            
            </div>
          </div>

       <div className="w-[980px] bg-[#cebfc6] mx-auto mt-12 mb-8 p-10  rounded-2xl flex items-center justify-between">
                  <h2 className="text-2xl text-[#452234]">Ready to make your event unforgetable?</h2>
                 <button className='bg-[#5e183a] text-white text-lg cursor-pointer px-3 py-4 rounded-2xl '>Book your platters Now!!</button>
           </div>  
           
    </>
  )
}

export default Intro;
