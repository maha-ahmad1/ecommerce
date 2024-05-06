import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination,Navigation,Scrollbar,A11y ,Autoplay} from "swiper";
import { IMAGES } from "data";

export default function SliderV2() {
  const breakpoints = {
    452: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 4,
    },
    1500:{
      slidesPerView: 6,

    }
  };

  return (
    <div className="lg:mx-60 mx-10 mb-20 mt-20 ">
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
        <SwiperSlide key={index} className="">
          <Image
            src={imageUrl}
            alt={`SwiperSlide ${index}`}
            width={700}
            height={700}
            className=" w-40"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
}
