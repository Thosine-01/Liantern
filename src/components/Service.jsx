import React from 'react'
import { BadgeCheck } from "lucide-react";

const services = [
  {
    icon: <BadgeCheck size={30} />,
    title: "Research & White paper Writing",
    description:
      "Gravida vulputate aliquet tempor sitque sed pretium non urna sed etid aenean hartera quam placerat adipiscing.",
  },
  {
    icon: <BadgeCheck size={30} />,
    title: "Thesis & Dissertation SUpport",
    description:
      "Gravida vulputate aliquet tempor sitque sed pretium non urna sed etid aenean hartera quam placerat adipiscing.",
  },
  {
    icon: <BadgeCheck size={30} />,
    title: "Automated Academic tools",
    description:
      "Gravida vulputate aliquet tempor sitque sed pretium non urna sed etid aenean hartera quam placerat adipiscing.",
  },
  {
    icon: <BadgeCheck size={30} />,
    title: "Support Assistance",
    description:
      "Gravida vulputate aliquet tempor sitque sed pretium non urna sed etid aenean hartera quam placerat adipiscing.",
  },
];

const Service = () => {
  return (
    <section className=" pt-20 pb-20 bg-white text-center md:px-36" id="services">
      <p className="text-sm text-gray-400 uppercase px-5 md:px-0">Our Services</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-4 px-5 md:px-0">
        Our Writing Services
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12 text-sm leading-relaxed px-5 md:px-0">
        Gravida vulputate aliquet tempor sitque sed pretium nonurna etid aenean
        hartera quam placerat adipiscing penatibus aliquam
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[720px] mx-auto px-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#0C1A34] text-white rounded-md px-6 py-8 flex flex-col justify-between relative"
          >
            <div className="mb-6 flex items-center justify-between">
              {service.icon}
              <button className=" bg-yellow-400 text-black font-bold w-8 h-8 rounded-full flex items-center justify-center">
              →
            </button>
            </div>
            <h3 className="font-bold text-lg mb-2">{service.title}</h3>
            <p className="text-sm text-gray-300">{service.description}</p>


          </div>
        ))}
      </div>
    </section>
  )
}

export default Service