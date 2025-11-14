import React from "react";
import HeroSlider from "../components/HeroSlider";
import WhyChooseUs from "../components/WhyChooseUs";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";
import { useLoaderData } from "react-router";
import ModelCard from "../components/ModelCard";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      {/* Hero slider */}
      <HeroSlider></HeroSlider>
      {/* Featured Real Estate Section */}
      <div>
        <h2 className="text-4xl font-bold text-center mb-12">Featured Latest Property</h2>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.map((model) => (
            <ModelCard key={model._id} model={model} />
          ))}
        </div>
      </div>
      {/* Why Choose us Section */}
      <WhyChooseUs></WhyChooseUs>
      {/* Our Services */}
      <OurServices></OurServices>
      {/* Our Happy Clients */}
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
