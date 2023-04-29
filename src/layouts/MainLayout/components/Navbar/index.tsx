import Image from "next/image";
import {
  Phoneicon,
  Carticon,
  Searchicon,
  UserIcon,
  HeartIcon,
  Compare,
} from "lib/@heroicon";

export const Navbar = () => {
  return(
  <div>
    <header className="top-0 z-10 mt-2 sticky w-full">
      <nav>
        <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-20 my-2">
          <div className="sm:flex hidden">
            <select className="cursor-pointer border-none text-sm text-black">
              <option value="english" selected>
                English
              </option>
              <option value="arabic">Arabic</option>
            </select>
            <select className="cursor-pointer border-none	text-sm text-black">
              <option value="USD">USD </option>
              <option value="GBR">GBR</option>
              <option value="EUR">EUR</option>
            </select>
            <div>
              <div className="flex items-center mt-2">
                <Phoneicon className="w-8 h-4" />
                <p className="text-sm text-black ">123-456-7890</p>
              </div>
            </div>
          </div>

          <div className="flex items-center mr-4 ">
            <div className="flex items-center mr-4  ">
              <Compare className="w-6 h-4" />
              <a href="#" className="text-sm text-black  hover:text-red-500">
                Compare
              </a>
            </div>
            <div className="flex items-center mr-4">
              <HeartIcon className="w-6 h-4" />
              <a href="#" className="text-sm text-black hover:text-red-500 ">
                Wishlist
              </a>
            </div>
            <div className="flex items-center">
              <UserIcon className="w-6 h-4" />
              <a href="#" className="text-sm text-black hover:text-red-500 ">
                Login
              </a>
            </div>
          </div>
        </div>

        {/* Secondary navigation */}
        <div className="border-t-2 border-gray-100 border-b-2 ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0  ">
            <div>
              <div className="flex h-16 items-center justify-between ">
                <div className="flex flex-1 items-center">
                  <a href="#">
                    <span className="sr-only">Your Company</span>
                    <Image
                      src="/assets/image/logo.png"
                      width={120}
                      alt="logo"
                      height={100}
                    />
                  </a>
                </div>
                <div className="hidden sm:block ">
                  <a href="#" className="mr-4 hover:text-red-500">
                    HOME
                  </a>
                  <a href="#" className="mr-4  hover:text-red-500">
                    SHOP
                  </a>
                  <a href="#" className="mr-4  hover:text-red-500">
                    {" "}
                    PRODUCT
                  </a>
                  <a href="#" className="mr-4  hover:text-red-500">
                    BLOG
                  </a>
                  <a href="#" className="mr-4  hover:text-red-500">
                    CONTACT US
                  </a>
                </div>

                <div className="flex flex-1 items-center justify-end">
                  <div className="flex items-center lg:ml-8">
                    {/* Cart */}
                    <div className="ml- lg:ml-8 flex">
                      <a href="#" className="group -m-2 flex items-center p-2">
                        <Searchicon className="h-6 w-6 text-black mr-2  hover:text-red-500" />
                      </a>
                      <a href="#" className="group -m-2 flex items-center p-2">
                        <Carticon className="h-6 w-6  text-black  hover:text-red-500" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
  )
};
export default Navbar;