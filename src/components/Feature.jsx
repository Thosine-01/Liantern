import React from 'react'
import { BadgeCheck } from 'lucide-react';

const features = [
  {
    title: "Experienced & Certified",
    description: "Facilisi risus faucibus platea sit risus lorem proin molestie nibh",
    bg: "bg-white",
    textColor: "text-[#0F172A]",
    iconBg: "text-green-500",
  },
  {
    title: "We Focus on Well Organize Content.",
    description: "Facilisi risus faucibus platea sit risus lorem proin molestie nibh",
    bg: "bg-white",
    textColor: "text-[#0F172A]",
    iconBg: "text-green-500",
  },
  {
    title: "Always Deliver On Time.",
    description: "Facilisi risus faucibus platea sit risus lorem proin molestie nibh",
    bg: "bg-[#ff8904]",
    textColor: "text-white",
    iconBg: "text-white",
  },
];

const Feature = () => {

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-lg hover:shadow-sm p-8 ${feature.bg} ${feature.textColor} text-center shadow-md`}
            >
              <div className="flex justify-center mb-4">
                <BadgeCheck className={`w-8 h-8 ${feature.iconBg}`} />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature