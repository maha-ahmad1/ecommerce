import type { ImageProps as NextImageProps } from "next/image";
import type { FC } from "react";


export type ImageType = FC<NextImageProps>;

export type ActiveLinkType ={
    href:string;
    children:React.ReactNode;
    className:string;
    
  }