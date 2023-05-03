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
        scrollbar={scrollbar}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
        a11y={{ enabled: true }}

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
