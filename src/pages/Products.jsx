import React from 'react'
import { useState, useEffect } from "react";
import Menus from './Menus';
import { Link } from 'react-router-dom';
import { GiGreenhouse } from 'react-icons/gi';
import { FaRegClock } from 'react-icons/fa6';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';
import { PiPackageLight } from 'react-icons/pi';
import Navbar from '../components/Navbar';


const images = [
  "https://images.unsplash.com/photo-1756395067293-0f7e5604fba3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbmVzZSUyMGZvb2QlMjBwbGF0dGVyfGVufDB8MXwwfHx8MA%3D%3D", // food image 1
  "https://images.unsplash.com/photo-1698133468645-d62daaea2e83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMHBsYXR0ZXJ8ZW58MHx8MHx8fDA%3D", // food image 2
  "https://images.unsplash.com/photo-1654870032519-9db00597cd78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZvb2QlMjBwbGF0dGVyfGVufDB8fDB8fHww", // food image 3
  "https://images.unsplash.com/photo-1718114243715-8252d5382319?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMGZvb2QlMjBwbGF0dGVyfGVufDB8MXwwfHx8Mg%3D%3D", // food image 4
  "https://images.unsplash.com/photo-1672858502748-fb7dc81ef830?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGFzaWFuJTIwZm9vZCUyMHBsYXR0ZXJ8ZW58MHwxfDB8fHwy", // food image 5
];
const featuredPlatters = [
  {
    id: 601,
    img: "https://images.unsplash.com/photo-1640323391688-26f3cf082e30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoZWVzZSUyMGFuZCUyMGNoYXJjdXRlcmllJTIwYm9hcmR8ZW58MHx8MHx8fDA%3D",
    name: "Cheese & Charcuterie ",
    desc: "An elegant selection of artisanal cheeses, cured meats, crackers, olives, and fresh accompaniments.",
    price: "₹1800"
  },
  {
    id: 602,
    img: "https://media.istockphoto.com/id/503137015/photo/vegetable-crudite.jpg?s=612x612&w=0&k=20&c=Jby3Q4rEREbNemU19iL2LvHesWfJmU6lh-fAY7Gb5h4=",
    name: "Classic Crudités",
    desc: "A refreshing platter of colorful seasonal vegetables served with creamy dips and hummus.",
    price: "₹1200"
  },
  {
    id: 603,
    img: "https://images.unsplash.com/photo-1626628577132-f1e88acdd92c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBhbmQlMjBjaGVlc2UlMjBwbGF0dGVyfGVufDB8fDB8fHww",
    name: "Fruit & Cheese Platter",
    desc: "A delightful mix of tropical fruits paired with gourmet cheeses and honey drizzle.",
    price: "₹1600"
  },
  {
    id: 604,
    img: "https://plus.unsplash.com/premium_photo-1668143363025-a17fcc032761?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VhZm9vZCUyMHBsYXR0ZXJ8ZW58MHx8MHx8fDA%3D",
    name: "Seafood Fiesta",
    desc: "A coastal indulgence featuring prawn skewers, grilled fish, calamari, and garlic butter bread.",
    price: "₹2200"
  }
];


function Products() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

   

  return (
    <>
    <Navbar/>
    <div className="flex mb-12 justify-between items-center ">
        
    <div className="w-1/2  px-5 mx-auto overflow-x-hidden  mt-8">
      <div
        className="flex transition-transform duration-400 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="w-full flex-shrink-0 flex justify-center px-2"
          >
            <img
              src={src}
              alt={`slide-${idx}`}
              className="rounded-2xl  w-[340px] h-[400px] object-cover"
            />
          </div>
        ))}
      </div>
      {/* dot notation */}
       <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-gray-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div> 
    <div className="w-1/2 px-5">
      <h1 className="text-5xl font-bold text-[#5e183a]">Discover Flavors Crafted to Delight</h1>
      <p className="text-lg mt-4 italic">“From refreshing welcome drinks to indulgent starters, hearty main courses, and premium platters, our menu is thoughtfully curated to bring you the perfect balance of tradition and innovation. Every dish is prepared with the finest ingredients and a touch of love, making every occasion truly unforgettable.”</p>
      <Link to='/menus'><button className='py-2 px-4 mt-4 cursor-pointer mb-2 text-white bg-[#5e183a] rounded-full'>Explore Menus!</button></Link>
    </div>
    </div>
  

<div className="w-[980px] mt-5 mb-10 mx-auto ">
  <h1 className="font-bold text-[#452234] mb-7 text-4xl ">Featured Platters 🍽️</h1>
  <div className="flex justify-between">
     {
      featuredPlatters.map((platter)=>(
        <div className="w-[235px] hover:shadow-2xl px-2 rounded-2xl">
          <img src={platter.img} alt="" className="h-[160px] object-cover w-full rounded-2xl" />
          <h1 className="font-semibold py-1 text-lg">{platter.name}</h1>
          <p className="text-sm text-neutral-800 italic truncate">{platter.desc}</p>
          <p className="font-semibold py-1">{platter.price}</p>
          <button className="w-full py-1 mt-1 mb-1 text-white bg-[#5e183a] rounded-full">Add to Menu!</button>
        </div>
      ))
     }
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
           <Link to='/contact'><button className='bg-[#5e183a] text-white text-lg cursor-pointer px-3 py-4 rounded-2xl '>Book your platters Now!!</button></Link>
    </div>
   
    </>
      )
}

export default Products
