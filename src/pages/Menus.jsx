import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';


const welcomeDrinks = [
  {
    id: 1,
    img: "https://plus.unsplash.com/premium_photo-1671014947847-ba033c6b9e19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMGxhZ29vbiUyMGRyaW5rfGVufDB8fDB8fHww",
    name: "Sparkling Blue Lagoon",
    rating: 4.9,
    desc: "A vibrant blend of blue curacao syrup, lemon juice, and soda with a fizzy kick.",
    rate: "₹150 / glass"
  },
  {
    id: 2,
    img: "https://plus.unsplash.com/premium_photo-1720446085662-6c337f997326?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGluYSUyMGNvbGFkYSUyMGRyaW5rfGVufDB8fDB8fHww",
    name: "Virgin Pina Colada",
    rating: 4.8,
    desc: "Creamy coconut milk and pineapple juice shaken with ice for a tropical welcome.",
    rate: "₹160 / glass"
  },
  {
    id: 3,
    img: "https://plus.unsplash.com/premium_photo-1720692882782-3cdd152b1a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVybWVsb24lMjBjb29sZXIlMjBkcmlua3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Watermelon Cooler",
    rating: 4.7,
    desc: "Fresh watermelon juice blended with mint leaves and a hint of lime.",
    rate: "₹130 / glass"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1719239948819-0afeced16184?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuZ28lMjBtb2NrdGFpbCUyMGRyaW5rfGVufDB8fDB8fHww",
    name: "Mango Basil Delight",
    rating: 4.9,
    desc: "Ripe mango puree mixed with basil seeds, soda, and a zesty twist of lemon.",
    rate: "₹170 / glass"
  }
];
const vegStarters = [
  {
    id: 101,
    img: "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D",
    name: "Paneer Tikka",
    rate: "₹220 / plate",
    rating: 4.8,
    desc: "Juicy paneer cubes marinated in spiced yogurt and grilled to perfection."
  },
  {
    id: 102,
    img: "https://media.istockphoto.com/id/1396682183/photo/bread-spring-roll.webp?a=1&b=1&s=612x612&w=0&k=20&c=jCsHyyl_2DJeqZq3rH2jaJjkfiEb8uhMjAGcxnnGkiA=",
    name: "Veg Spring Rolls",
    rate: "₹180 / plate",
    rating: 4.6,
    desc: "Crispy golden rolls stuffed with seasoned vegetables and served with dip."
  },
  {
    id: 104,
    img: "https://images.unsplash.com/photo-1599307767316-776533bb941c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnJTIwZ3JlZW4lMjBrZWJhYnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Hara Bhara Kebab",
    rate: "₹190 / plate",
    rating: 4.5,
    desc: "Healthy kebabs made with spinach, peas, and potatoes, lightly pan-fried."
  },
];
const nonVegStarters = [
  {
    id: 201,
    img: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMHRhbmRvb3JpfGVufDB8fDB8fHww",
    name: "Chicken Tandoori",
    rate: "₹280 / plate",
    rating: 4.9,
    desc: "Classic chicken legs marinated overnight in tandoori spices and grilled."
  },
  {
    id: 202,
    img: "https://media.istockphoto.com/id/1149821046/photo/kerala-fish-curry-karimeen-pollichathu.jpg?s=612x612&w=0&k=20&c=1onbADWy7bpfIvfx0CYHzThv5Qw0_h_RiQuxshD0gow=",
    name: "Fish Amritsari",
    rate: "₹300 / plate",
    rating: 4.7,
    desc: "Crispy fried fish marinated with tangy Amritsari masala and herbs."
  },
  {
    id: 203,
    img: "https://media.istockphoto.com/id/501266025/photo/seekh-kabab-5.webp?a=1&b=1&s=612x612&w=0&k=20&c=1r-z4KoXCcFJXcEe5Jrky7e2VXyTYX5yfXwip-JVtm8=",
    name: "Mutton Seekh Kebab",
    rate: "₹350 / plate",
    rating: 4.8,
    desc: "Juicy minced mutton kebabs spiced with herbs and chargrilled on skewers."
  },
  {
    id: 204,
    img: "https://images.unsplash.com/photo-1600019229369-ef34b8700b3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByYXduJTIwdGVtcHVyYXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Prawn Tempura",
    rate: "₹320 / plate",
    rating: 4.6,
    desc: "Golden crispy prawns fried in a light Japanese-style tempura batter."
  },
];
const vegMainCourse = [
  {
    id: 301,
    img: "https://images.pexels.com/photos/30858402/pexels-photo-30858402.jpeg",
    name: "Paneer Butter Masala",
    rate: "₹280 / plate",
    rating: 4.9,
    desc: "Creamy tomato-based curry cooked with soft paneer cubes and rich spices."
  },
  {
    id: 302,
    img: "https://media.istockphoto.com/id/1170374719/photo/dal-makhani-at-dark-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=FWHhW6SnrLvmwaR-APN3pIxEjLJe073-PQ0cfvOGoTI=",
    name: "Dal Makhani",
    rate: "₹240 / plate",
    rating: 4.8,
    desc: "Slow-cooked black lentils simmered overnight with cream, butter, and spices."
  },
  {
    id: 303,
    img: "https://media.istockphoto.com/id/495188382/photo/indian-pulav-vegetable-rice-veg-biryani-basmati-rice.jpg?s=612x612&w=0&k=20&c=KQUBQt3PY-9IF31C0gvjrLFb9jZvp5mmLG6Vcxe1e7Q=",
    name: "Veg Biryani",
    rate: "₹260 / plate",
    rating: 4.7,
    desc: "Aromatic basmati rice cooked with garden-fresh vegetables and saffron."
  },
  {
    id: 304,
    img: "https://media.istockphoto.com/id/1092142632/photo/breakfast-lunch-and-dinner.jpg?s=612x612&w=0&k=20&c=D5qRj0rCw2UQzrha78w_UBsyrMp2NoLXR6kWgZll07w=",
    name: "Assorted Indian Breads",
    rate: "₹200 / basket",
    rating: 4.8,
    desc: "Freshly baked naan, butter naan, garlic naan, and tandoori roti served hot."
  },
  {
    id: 305,
    img: "https://media.istockphoto.com/id/1328524212/photo/katlambe-chole.webp?a=1&b=1&s=612x612&w=0&k=20&c=TAIktSQ7PNsrwBuf4UBWDC7HNxbHvRdX7R0R0mVqcdo=",
    name: "Chole Bhature",
    rate: "₹230 / plate",
    rating: 4.7,
    desc: "Spicy chickpea curry paired with fluffy deep-fried bhature bread."
  }
];
const nonVegMainCourse = [
  {
    id: 401,
    img: "https://images.unsplash.com/photo-1728910107534-e04e261768ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Butter Chicken",
    rate: "₹350 / plate",
    rating: 4.9,
    desc: "Tender chicken pieces simmered in a buttery, creamy tomato gravy."
  },
  {
    id: 402,
    img: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXV0dG9uJTIwY3Vycnl8ZW58MHx8MHx8fDA%3D",
    name: "Mutton Rogan Josh",
    rate: "₹420 / plate",
    rating: 4.8,
    desc: "Traditional Kashmiri dish with slow-cooked lamb in aromatic spices."
  },
  {
    id: 403,
    img: "https://images.unsplash.com/photo-1682622110397-37f6e928f890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmlzaCUyMGN1cnJ5fGVufDB8fDB8fHww",
    name: "Fish Curry",
    rate: "₹320 / plate",
    rating: 4.7,
    desc: "Fresh fish cooked in a tangy coconut-based curry with coastal spices."
  },
  {
    id: 404,
    img: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHx8MHx8fDA%3D",
    name: "Chicken Biryani",
    rate: "₹370 / plate",
    rating: 4.9,
    desc: "Hyderabadi-style biryani layered with fragrant rice, chicken, and spices."
  },
  {
    id: 405,
    img: "https://media.istockphoto.com/id/1092142632/photo/breakfast-lunch-and-dinner.jpg?s=612x612&w=0&k=20&c=D5qRj0rCw2UQzrha78w_UBsyrMp2NoLXR6kWgZll07w=",
    name: "Tandoori Roti & Naan Basket",
    rate: "₹220 / basket",
    rating: 4.8,
    desc: "An assortment of butter naan, garlic naan, and tandoori roti, perfect with curries."
  }
];
const desserts = [
  {
    id: 501,
    img: "https://images.pexels.com/photos/15014919/pexels-photo-15014919.jpeg",
    name: "Gulab Jamun",
    rate: "₹120 / plate (2 pcs)",
    rating: 4.9,
    desc: "Soft khoya dumplings soaked in warm sugar syrup with a hint of cardamom."
  },
  {
    id: 502,
    img: "https://images.unsplash.com/photo-1714799263412-2e0c1f875959?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFzZ3VsbGF8ZW58MHx8MHx8fDA%3D",
    name: "Rasgulla",
    rate: "₹110 / plate (2 pcs)",
    rating: 4.8,
    desc: "Bengali delight made with spongy chhena balls soaked in light sugar syrup."
  },
  {
    id: 503,
    img: "https://media.istockphoto.com/id/657072054/photo/rajwari-or-rajwadi-sweet-kesar-badam-pista-kulfi-or-ice-cream-candy.webp?a=1&b=1&s=612x612&w=0&k=20&c=f1j5gZZ4J1W6eL8zSvEZb2Y2ndKLCfqsDpF72MXR0dE=",
    name: "Kesar Kulfi",
    rate: "₹150 / stick",
    rating: 4.7,
    desc: "Traditional frozen dessert made with saffron-infused milk and dry fruits."
  },
  {
    id: 504,
    img: "https://media.istockphoto.com/id/1397140037/photo/jalebi-with-rabdi.jpg?s=612x612&w=0&k=20&c=LEoKGZ7IApqYEr49ZKexXPswnekhXwVz_T3Hnoqhc5s=",
    name: "Jalebi with Rabri",
    rate: "₹180 / plate",
    rating: 4.9,
    desc: "Crispy fried jalebis drizzled with thick, creamy rabri for a royal treat."
  }
];




