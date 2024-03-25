import Image from "next/image";
import {
  Phoneicon,
  Carticon,
  Searchicon,
  UserIcon,
  HeartIcon,
  Compare,
} from "lib/@heroicon";
import { useState, useEffect } from "react";
import NavLinks from "../NavLinks";
import { ActiveLink } from "components";
export const Navbar = () => {
  const [selectedValue, setSelectedValue] = useState("English");
  const [option, setOption] = useState("USD");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const handleSelect = (event: any) => {
    setOption(event.target.value);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiv = document.getElementById("scrollDiv");

      if (scrollDiv) {
        if (currentScrollY > 0) {
          scrollDiv.classList.add("hidden");
        } else {
          scrollDiv.classList.remove("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header className="top-0 z-10  sticky w-full">
        <nav>
          <div
            id="scrollDiv"
            className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-20 my-2"
          >
            <div className="sm:flex hidden">
              <select
                value={selectedValue}
                onChange={handleChange}
                className="cursor-pointer border-none text-sm text-black"
              >
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
              </select>
              <select
                value={option}
                onChange={handleSelect}
                className="cursor-pointer border-none	text-sm text-black"
              >
                <option value="USD">USD </option>
                <option value="GBR">GBR</option>
                <option value="GBR">EUR</option>
              </select>
              <div>
                <div className="flex items-center mt-2">
                  <Phoneicon className="w-8 h-4" />
                  <p className="text-sm text-black ">123-456-7890</p>
                </div>
              </div>
            </div>

            <div className="flex items-center mr-4 ">
              <ActiveLink
                href="#"
                className="flex items-center hover:text-red-500 cursor-pointer"
              >
                <Compare className="w-6 h-4" />
                <p className="cursor-pointer text-sm">Compare</p>
              </ActiveLink>
              <ActiveLink
                href="#"
                className="flex items-center hover:text-red-500 cursor-pointer"
              >
                <HeartIcon className="w-6 h-4" />
                <p className="cursor-pointer text-sm">Wishlist</p>
              </ActiveLink>
              <ActiveLink
                href="sign-in"
                className="flex items-center hover:text-red-500 cursor-pointer"
              >
                <UserIcon className="w-6 h-4" />
                <p className="cursor-pointer  text-sm">Login</p>
              </ActiveLink>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="border-t-2 border-gray-100 border-b-2  bg-white fixed w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0  ">
              <div>
                <div className="flex h-16 items-center justify-between ">
                  <div className="flex flex-1 items-center">
                    <a href="#">
                      <Image
                        src="/assets/image/logo.png"
                        width={120}
                        alt="logo"
                        height={100}
                        priority={true}
                      />
                    </a>
                  </div>
                  <NavLinks />
                  <div className="flex flex-1 items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      {/* Cart */}
                      <div className="ml- lg:ml-8 flex">
                        <a
                          href="#"
                          className="group -m-2 flex items-center p-2"
                        >
                          <Searchicon className="h-6 w-6 text-black mr-2  hover:text-red-500" />
                        </a>
                        <a
                          href="#"
                          className="group -m-2 flex items-center p-2"
                        >
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
  );
};
export default Navbar;
