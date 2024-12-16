import React from "react";

import Face from "../assets/81.png";
import Logo from "../assets/Logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { IoExitOutline } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="bg-[#1c2127] text-white flex items-center justify-between px-4 py-3 border-b border-[#32383f] ">
      {/* Left Section */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <img src={Logo} alt="Sisyphus Logo" className="h-auto w-[90px] " />
        </div>

        <div className="bg-[#eaf0fe] h-6 w-[0.2px]" />

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-blue-400">
            Exchange
          </a>
          <a href="#" className="text-[#a7b1bc]">
            Wallets
          </a>
          <a href="#" className="text-[#a7b1bc]">
            Roqqu Hub
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Profile Dropdown */}
        <div className="lg:flex hidden items-center space-x-2 bg-[#12171d] rounded-md p-2">
          <img src={Face} alt="Profile" className="h-8 w-8 rounded-full" />
          <button className="items-center gap-4 text-sm text-[#a7b1bc] inline-flex">
            Olakunle Te... <IoIosArrowForward />
          </button>
        </div>
        <img
          src={Face}
          alt="Profile"
          className="lg:hidden block h-8 w-8 rounded-full"
        />

        {/* Icons */}
        <button className="text-lg hover:text-blue-400">
          <CiGlobe />
        </button>
        <button className="text-lg hover:text-blue-400">
          <IoExitOutline className="lg:block hidden transform rotate-180 w-6 h-6" />
          {/* Replace with a logout icon */}
          <RiMenu3Fill className="lg:hidden  block transform rotate-180 w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
