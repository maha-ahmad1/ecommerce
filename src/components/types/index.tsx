import type { ImageProps as NextImageProps } from "next/image";
import type {
  HTMLProps,
  FC,
  ReactNode,
  RefAttributes,
  PropsWithChildren,
  ElementType,
} from "react";
export type ImageType = FC<NextImageProps>;

export type ActiveLinkType ={
    href:string;
    children:React.ReactNode;
    className?:string;
    
  }

  type CommonFormElementsType = {
    label?: ReactNode;
    helperText?: ReactNode;
    error?: boolean;
    withoutHelperText?: boolean;
  };

  type IconsVariantsType = {
    startIcon?: ReactNode;
    endIcon?: ReactNode;
  };
  
  export type SizeVariantsType = "small" | "medium" | "large";

export interface InputProps
extends React.InputHTMLAttributes<HTMLInputElement>,
  CommonFormElementsType,
  IconsVariantsType {
inputClassName?: string;
inputSize?: SizeVariantsType;
labelClassName?: string;
focusableLabel?: boolean;
isFloatingLabel?: boolean;
handleEndIcon?: Function;
endIconClassName?: string;
}