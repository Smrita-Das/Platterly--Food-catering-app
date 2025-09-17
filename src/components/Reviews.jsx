import React from 'react'

function Reviews({img, name, prof, desc, date}) {
  return (
    <>
    
      <div className="w-[270px]  py-3 px-2 border-r rounded-2xl mx-auto border-r-neutral-400 hover:shadow-xl">
        <div id='profile' className="flex gap-6 py-3">
        <div><img src={img} alt="" className="h-12 w-12 rounded-full object-cover" /></div>
        <div>
          <h1 className="font-semibold">{name}</h1>
          <p className="text-sm text-neutral-700 italic">{prof}</p>
        </div>
        </div>
      <p className="text-[#000]">{desc}</p>  
      <p className="text-sm text-neutral-600 italic">{date}</p>
      </div>
    </>
  )
}

export default Reviews;
