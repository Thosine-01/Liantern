import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Footer from './components/Footer'
import Contact from './components/Contact'
import whatsapp from '../src/assets/whatsapp-icon.svg'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//import Feature from './components/Feature'
import './App.css'


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Contact />
      <Footer />
      <div className='fixed z-50 bottom-10 right-5 lg:right-10'>
        <a href='https://wa.me/message/TWO7OKUXB3JTE1'>
          <img src={whatsapp} alt="WhatsApp" className='w-16 h-16' />
        </a>
      </div>
    </>
  );
}

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more pages like <Route path="/about" element={<AboutPage />} /> if needed */}
      </Routes>
    </Router>
  )
}

export default App;
