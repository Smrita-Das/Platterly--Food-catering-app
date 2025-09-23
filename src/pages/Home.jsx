import React from 'react'
import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { FiPhoneCall } from 'react-icons/fi';
import logo from '../assets/platterly_Logo.png'
import { GiGreenhouse } from 'react-icons/gi';
import { FaRegClock } from 'react-icons/fa6';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';
import { PiPackageLight } from 'react-icons/pi';
import { ReactTyped } from "react-typed";


function Home() {

const images = [
  { src: "https://media.istockphoto.com/id/1531125295/photo/birthday-party-arrangement.jpg?s=612x612&w=0&k=20&c=R7e2MgZcVqj_8EL9F5fREfxAjqdgTKSyt1ZkLTE8PiI=", className: "", text: 'Birthdays' },
  { src: "https://images.unsplash.com/photo-1723832348140-a2d9eb1753b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VkZGluZyUyMGRpbmVyc3xlbnwwfDJ8MHx8fDI%3D", className: "", text: 'Weddings' },
  { src: "https://media.istockphoto.com/id/1182525590/photo/savory-and-sweet-gourmet-food-at-corporate-office-party.webp?a=1&b=1&s=612x612&w=0&k=20&c=lJHlIrLk-gVpPdeL7zvaNQdMdtd7VcI4MooaFh24Q9A=", className: "", text: 'Corporate Event' },
  { src: "https://media.istockphoto.com/id/961798406/photo/stylish-champagne-glasses-and-food-appetizers-on-table-at-wedding-reception-luxury-catering-at.jpg?s=612x612&w=0&k=20&c=frEzhVL_VIJDedjN81w2Oj8L6Lj_JG3QhAvDiORCdEU=", className: "", text: 'Anniversaries' },
  { src: "https://media.istockphoto.com/id/1500819288/photo/beautifully-decorated-table-before-a-baby-shower-celebration.webp?a=1&b=1&s=612x612&w=0&k=20&c=Lnyq6cTh7O-vujo9qNDvyd8gxe2-EUG2P1rB7X2KMWw=", className: "" , text: 'Baby Showers'},
]

  return (
    <>
<div className="mt-8  max-w-[960px] mx-auto bg-[] ">
<div className="flex items-center p-8 gap-10">
  <div id='content' className="">
     <h1 className="text-6xl text-[#7e1b41] font-semibold">Designed to Delight</h1>
     <p className="mt-3 text-lg">With a touch of creativity and a lot of flavor, <span className='font-bold' >PLatterly by SD</span> makes your celebrations special through thoughtful menus and modern presentation. We craft platters that are easy to share and impossible to forget. </p>
     <div className="flex items-center gap-4 mt-3">
           <Link to='/about'><button className='text-white px-3 py-2 cursor-pointer bg-[#7e1b41]'>Learn more</button></Link>
          <Link to='/contact'>
          <div className="flex items-center gap-2 text-white px-3 py-2 cursor-pointer bg-[#7e1b41]">
            <div><FiPhoneCall/></div>
            <button className=''> For orders! </button>
          </div>
          </Link>         
     </div>    
  </div>
<img className="w-1/2 object-contain  animate-float" src={logo} alt=""  />
</div>
</div>

<div className="mx-auto text-center w-[980px]  mt-5 mb-5">
  <p className="text-2xl py-5 text-[#76063e]">WHAT WE DO 👩‍🍳</p>
  <h1 className="font-bold text-5xl text-[#812f4e] ">
    <ReactTyped
              strings={['Premium Catering Services...' ]}
              typeSpeed={130}
            />
  </h1>
</div>

<div className="mt-8 mb-10 mx-auto">
        <div className="">
          <Carousel opts={{ align: "start" }} className="w-full max-w-[960px] mx-auto">
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 hover:scale-[1.02] transition-all duration-300 ease-in-out"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="relative flex aspect-square items-center justify-center p-0">
                        {/* Image */}
                        <img
                          src={img.src}
                          alt={`Slide ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {/* Text overlay */}
                        <Link to='/menus'>
                        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 hover:scale-[1.02] 
                bg-black/30 text-white px-2 py-1 rounded-lg text-lg font-semibold 
                transition-all duration-300 ">
                          {img.text}
                        </div>
                        </Link>
          
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>


<div className="mt-5 px-10 w-[980px] mx-auto p-10 rounded-2xl bg-[#cebfc6]">
    <h1 className="font-semibold text-4xl text-[#7e1b41]">Why choose Platterly?</h1>
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
    </>
  )
}

export default Home
