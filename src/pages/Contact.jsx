import React, { useRef } from 'react'
import { FiMapPin } from 'react-icons/fi';
import { MdOutlineCall } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

function Contact() {
  
  let name = useRef();
  let email = useRef();
  let phone = useRef();
  let message = useRef();

function handleSubmit(e){
  e.preventDefault();
  console.log(name.current.value);
  console.log(email.current.value);
  console.log(phone.current.value);
  console.log(message.current.value);
  name.current.value="";
  email.current.value="";
  phone.current.value="";
  message.current.value="";
}

  return (
    <>
     <div className="mt-4 text-center">
      <h1 className=" text-5xl font-semibold text-[#4d192d]">Get in touch with <span className=''>Platterly</span></h1>
      <div className="text-lg py-2 text-[#4d192d]">We're here to help you with any inquiries and requests!</div>
      </div> {/* end of first section */}

 <div className="mt-4 w-[900px] mx-auto p-4">
 <div className="flex gap-20">

        <div id='contact-info' className="w-[460px] ">
          <h2 className="text-[#581931] text-3xl font-semibold">Contact Information</h2>
            <div id='iconsss' className="text-lg">
                  <div id='1st-icon' className="flex gap-3 items-center ">
                    <div><FiMapPin/></div>
                    <p className="text-neutral-600">123 Catering St. NLP City, Pin - 787001</p>
                  </div>
                  <div id='2nd-icon' className="flex gap-3 items-center ">
                    <div className=''><MdOutlineCall className=''/></div>
                    <p className="text-neutral-600">+91 9101277445</p>
                  </div>
                  <div id='3rd-icon' className="flex gap-3 items-center">
                    <div><AiOutlineMail/></div>
                    <p className="text-neutral-600">hello@platterlyBysd.com</p>
                  </div>
             </div>
        {/* first contact info div */}
        <div className="mt-3 ">
        <h1 className='text-3xl text-[#581931] font-semibold'>Follow us!</h1>
        <div className="flex gap-4 text-lg">
                <div id='1st-icon' className="flex gap-3 items-center ">
                    <div className=''><FaInstagram /></div>
                    <p className="text-neutral-600">Instagram</p>
                  </div>
                </div>
                <div id='1st-icon' className="flex gap-3 text-lg items-center ">
                    <div><FaFacebook/></div>
                    <p className="text-neutral-600">Facebook</p>
                  </div>
                </div>
                <div id='1st-icon' className="flex text-lg gap-3 items-center ">
                    <div><FaWhatsapp/></div>
                    <p className="text-neutral-600">WhatsApp</p>
                  </div>

        </div> {/* end of contact info */}
  
        <div id='form' className="w-[360px]">
          <form action="" className="" onSubmit={handleSubmit}>
            <div className="">
              <h1 className="font-semibold text-3xl text-[#4d192d]">Contact Form</h1>
              <input ref={name} placeholder='Name' type="text" className="w-full bg-white px-2 py-2 focus:border-pink-800 focus:ring-2 rounded-xl focus:ring-pink-100 focus:outline-none my-2" />
              <input ref={email} placeholder='Email' type="email" className="w-full bg-white px-2 py-2 focus:border-pink-800 focus:ring-2 rounded-xl focus:ring-pink-100 focus:outline-none my-2" />
              <input ref={phone} placeholder='Phone' type="number" className="w-full bg-white px-2 py-2 focus:border-pink-800 focus:ring-2 rounded-xl focus:ring-pink-100 focus:outline-none my-2" />
              <textarea ref={message} className='w-full bg-white px-2 py-2 focus:border-pink-800 focus:ring-2 rounded-xl focus:ring-pink-100 focus:outline-none my-2' placeholder='Leave your message...' name="" id=""></textarea>
              <div className="">
                <button className='bg-[#581931] text-white px-3 mt-2 py-2' type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
</div>
</div>    

<h1 className="p-4 mt-5 text-3xl font-semibold text-center text-[#4d192d] ">Let's make your events memorable ✨</h1>
<div className="w-[960px] mb-10 mx-auto mt-2 h-80 rounded-lg overflow-hidden shadow-md">
      <iframe
    title="Platterly Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56761.61839656507!2d94.05851580801763!3d27.231669543049225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374136597cc77825%3A0x17639d9f8396cf6d!2sNorth%20Lakhimpur%2C%20Assam!5e0!3m2!1sen!2sin!4v1757933937322!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0,}}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
  
</div>


    </>
  )
}

export default Contact;
