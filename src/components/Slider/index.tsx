// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import {SliderProps} from "types"
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


interface ImageProps {
    src: string;
    alt: string;
  }
  
  const Slider = ({ images }: { images: ImageProps[] }) => {
    return (
      <Swiper
        modules={[ Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image.src} alt={image.alt} width={1000} height={1000} className="w-full h-screen" />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  
export default Slider;
