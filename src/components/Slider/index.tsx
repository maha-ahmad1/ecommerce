// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper";
import { SliderProps } from "types";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useRef, useState } from 'react';

const Slider = ({
  images,
  spaceBetween = 50,
  slidesPerView = 1,
  navigation = true,
  pagination = true,
  scrollbar = true,
  onSwiper,
  onSlideChange,
}: SliderProps) => {
  const progressCircle = useRef(null);
const progressContent = useRef(null);

const onAutoplayTimeLeft = (s, time, progress) => {
  if (progressCircle.current) {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
  }
  if (progressContent.current) {
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  }
};

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={navigation}
        pagination={{ clickable: true, ...(pagination && {}) }}
        scrollbar={scrollbar}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
        a11y={{ enabled: true }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="relative h-screen   "
          >
            <div className="">
              <Image
                src={image.src}
                alt={image.alt}
                width={1000}
                height={1000}
                className="w-full h-screen "
              />
               <div className="overlay"></div>
              <div className="flex flex-col items-center justify-center h-full w-full text-center z-20">
                {image?.content && (
                  <p className="text-3xl">{image?.content}</p>
                )}
                {image?.heading && (
                  <p className="text-3xl">{image?.heading}</p>
                )}
                {image?.paragraph && (
                  <p className="text-3xl">{image?.paragraph}</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
