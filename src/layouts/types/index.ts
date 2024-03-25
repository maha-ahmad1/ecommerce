
import type {
  ReactElement,
  ReactNode,
  HTMLProps,
  FC
} from "react";
export interface MainLayoutProps extends HTMLProps<HTMLDivElement> {
  children?: Children;
  title?: string;
  pageDescription?: string;
  withoutNavbar?: boolean;
  contentClassName?: string;
  pages?:string;
  subtitle?:string;
  pageTitle?:string;
  withoutBreadCrumb?:boolean;
}
export type MainLayoutType = FC<MainLayoutProps>;

import type { NextPage } from "next";

export type Children = ReactNode;

export type ChildrenProp = {
  children: ReactNode;
};

// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   getNestedLayout?: (page: ReactElement) => ReactNode;
//   mainLayoutProps?: Omit<MainLayoutProps, "children">;
// };

export type NativeDivProps = JSX.IntrinsicElements["div"];
export type SpanElementType = HTMLProps<HTMLSpanElement>;


