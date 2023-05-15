import React from 'react'
import Image from "next/image";
import {
  Phoneicon,
  MapPinIcon,
  EnvelopeOpenIcon,
} from "lib/@heroicon";
import { footerNavigation } from 'layouts/data';
export const Footer = () => {
  return (
<>
<footer className="bg-[#202325]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="space-y-12 md:grid md:grid-cols-1 md:gap-8 md:space-y-0">
                <div>
                  <h3 className="text-sm font-medium text-white">
                    Contact Info
                  </h3>
                  <ul className="mt-6 space-y-4">
                    <li className="text-sm flex md:gap-3 leading-6 text-gray-300">
                      <MapPinIcon
                        width={20}
                        height={20}
                        className="hidden md:block"
                      />
                      <span>
                        123 Street, Old Trafford, New South London , UK
                      </span>
                    </li>
                    <li className="text-sm flex md:gap-3 leading-6 text-gray-300 ">
                      <EnvelopeOpenIcon
                        width={20}
                        height={20}
                        className="hidden md:block"
                      />
                      info@sitename.com
                    </li>
                    <li className="text-sm flex md:gap-3 leading-6 text-gray-300 ">
                      <Phoneicon
                        width={20}
                        height={20}
                        className="hidden md:block"
                      />
                      + 457 789 789 65
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 ">
                <div>
                  <h3 className="text-sm font-medium text-white">
                    Useful Links
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.Useful_Links.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-red-500"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">My Account</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.Account.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-300  hover:text-red-500"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-16 xl:mt-0">
              <h3 className="text-sm font-medium text-white">
                Subscribe Our Newsletter
              </h3>
              <p className="mt-6 mb-6 text-sm text-gray-300">
                If you want to get an email from us every time we have a new
                special offer, then sign up here!
              </p>
              <form className="mt-2 flex sm:max-w-md">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="w-full py-2 pr-10 pl-3 border rounded-full border-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Your email address
"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center mx-2">
                    <button className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center focus:outline-none">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 21h6m3-3V8a5 5 0 00-5-5H8a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5v-3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 py-10 flex justify-between">
            <p className="text-sm text-gray-400">
              Copyright &copy; 2023 . Built with by Maha Ahmad
            </p>
            <div className="sm:flex hidden ">
              <Image
                className="mr-2"
                src="/assets/image/express.png"
                alt=""
                width={40}
                height={40}
              />
              <Image
                className="mr-2"
                src="/assets/image/discover.png"
                alt=""
                width={40}
                height={40}
              />{" "}
              <Image
                className="mr-2"
                src="/assets/image/master_card.png"
                alt=""
                width={40}
                height={40}
              />{" "}
              <Image
                className="mr-2"
                src="/assets/image/paypal.png"
                alt=""
                width={40}
                height={40}
              />
              <Image
                className="mr-2"
                src="/assets/image/visa.png"
                alt=""
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </footer>
</>
  )
}
export default Footer;