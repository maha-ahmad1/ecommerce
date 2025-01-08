import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { IMAGES } from "data";

export default function SliderV2() {
  const breakpoints = {
    500: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 5,
    },
  };

  return (
    <div className="mt-20 mb-10 px-16 2xl:px-64">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={6}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={breakpoints}
      >
          {IMAGES.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <Image
                src={imageUrl}
                alt={`SwiperSlide ${index}`}
                width={200}
                height={200}
                className="px-4"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
