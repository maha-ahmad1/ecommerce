import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Arrow } from "lib/@heroicon";
export const BreadCrumb = () => {
    const router = useRouter();
    const pathname = router.pathname;
  return (
    <div className="w-full h-40 bg-[#f7f8fb] mt-16  ">  
      <div className="flex justify-between pt-16  mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">  
        <p className="text-2xl font-bold">Shop</p>
        <div className="flex">
        <Link href="/" className={`${pathname === '/' ? 'text-red-500 ' : ''}mr-4 hover:text-red-500`}>
          Home
        </Link> 
        <div>
        {/* <Arrow width={200} height={10} /> */}

        </div>
        <p>shop</p>
         </div>
         </div>
    </div>
  );
};
