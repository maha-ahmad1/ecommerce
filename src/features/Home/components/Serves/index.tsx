import React from "react";
import { Phoneicon, Compare, Searchicon, HeartIcon } from "lib/@heroicon";
export const Serves = () => {
  return (
    <div className=" max-w-[88rem] mx-auto px-6 md:px-12 xl:px-14">
      <div className=" grid divide-x divide-y  mt-20 mb-6 divide-gray-300 overflow-hidden border border-gray-300  border-r-1 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
        <div className=" py-8 flex justify-start items-start  pl-10">
          <div className="pr-4 pt-2">
            <Phoneicon className="text-red-500 h-8 w-8" />
          </div>
          <div>
            <p className="text-md font-bold">Free Delivery</p>
            <p className="text-gray-500">Worldwide</p>
          </div>
        </div>
        <div className="border border-gray-300 py-8 border-r-0 flex justify-start items-start pl-10">
          <div className="pr-4 pt-2">
            <Compare className="text-red-500 h-8 w-8" />
          </div>
          <div>
            <p className="text-md font-bold">Money Returns</p>
            <p className="text-gray-500">30 Days money return</p>
          </div>
        </div>{" "}
        <div className="border border-gray-300 py-8 border-r-0 flex justify-start items-start pl-10">
          <div className="pr-4 pt-2">
            <Searchicon className="text-red-500 h-8 w-8" />
          </div>
          <div>
            <p className="text-md font-bold">27/4 Online Support</p>
            <p className="text-gray-500">Customer Support</p>
          </div>
        </div>{" "}
        <div className="border border-gray-300 py-8 flex justify-start items-start pl-10">
          <div className="pr-4 pt-2">
            <HeartIcon className="text-red-500 h-8 w-8" />
          </div>
          <div>
            <p className="text-md font-bold">Payment Security</p>
            <p className="text-gray-500">Safe Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Serves;
