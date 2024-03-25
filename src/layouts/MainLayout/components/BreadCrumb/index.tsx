import React from "react";
import Image from "next/image";
import { ActiveLink } from "components";
export const BreadCrumb = ({ pageTitle,subtitle,pages }: any) => {
  return (
    <div className="w-full h-40 bg-[#f7f8fb] mt-16  ">
      <div className="flex justify-between pt-16  mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <p className="text-2xl font-bold">{pageTitle}</p>
        <div className="flex">
          <ActiveLink className="" href="/">{pages} </ActiveLink>
          <div className="pr-4 pt-2">
            <Image
              alt="Right Arrow"
              src="assets/image/rightarrow.svg"
              height={20}
              width={100}
              className="h-2 w-2"
            />
          </div>
          <p className=" text-[#687188]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
