import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

export default function SliderV2() {
  return (
    <div className="my-20 mx-44">
      <Swiper
        slidesPerView={6}
        spaceBetween={2} 
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className=""
      >
        <SwiperSlide className="">
        <Image
            src="/assets/image/cl_logo1.png"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
        <Image
            src="/assets/image/cl_logo2.png"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
        <Image
            src="/assets/image/cl_logo3.png"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
        <Image
            src="/assets/image/cl_logo4.png"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
        <Image
            src="/assets/image/cl_logo5.png"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
        <Image
            src="/assets/image/cl_logo6.png"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
        <Image
            src="/assets/image/cl_logo7.png"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
        <Image
            src="/assets/image/cl_logo3.png"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
        <SwiperSlide className="">
        <Image
            src="/assets/image/cl_logo4.png"
            alt="SwiperSlide"
            width={500}
            height={500}
            className="w-40 "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
