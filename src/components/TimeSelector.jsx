import React, { useState } from "react";
import { FaChartLine, FaExpandArrowsAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiMiniArrowUturnLeft, HiMiniArrowUturnRight } from "react-icons/hi2";
import { BsArrowsAngleExpand } from "react-icons/bs";
const TimeSelector = () => {
  const [active, setActive] = useState("1D"); // Active time option

  // Time options
  const timeOptions = ["1H", "2H", "4H", "1D", "1W", "1M"];

  return (
    <div className=" text-[#a7b1bc] flex items-center justify-between   ">
      {/* Time Label */}
      <div className="flex items-center space-x-4">
        <span className=" text-sm">Time</span>

        {/* Time Options */}
        <div className="flex items-center space-x-3">
          {timeOptions.map((time) => (
            <button
              key={time}
              onClick={() => setActive(time)}
              className={`text-sm font-medium px-3 py-1 rounded-full ${
                active === time
                  ? "bg-gray-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {time}
            </button>
          ))}
        </div>

        {/* Indicators and Expand Icons */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* Chart Icon */}
          <button className="text-gray-400 hover:text-white">
            <MdKeyboardArrowDown size={16} />
            <span className="sr-only">Indicators</span>
          </button>
          <div className="bg-[#393d41] h-6 w-[0.2px] mx-8" />
          <button className="text-gray-400 hover:text-white">
            <FaChartLine size={16} />
            <span className="sr-only">Indicators</span>
          </button>

          <div className="bg-[#393d41] h-6 w-[0.2px] mx-8" />
          {/* Expand Icon */}
          <button className="text-gray-400 hover:text-white">
            Fx Indicators
            <span className="sr-only">Expand</span>
          </button>

          <div className="bg-[#393d41] h-6 w-[0.2px] mx-8" />
          <HiMiniArrowUturnLeft className="text-[#393d41]" />
          <HiMiniArrowUturnRight className="text-[#393d41]" />

          <div className="bg-[#393d41] h-6 w-[0.2px] mx-8" />
        </div>
      </div>

      <div>
        <BsArrowsAngleExpand className="text-white text-1xl" />
      </div>
    </div>
  );
};

export default TimeSelector;
