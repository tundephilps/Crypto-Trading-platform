import React, { useState } from "react";
import NG from "../assets/flag1.jpg";

import GB from "../assets/flag2.png";

import US from "../assets/flag3.png";

import EU from "../assets/flag4.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const currencies = [
  { name: "Nigerian Naira", code: "NGN", flag: NG },
  { name: "British Pounds", code: "GBP", flag: GB },
  { name: "US Dollars", code: "USD", flag: US },
  { name: "European Euros", code: "EUR", flag: EU },
];

const CurrencyDropdown = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle selection
  const handleSelect = (currency) => {
    setSelectedCurrency(currency);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className=" w-12">
      {/* Selected Currency Button */}
      <button
        onClick={toggleDropdown}
        className="w-full  text-white  rounded-md flex items-center justify-between"
      >
        <span>{selectedCurrency.code}</span>
        <span className="text-gray-400">
          <MdOutlineKeyboardArrowDown />{" "}
        </span>
      </button>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-[0%] w-full mt-1 bg-gray-800 text-white rounded-xl shadow-lg z-10">
          {currencies.map((currency) => (
            <div
              key={currency.code}
              onClick={() => handleSelect(currency)}
              className={`flex items-center justify-between p-3 cursor-pointer hover:bg-gray-700 ${
                selectedCurrency.code === currency.code ? "bg-gray-700" : ""
              }`}
            >
              <div className="flex items-center">
                <div className="rounded-full h-8 w-8 bg-cover mr-3 object-contain cover-fill relative">
                  <img
                    className="  rounded-full bg-cover  "
                    src={currency.flag}
                  />
                  {selectedCurrency.code === currency.code && (
                    <span className="text-green-500 absolute right-0 top-6">
                      <IoIosCheckmarkCircle />
                    </span>
                  )}
                </div>

                <div>
                  <div className="text-sm">{currency.name}</div>
                  <div className="text-xs text-gray-400">{currency.code}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
