import React from 'react'
import Reviews from '../components/Reviews';
import vid from '../assets/catering_vid.mp4'
import TeamDetails from '../components/TeamDetails';
import { ReactTyped } from "react-typed";



const reviews = [
  {
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Ananya Sharma",
    designation: "Event Planner",
    review: "Platterly by SD made our event truly special. The food was delicious and beautifully presented.",
    date: "2025-08-12"
  },
  {
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Rahul Mehta",
    designation: "Corporate Manager",
    review: "The catering service was top-notch. Our team enjoyed every dish. Highly recommended!",
    date: "2025-07-28"
  },
  {
    img: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Priya Verma",
    designation: "Wedding Photographer",
    review: "The spread was diverse and flavorful. Guests couldn’t stop complimenting the food.",
    date: "2025-09-01"
  },
  {
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Arjun Kapoor",
    designation: "Entrepreneur",
    review: "Seamless service and mouth-watering dishes. Platterly truly elevated our celebration.",
    date: "2025-06-19"
  },
  {
    img: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Neha Singh",
    designation: "Fashion Designer",
    review: "Loved the attention to detail and presentation. Everything was served hot and fresh.",
    date: "2025-05-09"
  },
  {
    img: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Vikram Rao",
    designation: "Software Engineer",
    review: "Professional staff, tasty food, and on-time delivery. Couldn’t have asked for better catering.",
    date: "2025-04-23"
  }
];
const teamDetails = [
  {
    id: 1,
    name: "Samantha Lee",
    img: "https://images.unsplash.com/photo-1701878198293-d1f3641efdb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hlZiUyMHVzZXJ8ZW58MHwyfDB8fHwy",
    designation: "Co-Founder & Head Chef",
    description:
      "Passionate about creating innovative menus that blend tradition with modern flavors.",
    experience: "12 years",
    specialty: "Continental & Fusion Cuisine",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    img: "https://media.istockphoto.com/id/1446478827/photo/a-chef-is-cooking-in-his-restaurants-kitchen.webp?a=1&b=1&s=612x612&w=0&k=20&c=nXDE3qXC8kjjamUMet4UALUhGL4tWKit1EIWArsbUqc=",
    designation: "Sous Chef",
    description:
      "Expert in kitchen operations with a focus on authentic Indian cuisine.",
    experience: "9 years",
    specialty: "North Indian & Mughlai",
  },
  {
    id: 3,
    name: "Clara Johnson",
    img: "https://media.istockphoto.com/id/1284096639/photo/proud-latin-woman-in-her-pastry-shop-woman-with-apron-watching-the-camera-in-her-cake.webp?a=1&b=1&s=612x612&w=0&k=20&c=_H-Vt4tLRYrr-qdFQCya3yVlbiYNBEanrES1-SEs_g8=",
    designation: "Pastry Artist",
    description:
      "Known for crafting visually stunning and delicious desserts.",
    experience: "7 years",
    specialty: "Cakes & Artisan Desserts",
  },
  {
    id: 4,
    name: "Arjun Patel",
    img: "https://images.unsplash.com/photo-1642364861013-2c33f2dcfbcf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW1wbG95ZWV8ZW58MHwyfDB8fHwy",
    designation: "Event Manager",
    description:
      "Ensures every catering event runs smoothly from planning to execution.",
    experience: "10 years",
    specialty: "Event Coordination & Customer Relations",
  },
  {
    id: 5,
    name: "Emily Chen",
    img: "https://images.unsplash.com/photo-1694163939058-b31163b10f4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFzYWluJTIwd29tZW4lMjBlbnRyZXByZW5ldXJzfGVufDB8MnwwfHx8Mg%3D%3D",
    designation: "Beverage Specialist",
    description:
      "Designs unique beverage menus with a focus on handcrafted cocktails.",
    experience: "6 years",
    specialty: "Mixology & Beverage Innovation",
  },
];



