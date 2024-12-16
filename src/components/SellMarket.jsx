import React, { useState } from "react";
import { FiClock } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import CurrencyDropdown from "./CurrencyDropdown";
const SellMarket = () => {
  const [limitPrice, setLimitPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Good till cancelled");
  const [postOnly, setPostOnly] = useState(false);

  const total = (limitPrice * amount || 0).toFixed(2);

  return (
    <div className="w-full  mx-auto mt-4 text-white ">
      {/* Amount */}
      <div className="mb-4">
        <div className="relative border border-[#373b3f] rounded-md">
          <input
            type="number"
            placeholder="Amount"
            value={limitPrice}
            onChange={(e) => setLimitPrice(e.target.value)}
            className="w-full text-xs bg-transparent text-[#a7b1bc] p-2 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute right-2 top-3 text-sm text-[#a7b1bc]">
            0.00 USD
          </span>
          <span className="absolute left-14 top-3.5 text-sm text-[#a7b1bc]">
            <FiClock className="text-xs " />
          </span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mb-4 text-[#a7b1bc]">
        <span>Total</span>
        <span>{total} </span>
      </div>

      {/* Buy Button */}
      <button
        className="w-full py-2 text-white rounded-md transition transform hover:scale-105"
        style={{
          background:
            "linear-gradient(90deg, #483BEB 0%, #7847E1 47.92%, #DD568D 96.35%)",
        }}
      >
        Buy BTC
      </button>

      {/* Footer Info */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-sm text-[#a7b1bc]">
        <div className="flex justify-between mb-2 relative">
          <div>
            <span>Total account value</span>
            <p className="text-white text-base font-bold">0.00</p>
          </div>{" "}
          <CurrencyDropdown />
        </div>
        <div className="flex justify-between">
          <div>
            <span>Open Orders</span>
            <p className="text-white text-base font-bold">0.00</p>
          </div>{" "}
          <div>
            <span>Avaliable</span>
            <p className="text-white text-base font-bold">0.00</p>
          </div>
        </div>
      </div>
      <button className=" mt-12 bg-[#2764ff] px-4 py-2 text-white rounded-md transition transform hover:scale-105">
        Deposit
      </button>
    </div>
  );
};

export default SellMarket;
