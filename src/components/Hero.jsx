import React from 'react'
import {assets} from '../assets/assets'
import hero from '../assets/black_man_writing_researching.jpg'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative text-white w-[100%] h-[120vh] overflow-x-hidden"
    >
        <div className='relative '>
            {/* Background Image */}
            <img src={assets.hero_Image} alt="" className='w-[100%] h-[120vh] object-fill'/>
            {/* Overlay */}
            <div className="w-full h-[120vh] absolute top-0 left-0 bg-black/50"></div>
        </div>


      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-2xl">
          <p className="text-4xl mb-2  md:text-[56px] font-bold">Welcome to Liantern</p>
          <h1 className="text-xl md:text-2xl font-semibold leading-tight mb-6">
            Where Knowledge Shines Brightest.
          </h1>
          <p className="text-gray-200 text-lg mb-8">
            Academic, scholarly, and technical support tailored for students, researchers, and educators around the world.
          </p>
          <a
            href="#services"
            className="inline-block bg-orange-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition"
          >
            → Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero