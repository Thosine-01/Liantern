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
    <section className="pb-20 bg-white text-center px-36">
      <p className="text-sm text-gray-400 uppercase">Our Services</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Our Writing Services
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12 text-sm leading-relaxed">
        Gravida vulputate aliquet tempor sitque sed pretium nonurna etid aenean
        hartera quam placerat adipiscing penatibus aliquam
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#0C1A34] text-white rounded-md px-6 py-8 flex flex-col justify-between relative"
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="font-bold text-lg mb-2">{service.title}</h3>
            <p className="text-sm text-gray-300">{service.description}</p>

            <button className="absolute top-4 right-4 bg-yellow-400 text-black font-bold w-6 h-6 rounded-full flex items-center justify-center">
              →
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service