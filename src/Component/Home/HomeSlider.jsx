import React, { useEffect, useState } from "react";
import "../Style/Style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function HomeSlider() {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    fetch("/Slider.json")
      .then((res) => res.json())
      .then((data) => {
        setSlider(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <div className="">
      <Swiper
      className=""
        spaceBetween={1}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={2500}
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {slider.map((slide, index) => (
          <SwiperSlide key={index.id}>
            <div className="relative  w-full">
              {/* Image */}
              <div
                className={`w-full h-[600px] bg-cover bg-no-repeat bg-center bg-black/50 bg-blend-multiply`}
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Text Content */}
              <div className="absolute inset-0 text-white flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg mb-1">{slide.subtitle}</p>
                <p className="text-sm max-w-[600px]">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
