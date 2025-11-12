import React from 'react';
import HeroSlider from '../components/HeroSlider';
import WhyChooseUs from '../components/WhyChooseUs';
import OurServices from '../components/OurServices';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>
            {/* Hero slider */}
            <HeroSlider></HeroSlider>
            {/* Featured Real Estate Section */}
            
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