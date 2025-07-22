import { useState, useEffect } from "react"
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import React from 'react'
import { assets } from "../assets/assets";
import { MessageCircleMore } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menu , setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

    // Listen to scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    console.log('menu :', menu)

    //console.log(isScrolled);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
    <header className={`fixed w-full z-50 ${
        isScrolled ? "bg-white shadow-md transition ease-out duration-300" : "bg-white md:bg-transparent"}`}>
      <nav className="container mx-auto px-7 md:px-24 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className={` font-bold tracking-tight ${isScrolled ? "text-black" : "text-black md:text-white"}`}>
          {isScrolled ?
            <img src={assets.lightlogo} alt="" className="w-36" />
          :
            <img src={assets.darklogo} alt="" className="w-36"/>
          }
        </div>

        {/* Nav Links */}
        <div className='flex  items-center space-x-10'>
            <ul className={`hidden md:flex space-x-10 font-medium ${isScrolled ? "text-black" : "text-white"}`}>
                <li>
                    <a href="#hero" className="hover:text-orange-400 transition">
                    Home
                    </a>
                </li>
                <li>
                    <a href="#about" className="hover:text-orange-400 transition">
                    About
                    </a>
                </li>
                <li>
                    <a href="#services" className="hover:text-orange-400 transition">
                    Services
                    </a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-orange-400 transition">
                    Contact
                    </a>
                </li>
            </ul>

            {/* Action Button */}
            <button className='hidden md:block bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition '>
               <MessageCircleMore size={20} className="inline-block mr-2 mt-[-6px] text-amber-50" />
                Chat With Us
            </button>
        </div>



        {/* Mobile Menu Button (Placeholder) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-black md:text-white text-[26px] hover:bg-amber-50 px-3 py-1 border-2 border-amber-300">
            {menu ? <X size={30}/> : <Menu size={30}/>}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={` bg-white absolute  flex flex-col w-full left-0 top-20 py-10 border-b-2 border-b-gray-500 ${menu ? "block transition-all duration-1000 ease-out" : "hidden"} `}>
          <ul className="text-black  flex flex-col items-center w-full justify-center pb-8 space-y-6 text-xl font-bold">
            <li className="hover:text-amber-600"><a href="#hero">Home</a></li>
            <li className="hover:text-amber-600"><a href="#about">About</a></li>
            <li className="hover:text-amber-600"><a href="#services">Services</a></li>
            <li className="hover:text-amber-600"><a href="#contact">Contact</a></li>
          </ul>

            <button className=' bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition w-8/12 mx-auto text-xl'>
              <MessageCircleMore size={20} className="inline-block mr-2 text-amber-50" />
                Order Now
            </button>
          
        </div>

      </nav>
    </header>
    </div>
  )
}

export default Navbar