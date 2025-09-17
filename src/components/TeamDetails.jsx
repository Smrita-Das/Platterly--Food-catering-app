import React from 'react'
import { ReactTyped } from "react-typed";

function TeamDetails({img,name, experience, speciality, desc,id, designation}) {
  

  return (
    <>
    

    <div className="w-[250px] p-3  rounded-xl  flex-shrink-0">
        <div className="flex gap-6 items-center">
          <img src={img} alt="" className="h-16 w-16 rounded-full object-cover hover:scale-105 transition-transform duration-500" />
              <div>
          <h1 className="font-semibold">{name}</h1>
          <p className="text-md text-neutral-700 italic">{designation}</p>
              </div>
        </div>
        <p className="text-sm  mt-2"><span className='font-semibold'>Speciality :</span> {speciality}</p>
        <p className="italic mt-1 text-neutral-800">{desc}</p>
    </div>

 

    </>
  )
}

export default TeamDetails;

