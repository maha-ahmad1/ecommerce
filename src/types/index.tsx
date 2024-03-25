import { Swiper } from "swiper";
import type {
  ReactElement,
  ReactNode,
} from "react";
import type { NextPage } from "next";
import type { MainLayoutProps } from "layouts";

export type Children = ReactNode;

export type ChildrenProp = {
  children: ReactNode;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getNestedLayout?: (page: ReactElement) => ReactNode;
  mainLayoutProps?: Omit<MainLayoutProps, "children">;
};
export interface ImageProps {
  src: string;
  alt: string;
  heading: string;
  paragraph: string;
  content: string;
}

export interface SliderProps {
  images: ImageProps[];
  spaceBetween?: number;
  slidesPerView?: number;
  navigation?: boolean;
  pagination?: boolean;
  scrollbar?: boolean;
  onSwiper?: (swiper: any) => void;
  onSlideChange?: () => void;
  autoplay: any;
}

export interface TypeButton {
  children: any;
  className: any;
  type: any;
  loading: any;
}

export type OnAutoplayTimeLeftArgs = {
  s: Swiper;
  time: number;
  style: { setProperty: (name: string, value: string) => void };
  textContent: string;
  progressCircle: React.RefObject<HTMLDivElement>;
  progressContent: React.RefObject<HTMLDivElement>;
  progress: number;
};

export type CardType = {
  image: string;
  title: string;
  price: string;
  stars: any;
  offer?: string;
  id?: string;
};
