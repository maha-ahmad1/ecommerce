import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import {
  Phoneicon,
  Carticon,
  MapPinIcon,
  EnvelopeOpenIcon,
  Searchicon,
  UserIcon,
  HeartIcon,
  Compare,
} from "lib/@heroicon";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];

const footerNavigation = {
  Useful_Links: [
    { name: "About Us", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Location", href: "#" },
    { name: "Affiliates", href: "#" },
    { name: "Contact", href: "#" },
  ],
  Account: [
    { name: "My Account", href: "#" },
    { name: "Discount", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Orders History", href: "#" },
    { name: "Order Tracking", href: "#" },
  ],
};

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Create an account
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {/* Currency selector */}
                  <form>
                    <div className="inline-block">
                      <label htmlFor="mobile-currency" className="sr-only">
                        Currency
                      </label>
                      <div className="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
                        <select
                          id="mobile-currency"
                          name="currency"
                          className="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                        >
                          {currencies.map((currency) => (
                            <option key={currency}>{currency}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                          <ChevronDownIcon
                            className="h-5 w-5 text-gray-500"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Hero section */}
      <div>
        <div className="">
          {/* <Image
            src="assets/image/logo.png"
            alt="logo"
            className="h-full w-full object-cover object-center"
            width={100}
            height={50}
          /> */}
        </div>
        <div />

        {/* Navigation */}
        <header className="relative z-10 mt-2">
          <nav>
            {/* Top navigation */}
            <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-14 my-2">
              <div className="flex">
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
                  <a
                    href="#"
                    className="text-sm text-black hover:text-red-500 "
                  >
                    Wishlist
                  </a>
                </div>
                <div className="flex items-center">
                  <UserIcon className="w-6 h-4" />
                  <a
                    href="#"
                    className="text-sm text-black hover:text-red-500 "
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>

            {/* Secondary navigation */}
            <div className="border-t-2 border-gray-100">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div>
                  <div className="flex h-16 items-center justify-between">
                    <div className="hidden lg:flex lg:flex-1 lg:items-center">
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

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex flex-1 items-center lg:hidden">
                      <button
                        type="button"
                        className="-ml-2 p-2 text-black"
                        onClick={() => setMobileMenuOpen(true)}
                      >
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Search */}
                      <a href="#" className="ml-2 p-2 text-black">
                        <span className="sr-only">Search</span>
                        <MagnifyingGlassIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </a>
                    </div>

                    {/* Logo (lg-) */}
                    <a href="#" className="lg:hidden">
                      <span className="sr-only">Your Company</span>
                      <img
                        src="https://tailwindui.com/img/logos/mark.svg?color=white"
                        alt=""
                        className="h-8 w-auto"
                      />
                    </a>
                    <div>
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
                        {/* Help */}
                        <a href="#" className="p-2 text-black lg:hidden">
                          <QuestionMarkCircleIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </a>

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

      <footer className="bg-[#202325]	mt-16">
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
              <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
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
            <div className="flex">
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
    </div>
  );
}