function Menus() {
  return (
    <>
    <Navbar/>
     <h1 className="text-4xl text-center p-6 text-[#9f0c55db] font-bold"><span className=''>Welcome Drinks!🍸</span></h1>
    {
      <div className='w-full mt-2 flex gap-3'>
        {
          welcomeDrinks.map((starter)=>(
            <div key={starter.id} className="w-[240px] mx-auto hover:shadow-xl rounded-2xl">
              <img src={starter.img} alt="" className="object-cover rounded-2xl h-[160px] w-full" />
              <div className="flex px-2 mt-1 justify-between">
                <h2 className="font-semibold">{starter.name}</h2>
                <p className="text-sm">{starter.rating}⭐</p>
              </div>
              <p className="px-2 mt-1 italic text-sm text-neutral-700">{starter.desc}</p>
              <p className="px-2 mb-1 font-semibold underline">{starter.rate}</p>
            </div>
          ))
        }
      </div> 
    }

   <h1 className="text-4xl text-center p-6 text-[#9f0c55db] font-bold"><span className=''>Starters (Veg) ! 🍱</span></h1>
    
    {
      <div className='w-full mt-2 flex gap-3'>
        {
          vegStarters.map((starter)=>(
            <div key={starter.id} className="w-[240px] mx-auto hover:shadow-xl rounded-2xl">
              <img src={starter.img} alt="" className="object-cover rounded-2xl h-[160px] w-full" />
              <div className="flex px-2 mt-1 justify-between">
                <h2 className="font-semibold">{starter.name}</h2>
                <p className="text-sm">{starter.rating}⭐</p>
              </div>
              <p className="px-2 mt-1 italic text-sm text-neutral-700">{starter.desc}</p>
              <p className="px-2 mb-1 font-semibold underline">{starter.rate}</p>
            </div>
          ))
        }
      </div>
    }

     <h1 className="text-4xl text-center p-6 text-[#9f0c55db] font-bold"><span className=''>Starters (Non-Veg) ! 🥘</span></h1>

    {
      <div className='w-full   mt-4  flex gap-3'>
        {
          nonVegStarters.map((starter)=>(
            <div key={starter.id} className="w-[240px] mx-auto hover:shadow-xl rounded-2xl">
              <img src={starter.img} alt="" className="object-cover rounded-2xl h-[160px] w-full" />
              <div className="flex px-2 mt-1 justify-between">
                <h2 className="font-semibold">{starter.name}</h2>
                <p className="text-sm">{starter.rating}⭐</p>
              </div>
              <p className="px-2 mt-1 italic text-sm text-neutral-700">{starter.desc}</p>
              <p className="px-2 mb-1 font-semibold underline">{starter.rate}</p>
            </div>
          ))
        }
      </div>
    }
  
      <h1 className="text-4xl text-center p-6 text-[#9f0c55db] font-bold"><span className=''>Main Course (Veg) ! 🥗</span></h1>

    {
      <div className='w-full  mt-2 px-10  flex justify-between flex-wrap gap-3'>
        {
          vegMainCourse.map((starter)=>(
            <div key={starter.id} className="w-[240px]  hover:shadow-xl rounded-2xl">
              <img src={starter.img} alt="" className="object-cover rounded-2xl h-[160px] w-full" />
              <div className="flex px-2 mt-1 justify-between">
                <h2 className="font-semibold">{starter.name}</h2>
                <p className="text-sm">{starter.rating}⭐</p>
              </div>
              <p className="px-2 mt-1 italic text-sm text-neutral-700">{starter.desc}</p>
              <p className="px-2 mb-1 font-semibold underline">{starter.rate}</p>
            </div>
          ))
        }
      </div>
    }

    <h1 className="text-4xl text-center p-6 text-[#9f0c55db] font-bold"><span className=''>Main Course (Non-Veg) ! 🍗</span></h1>

    {
      <div className='w-full  mt-2 px-10  flex justify-between flex-wrap gap-3'>
        {
          nonVegMainCourse.map((starter)=>(
            <div key={starter.id} className="w-[240px]  hover:shadow-xl rounded-2xl">
              <img src={starter.img} alt="" className="object-cover rounded-2xl h-[160px] w-full" />
              <div className="flex px-2 mt-1 justify-between">
                <h2 className="font-semibold">{starter.name}</h2>
                <p className="text-sm">{starter.rating}⭐</p>
              </div>
              <p className="px-2 mt-1 italic text-sm text-neutral-700">{starter.desc}</p>
              <p className="px-2 mb-1 font-semibold underline">{starter.rate}</p>
            </div>
          ))
        }
      </div>
    }

    <h1 className="text-4xl text-center p-6 text-[#9f0c55db] font-bold"><span className=''>Desserts!🍨</span></h1>

    {
      <div className='w-full   mt-4  flex gap-3'>
        {
          desserts.map((starter)=>(
            <div key={starter.id} className="w-[240px] mx-auto hover:shadow-xl rounded-2xl">
              <img src={starter.img} alt="" className="object-cover rounded-2xl h-[160px] w-full" />
              <div className="flex px-2 mt-1 justify-between">
                <h2 className="font-semibold">{starter.name}</h2>
                <p className="text-sm">{starter.rating}⭐</p>
              </div>
              <p className="px-2 mt-1 italic text-sm text-neutral-700">{starter.desc}</p>
              <p className="px-2 mb-1 font-semibold underline">{starter.rate}</p>
            </div>
          ))
        }
      </div>
    }
     
  <div className="w-[980px] bg-[#a97d93] mx-auto mt-12 mb-8 p-10 text-white rounded-2xl flex items-center justify-between">
         <h2 className="text-2xl">Ready to make your event unforgetable?</h2>
         <Link to='/contact'><button className='bg-[#5e183a] text-lg cursor-pointer px-3 py-4 rounded-2xl '>Book your platters Now!!</button></Link>
  </div>


    </>
  )
}

export default Menus;
