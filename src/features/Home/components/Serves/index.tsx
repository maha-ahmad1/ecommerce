import React from "react";
import { Phoneicon, Compare, Searchicon, HeartIcon } from "lib/@heroicon";
export const Serves = () => {
  return (
    <div className="flex mt-20 mb-6 justify-center px-28">
      <div className="border border-gray-300 py-8 border-r-0 flex justify-start items-start pr-28 pl-10">
        <div className="pr-4 pt-2">
          <Phoneicon className="text-red-500 h-8 w-8" />
        </div>
        <div>
          <p className="text-md font-bold">Free Delivery</p>
          <p className="text-gray-500">Worldwide</p>
        </div>
      </div>
      <div className="border border-gray-300 py-8 border-r-0 flex justify-start items-start pr-28 pl-10">
        <div className="pr-4 pt-2">
          <Compare className="text-red-500 h-8 w-8" />
        </div>
        <div>
          <p className="text-md font-bold">Money Returns</p>
          <p className="text-gray-500">30 Days money return</p>
        </div>
      </div>{" "}
      <div className="border border-gray-300 py-8 border-r-0 flex justify-start items-start pr-28 pl-10">
        <div className="pr-4 pt-2">
          <Searchicon className="text-red-500 h-8 w-8" />
        </div>
        <div>
          <p className="text-md font-bold">27/4 Online Support</p>
          <p className="text-gray-500">Customer Support</p>
        </div>
      </div>{" "}
      <div className="border border-gray-300 py-8 flex justify-start items-start pr-28 pl-10">
        <div className="pr-4 pt-2">
          <HeartIcon className="text-red-500 h-8 w-8" />
        </div>
        <div>
          <p className="text-md font-bold">Payment Security</p>
          <p className="text-gray-500">Safe Payment</p>
        </div>
      </div>
    </div>
  );
};
export default Serves;
