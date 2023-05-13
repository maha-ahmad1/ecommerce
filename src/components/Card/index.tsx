import React from "react";
import { CardType } from "types";
import Image from "next/image";
export const card = ({
  imageSrc,
  title,
  price,
  link,
  stars,
  linkText,
  imageAlt,
  offer,
  ...rest
}: CardType) => {
  return (
    <div className="bg-white" {...rest}>
      <div className="mx-auto max-w-2xl pb-4 sm:px-6 sm:pt-0 lg:max-w-7xl lg:px-0 border border-gray-200 rounded-lg shadow">
        <div className="group relative hover:bg-gray-300 hover:rounded-t-md ">
          <div className="min-h-80 w-full overflow-hidden rounded-t-md lg:aspect-none group-hover:opacity-50 lg:h-80 ">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover object-center sm:h-full sm:w-full"
            />
          </div>
          </div>
          <div className="mt-2 flex flex-col items-center">
            <div>
              <h3 className="text-md font-medium text-gray-900 ">
                <a href={link}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {title}
                </a>
              </h3>
            </div>
            <div className="flex py-2 ">
              <div>
                <span className="text-md font-bold text-red-400 px-2 ">
                  {offer}
                </span>
              </div>
              <div>
                <span className="text-gray-400 font-medium text-sm line-through">
                  {price}
                </span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-900 ">{stars}</p>
          </div>
        </div>
      </div>

  );
};

export default card;
