

export interface SliderProps {
    spaceBetween?: number;
    slidesPerView?: number;
    navigation?: boolean;
    pagination?: boolean;
    scrollbar?: boolean;
    onSwiper?: (swiper: any) => void;
    onSlideChange?: () => void;
  }