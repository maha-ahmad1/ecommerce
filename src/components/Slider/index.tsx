// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { SliderProps } from "types";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={navigation}
        pagination={{ clickable: true, ...(pagination && {}) }}
        scrollbar={{ draggable: true, ...(scrollbar && {}) }}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={1000}
              height={1000}
              className="w-full h-screen"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white p-4">
              <h2 className="text-lg font-bold">Slider Title</h2>
              <p className="text-sm">Slider subtitle or description</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
