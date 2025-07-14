import React from 'react'

const Footer = () => {
  return (
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm px-36 bg-[#0C1A34] py-20'>
        <div>
            <div className="text-3xl font-bold text-amber-50 tracking-tight mb-3">
            LianTern
            </div>
            <p className='w-full sm:w-2/3 text-amber-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus error eos aliquam voluptates illum ipsa, eveniet quae commodi dolores voluptas.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5 text-amber-50'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-amber-50'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Order Now</li>
            </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5 text-amber-50'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-amber-50'>
            <li>support@gmail.com</li>
            <li>+234 906 555 5677</li>
          </ul>
        </div>
    </div>
  )
}

export default Footer