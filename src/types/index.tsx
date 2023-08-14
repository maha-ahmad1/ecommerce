import { Swiper } from 'swiper';


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

export interface TypeButton {
  children:any;
  className:any;
  type:any
  loading:any
}

export type OnAutoplayTimeLeftArgs = {
  s: Swiper;
  time: number;
  style: {setProperty: (name: string, value: string) => void};
  textContent: string;
  progressCircle: React.RefObject<HTMLDivElement>;
  progressContent: React.RefObject<HTMLDivElement>;
  progress:number
};

export type CardType ={
  image:string,
  title:string,
  price:string,
  stars:any,
  offer?:string
  
}