function About() {
  return (
    <>
    <div id='top-sec' className="">
      <div className="relative w-full h-[400px] flex justify-end  bg-[#4a2035db] ">
        <video src={vid} className="h-full object-cover" playsInline loop autoPlay muted></video>
      </div>
      <div className="absolute w-[400px] top-30 left-10 ">
        <h1 className="text-4xl text-white">"Bringing flavors, freshness, and finesse to every platter."</h1>
        <p className="italic text-neutral-50 mt-3">“At <span className='font-semibold'>Platterly by SD</span>, we believe food is more than just a meal — it’s an experience that brings people together. With a passion for flavor and a commitment to excellence, our team blends culinary artistry with thoughtful presentation to create unforgettable dining moments. ored to everyory.”</p>
      </div>
    </div>

<div className="text-center py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        ✨Meet the People Who - {"  "}
        <ReactTyped
          strings={[
            "Make It Happen ✨",
            "Bring Ideas to Life ✨",
            "Cook with Passion ✨",
            "Serve with Love ✨",
            "Power Platterly ✨"
          ]}
          typeSpeed={50}
          backSpeed={5}
          loop
        />
      </h2>
      <p className="mt-2 text-gray-800 text-lg">
        Our team is more than just professionals — we’re a family driven by passion and creativity.
      </p>
    </div>
    


    <div id='mid-sec-1' className="bg-white w-full mx-auto px-8 py-2">
      <div className="flex items-center mt-3 mb-3 ">


          <div  id='part-2' className=" mr-6">
              <section className=" flex justify-center">
      <div className="w-[400px] border-r rounded-2xl px-1 border-r-neutral-400 text-center">
        
        {/* Founder Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1728413775558-5686da5a359d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGluZyUyMHdvbWVuJTIwZW50cmVwcmVuZXVyfGVufDB8MnwwfHx8Mg%3D%3D"
            alt="Founder"
            className="w-[120px] h-[120px] object-cover rounded-full  hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Founder Info */}
        <div className="space-y-3 mt-2">
          <h2 className="text-3xl font-semibold text-black">Founder & CEO</h2>
          <p className="text-xl font-bold text-neutral-900">
            Smrita Das
          </p>
          <p className="text-gray-700  leading-relaxed">
            Smrita's journey began with a deep love for food and a dream of
            making catering more personal and memorable. She believes every
            platter tells a story and brings people together through flavors.
          </p>
          <p className="italic text-gray-700 text-sm">
            “Food is more than taste — it's an experience.”
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-3 gap-4">
          <a target='_blank' rel="noopener noreferrer"
            href="https://www.linkedin.com/in/smrita-das/"
            className="px-4 py-2 bg-black text-white text-sm rounded-full shadow hover:bg-[#4a2035db] transition"
          >
            LinkedIn
          </a>
          <a
            href="#" 
            className="px-4 py-2 border border-black text-black text-sm rounded-full hover:bg-[#f7bddadb] transition"
          >
            Message
          </a>
        </div>
      </div>
    </section>
          </div> {/* end of part-2 */}

<div id='part-1' className="flex  flex-wrap gap-2  ">
            {
              
                teamDetails.map(team=> <TeamDetails 
                img={team.img} name={team.name} experience={team.experience}
                 speciality={team.specialty} 
                 desc={team.description} 
                 id={team.id} designation={team.designation} />)
              
            }
          </div>
             
</div>
</div>


 <div className="px-25 py-10">
      <h2 className="text-4xl font-bold  text-gray-800">
        <ReactTyped strings={["What Our Customers Say -"]} typeSpeed={60} loop/>
      </h2>
      <p className=" text-gray-800 text-2xl mt-3 font-semibold">
        We're proud to share the experiences of people who’ve celebrated with us.
      </p>
    </div>

      <div className="flex gap-4 mx-auto w-[960px] mt-4 flex-wrap">
        {
          reviews.map(review=> <Reviews desc={review.review} date={review.date} img={review.img} name={review.name} prof={review.designation} />)
        }
      </div>
    </>
  )
}

export default About
