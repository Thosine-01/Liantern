import React from 'react'

const Contact = () => {
  return (
    <section className="pt-20 md:pt-40 pb-32  bg-gray-100 md:px-36" id="contact">
      <div className="container mx-auto px-4">
        {/* Left Contact Info */}
        <div className="space-y-6 px-6 md:px-0 text-center">
          
          <div className=''>
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            We’re here to help.
            </h2>
            <p className="text-gray-600">
            Are you also Struggling with your academics, you can also speak with us here for tips and guidance for free.
            </p>
            <div className='border-3 border-amber-500 mx-16 md:mx-[20rem] mt-3 '/>
          </div>



          <div>
            <h4 className="font-semibold text-lg text-gray-800 mb-1">Email</h4>
            <p className="text-gray-600">strynderhelp@gmail.com</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-gray-800 mb-1">Phone</h4>
            <p className="text-gray-600">+234 810 784 4964</p>
          </div>
        </div>

        {/* Right Contact Form */}
        {/*<div className="w-full lg:w-1/2 bg-white shadow-md rounded-md p-6">
          <form className="space-y-4">
           
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border rounded px-4 py-2 focus:outline-none bg-gray-50"
                />
              </div>
            </div>
  

            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full border rounded px-4 py-2 focus:outline-none bg-gray-50"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded px-4 py-2 focus:outline-none bg-gray-50"
                />
              </div>
            </div>

           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded px-4 py-2 focus:outline-none bg-gray-50"
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border rounded px-4 py-2 focus:outline-none bg-gray-50"
              ></textarea>
            </div>

            
            <div>
              <button
                type="submit"
                className="bg-amber-600 text-white font-semibold px-6 py-3 w-full rounded hover:bg-red-600 transition flex items-center justify-center gap-2"
              >
                
                Submit
              </button>
            </div>
          </form>
        </div>*/}
      </div>
    </section>
  )
}

export default Contact