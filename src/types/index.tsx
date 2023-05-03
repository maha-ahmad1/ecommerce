export interface ImageProps {
  src: string;
  alt: string;
  heading:string;
  paragraph:string;
  content:string;

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
    autoplay:any
  }