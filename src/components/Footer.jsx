import React from 'react'
import { assets } from '../assets/assets'
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';

const Footer = () => {
  return (
        <div className='pt-20 px-10 md:px-36 bg-[#0C1A34] py-10'>
          <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm '>
              <div>
                  <div className="text-3xl font-bold text-amber-50 tracking-tight mb-3">
                    <img src={assets.lightlogo} alt="" className='w-36'/>
                  </div>
                  <p className='w-full sm:w-2/3 text-amber-50'>Liantern is a platform where knowledge shines brightest. We offer professional academic, scholarly, and technical support tailored to students, researchers, and educators across the globe.</p>
              </div>
              <div>
                  <p className='text-xl font-medium mb-5 text-amber-50'>COMPANY</p>
                  <ul className='flex flex-col gap-1 text-amber-50'>
                      <li className='hover:text-amber-600'><a href="#hero">Home</a></li>
                      <li className='hover:text-amber-600'><a href="#about">About</a></li>
                      <li className='hover:text-amber-600'><a href="#services">Services</a></li>
                      <li className='hover:text-amber-600'><a href="https://wa.me/message/TWO7OKUXB3JTE1">Chat With Us</a></li>
                  </ul>
              </div>
              <div>
                <p className='text-xl font-medium mb-5 text-amber-50'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-amber-50'>
                  <li>strynderhelp@gmail.com</li>
                  <li>+234 810 784 4964</li>
                </ul>
              </div>
          </div>

          <div className='border-t border-amber-50 mt-5 flex flex-col md:flex-row  justify-center gap-20 items-center pt-5'>
              <p className='text-center text-amber-50 mt-5'>© 2025 Liantern. All rights reserved.</p>
              {/*<div className='flex justify-center gap-5 mt-5'>
                  <Linkedin className='text-amber-50 hover:text-amber-600' size={20}/>
                  <Instagram className='text-amber-50 hover:text-amber-600' size={20}/>
                  <Twitter className='text-amber-50 hover:text-amber-600' size={20}/>
              </div>*/}
          </div>
        </div>

  )
}

export default Footer