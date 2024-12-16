import React, { useState } from "react";
import {
  FaDollarSign,
  FaArrowUp,
  FaArrowDown,
  FaChartBar,
} from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CgArrowDown, CgArrowUp } from "react-icons/cg";
import { VscGraph } from "react-icons/vsc";
import Crypto1 from "../assets/Crypto1.png";

import Crypto2 from "../assets/Crypto2.png";
import DropdownCoins from "./DropdownCoins";

const PriceTicker = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle state
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="bg-[#1c2127] px-2 pt-2">
      <div className="bg-[#20252b] rounded-md text-white flex items-center  px-6 py-3 ">
        {/* Left Section: Pair and Price */}
        <div className="flex items-center space-x-3">
          {/* Pair Icon */}
          <div className="flex items-center gap-3 relative">
            <div class="flex -space-x-4 rtl:space-x-reverse">
              <img
                class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src={Crypto1}
                alt=""
              />
              <img
                class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src={Crypto2}
                alt=""
              />
            </div>
            <span className="text-white font-semibold  text-[24px]">
              BTC/USDT
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <IoIosArrowUp size={20} />
              ) : (
                <IoIosArrowDown size={20} />
              )}
            </button>

            {isOpen && <DropdownCoins />}
          </div>
          {/* Current Price */}
          <span className="text-green-500 text-lg font-semibold">$20,634</span>
        </div>

        <div className="bg-[#393d41] h-9 w-[0.2px] mx-8" />
        {/* Middle Section: Stats */}
        <div className="flex items-center space-x-8">
          {/* 24h Change */}
          <div className="flex flex-col items-center mr-8">
            <span className="text-sm text-[#a7b1bc] inline-flex items-center gap-1">
              <MdAccessTime /> 24h Change
            </span>
            <span className="text-[#00c076] font-semibold">520.80 +1.25%</span>
          </div>

          <div className="bg-[#393d41] h-9 w-[0.2px] " />
          {/* 24h High */}
          <div className="flex flex-col items-start pr-8">
            <span className="text-sm text-[#a7b1bc] inline-flex items-center ">
              <CgArrowUp className="mx-1 " /> 24h High
            </span>

            <span className="text-white font-semibold">520.80 +1.25%</span>
          </div>

          <div className="bg-[#393d41] h-9 w-[0.2px] " />
          {/* 24h Low */}
          <div className="flex flex-col items-start pr-8">
            <span className="text-sm text-[#a7b1bc] inline-flex items-center">
              {" "}
              <CgArrowDown className="mx-1 " /> 24h Low
            </span>
            <span className="text-white font-semibold">520.80 +1.25%</span>
          </div>
          <div className="bg-[#393d41] h-9 w-[0.2px] " />
          {/* 24h Low */}
          <div className="flex flex-col items-start pr-8">
            <span className="text-sm text-[#a7b1bc] inline-flex items-center">
              {" "}
              <VscGraph className="mr-1 " /> 24h volume
            </span>
            <span className="text-white font-semibold">75.655.26</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTicker;
