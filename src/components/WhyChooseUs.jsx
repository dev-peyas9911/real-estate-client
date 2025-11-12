import React from "react";
import { ShieldCheck, Users, Star } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={36} className="text-white" />,
    title: "Trusted & Secure",
    description:
      "All listings are verified and transactions are fully secured for your peace of mind.",
    bg: "bg-gradient-to-r from-indigo-500 to-purple-500",
  },
  {
    icon: <Users size={36} className="text-white" />,
    title: "Expert Agents",
    description:
      "Professional agents guide you through every step to find the perfect property.",
    bg: "bg-gradient-to-r from-green-400 to-teal-500",
  },
  {
    icon: <Star size={36} className="text-white" />,
    title: "Top Rated Services",
    description:
      "Thousands of happy clients and excellent customer feedback on every deal.",
    bg: "bg-gradient-to-r from-pink-500 to-red-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-11/12 mx-auto my-16 relative">
      <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-12 relative z-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.bg} rounded-xl p-8 shadow-2xl transform transition-transform duration-500 hover:-translate-y-3 hover:scale-105 text-white flex flex-col items-center text-center w-full md:w-1/3`}
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-white/90">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Optional background shapes for more uniqueness */}
      <div className="absolute z-0 top-0 left-0 w-64 h-64 bg-indigo-100 rounded-full opacity-20 mix-blend-multiply"></div>
      <div className="absolute z-0 bottom-0 right-0 w-64 h-64 bg-pink-100 rounded-full opacity-20 mix-blend-multiply"></div>
    </section>
  );
};

export default WhyChooseUs;
