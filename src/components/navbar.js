"use client"
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-900 border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <div className="flex items-center">
              <div className="h-8 mr-3 text-white " alt="Flowbite Logo"> Empire <span className="bg-orange-500 text-black rounded-md"> technology</span> </div>
            </div>
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:text-white"
            aria-controls="navbar-default"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? "block" : "hidden"}`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-900">
              <Link href="/">
                <div className="block py-2 pl-3 pr-4 rounded text-white" aria-current="page">Home</div>
              </Link>
              <Link href="/about">
                <div className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-700 hover:text-white" aria-current="page">About</div>
              </Link>
              <Link href="/price">
                <div className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-700 hover:text-white">Services</div>
              </Link>
              <Link href="/contact">
                <div className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-700 hover:text-white">Contact</div>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
