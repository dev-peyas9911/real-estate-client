import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Find Your Dream Home",
      subtitle:
        "Search thousands of properties for sale or rent.",
      img: "https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/web_sml-4ee24fa4ad9acc5ce8d5.jpg",
    },
    {
      id: 2,
      title: "Trusted Real Estate Agents",
      subtitle: "We connect you with verified agents for hassle-free property deals.",
      img: "https://rmmatac.com/wp-content/uploads/2022/02/Real-Estate.jpg",
    },
    {
      id: 3,
      title: "Sell or Rent Your Property Easily",
      subtitle: "List your property quickly and reach thousands of potential buyers or tenants.",
      img: "https://nextbigtechnology.com/wp-content/uploads/2019/11/shutterstock_198883310-e1499838393321-2.jpg",
    },
  ];

  return (
    <div className="w-full h-[80vh] mt-5">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-2xl shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-[70vh] flex flex-col justify-center items-center text-center text-white"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

              <div className="relative z-10 px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 drop-shadow">
                  {slide.subtitle}
                </p>
                <button className="bg-[#FF7B54] hover:bg-[#FF9B73] text-white px-6 py-3 rounded-xl text-lg font-medium transition-colors">
                  Explore Services
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;