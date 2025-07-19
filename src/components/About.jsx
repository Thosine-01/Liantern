import React from 'react'
import { assets } from '../assets/assets'
import Feature from './Feature'

const About = () => {
  return (
        <section className="pt-32 bg-white  md:px-26" id="about">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-sm uppercase text-gray-400 font-semibold mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4">
            What we are all about
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            At Liantern, we’re passionate about empowering students, researchers, and educators around the world with top-tier academic and research support. Whether you need guidance on your thesis, dissertation, or writing projects, our experienced team is here to help you shine
          </p>
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-md transition duration-300">
            Chat With Us →
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 relative">
          <img
            src={assets.about_Image}
            alt="How it works"
            className="w-full rounded-lg shadow-md"
          />

        </div>
      </div>
      <Feature />
    </section>
  )
}

export default About