import React from "react";
import { CardType } from "types";
import Stars from "components/Stars";
import Image from "components/Image";
import Link from "next/link";

export const card = ({ image, title, price, stars, ...rest }: CardType) => {
  return (
    <div className="bg-white" {...rest}>
      <div className="mx-auto max-w-2xl pb-4 sm:px-6 sm:pt-0 lg:max-w-7xl lg:px-0 border border-gray-200 rounded-lg shadow">
        <div className="group relative hover:bg-gray-300 hover:rounded-t-md ">
          <div className="min-h-80 w-full overflow-hidden rounded-t-md lg:aspect-none group-hover:opacity-50 lg:h-80">
            <div className="flex justify-center items-center h-80 bg-white">
              <Image
                src={image}
                alt="image"
                className="h-full w-auto object-cover object-center"
                width={500}
                height={500}
                priority={true}
              />
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col items-center">
          <div>
            <h3 className="text-md font-medium text-gray-900 ">
              <Link href="#">
                <p className="truncate w-40 ">{title}</p>
              </Link>
            </h3>
          </div>
          <div className="flex py-2 ">
            <div>
              <span className="text-md font-bold text-red-400 px-2 ">
                {price}
              </span>
            </div>
            <div>
              <span className="text-gray-400 font-medium text-sm line-through">
                {price}
              </span>
            </div>
          </div>
          <div></div>
          <div className="flex">
            <Stars rating={stars} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;