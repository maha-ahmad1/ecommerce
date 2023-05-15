// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { SliderProps } from "types";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useRef } from "react";

const Slider = ({
  images,
  spaceBetween = 50,
  slidesPerView = 1,
  navigation = true,
  pagination = true,
  scrollbar = true,
  autoplay = true,
  onSwiper,
  onSlideChange,
  ...rest
}: SliderProps) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number ) => {
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
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
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
    <SwiperSlide key={index} className="relative h-screen">
    <div className="relative">
      <Image
        src={image.src}
        alt={image.alt}
        width={1000}
        height={1000}
        priority={true}
        className="w-full h-screen"
      />
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 ">
        {image?.heading && <p className="text-1xl font-bold">{image?.heading}</p>}
        {image?.paragraph && <p className="text-4xl font-bold mt-4 ">{image?.paragraph}</p>}
        {image?.content && <p className="text-md text-gray-500 w-26 mt-4">{image?.content}</p>}
      </div>
    </div>
  </SwiperSlide>
  
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
