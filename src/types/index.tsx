export interface ImageProps {
  src: string;
  alt: string;

}

export interface SliderProps {
    images:ImageProps[]
    spaceBetween?: number;
    slidesPerView?: number;
    navigation?: boolean;
    pagination?: boolean;
    scrollbar?: boolean;
    onSwiper?: (swiper: any) => void;
    onSlideChange?: () => void;
  }