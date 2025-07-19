import React from 'react'
import { BadgeCheck } from "lucide-react";

const services = [
  {
    icon: <BadgeCheck size={30} />,
    title: "Research & White paper Writing",
    description:
      "Crafting meticulously researched documents that articulate your ideas with clarity and precision.",
  },
  {
    icon: <BadgeCheck size={30} />,
    title: "Thesis & Dissertation Support",
    description:
      "From concept to completion, we provide hands-on assistance to help you develop robust, comprehensive, and well-structured projects.",
  },
  {
    icon: <BadgeCheck size={30} />,
    title: "Automated Academic tools",
    description:
      "Boost your productivity with innovative tools that streamline your research and enhance the quality of your work.",
  },
  {
    icon: <BadgeCheck size={30} />,
    title: "Support Assistance",
    description:
      "Personalized guidance for overcoming academic challenges—from brainstorming ideas to refining final drafts.",
  },
];

const Service = () => {
  return (
    <section className=" pt-40 pb-32 bg-white text-center md:px-36" id="services">
      <p className="text-sm text-gray-400 uppercase px-5 md:px-0">Our Services</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-4 px-5 md:px-0">
        Our Writing Services
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12 text-sm leading-relaxed px-5 md:px-0">
        Our expert team curates a suite of services designed to meet your academic and research needs:
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