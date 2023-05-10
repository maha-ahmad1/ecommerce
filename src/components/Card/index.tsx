import React from "react";
import { Card } from "types";
import Image from "next/image";
export const card = ({
  imageSrc,
  title,
  price,
  link,
  stars,
  linkText,
  imageAlt,
  ...rest
}: Card) => {
  return (
    <div className="flex my-20 mx-4" {...rest} >
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image
            className="rounded-lg"
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={400}
          />
        </a>
        <div className="px-5 pb-5">
          <a href={link}>
            <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
          

          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {price}
            </span>

          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {linkText}
            </span>

          </div>
        </div>
      </div>
    </div>

  );
};

export default card;
