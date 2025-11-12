import React from "react";
import { Home, Building2, Search, MapPin } from "lucide-react";

const services = [
  {
    icon: <Home size={28} className="text-white" />,
    title: "Residential Properties",
    description:
      "Find apartments, villas, and houses to rent or buy with ease.",
    bg: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    icon: <Building2 size={28} className="text-white" />,
    title: "Commercial Spaces",
    description: "Offices, shops, and warehouses for your business needs.",
    bg: "bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500",
  },
  {
    icon: <Search size={28} className="text-white" />,
    title: "Property Search",
    description:
      "Advanced search options to quickly find the property that suits you.",
    bg: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500",
  },
  {
    icon: <MapPin size={28} className="text-white" />,
    title: "Location Services",
    description: "We provide detailed maps and area guides for all listings.",
    bg: "bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-600",
  },
];

const OurServices = () => {
  return (
    <section className="w-11/12 mx-auto my-16">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bg} rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center transform transition-transform duration-500 hover:-translate-y-3 hover:scale-105`}
          >
            <div className="bg-white/30 w-16 h-16 flex items-center justify-center rounded-full mb-4">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              {service.title}
            </h3>
            <p className="text-white/90">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
