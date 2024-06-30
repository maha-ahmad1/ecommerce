import React from "react";
// import { Phoneicon, Compare, Searchicon, HeartIcon } from "lib/@heroicon";
import Image from "next/image";
export const Serves = () => {
  return (
    <div className=" max-w-[88rem] mx-auto px-6 md:px-12 xl:px-14">
      <div className=" grid divide-x divide-y  mt-20 mb-6 divide-gray-300 overflow-hidden border border-gray-300  border-r-1 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
        <div className="py-6  flex justify-start items-start  md:pl-2">
        <div className="pr-4 md:pl-2 md:pr-2 pl-4 pt-2">
        <Image
              src="/assets/image/shipped.png"
              alt="Free Delivery"
              width={40}
              height={40}
            />{" "}
          </div>
          <div>
            <p className="text-md font-semibold">Free Delivery</p>
            <p className="text-gray-500">Worldwide</p>
          </div>
        </div>
        <div className="border border-gray-300 py-6  border-r-0 flex justify-start items-start   md:pl-0 ">
        <div className="pr-4 md:pl-2 md:pr-2 pl-4 pt-2">
            <Image
              src="/assets/image/save-money.png"
              alt="Free Delivery"
              width={40}
              height={40}
            />{" "}
          </div>
          <div>
            <p className="text-md font-semibold">Money Returns</p>
            <p className="text-gray-500">30 Days money return</p>
          </div>
        </div>{" "}
        <div className="border border-gray-300 py-6  border-r-0 flex justify-start items-start  md:pl-2">
        <div className="pr-4 md:pl-2 md:pr-2 pl-4 pt-2">
        <Image
              src="/assets/image/customer-service.png"
              alt="Free Delivery"
              width={40}
              height={40}
            />{" "}
          </div>
          <div>
            <p className="text-md font-semibold">27/4 Online Support</p>
            <p className="text-gray-500">Customer Support</p>
          </div>
        </div>{" "}
        <div className="border border-gray-300 py-6  flex justify-start items-start md:pl-2">
        <div className="pr-4 md:pl-2 md:pr-2 pl-4 pt-2">
        <Image
              src="/assets/image/security-payment.png"
              alt="Free Delivery"
              width={40}
              height={40}
            />{" "}
          </div>
          <div>
            <p className="text-md font-semibold">Payment Security</p>
            <p className="text-gray-500">Safe Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Serves;
