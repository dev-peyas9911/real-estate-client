import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Amazing platform! Found my dream house within days.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Smith",
    feedback: "Professional agents and excellent service.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mike Johnson",
    feedback: "Easy to use, fast property listings, very reliable.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="w-11/12 mx-auto my-16">
      <h2 className="text-4xl font-bold text-center mb-12">Happy Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transform transition duration-300"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <div className="flex mb-2">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {testimonial.feedback}
            </p>
            <h4 className="font-semibold text-white">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
