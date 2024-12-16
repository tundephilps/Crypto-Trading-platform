import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaBitcoin, FaDollarSign } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { BiSearchAlt } from "react-icons/bi";
const markets = [
  {
    id: 1,
    icon: <FaBitcoin />,
    pair: "BTC - USDT",
    price: "$23,234.6",
    change: "+0.005%",
  },
  {
    id: 2,
    icon: <FaBitcoin />,
    pair: "BTC - USDT",
    price: "$23,234.6",
    change: "+0.005%",
  },
  {
    id: 3,
    icon: <FaBitcoin />,
    pair: "BTC - USDT",
    price: "$23,234.6",
    change: "+0.005%",
  },
];

const DropdownCoins = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="bg-[#1c2127] lg:w-[432px] absolute top-[155%] z-50 p-4 text-white rounded-md w-full max-w-md mx-auto">
      {/* Header */}
      <div className="mb-2">
        <p className="font-semibold">Select Market</p>
        <div className="relative mt-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#20252b] border border-[#373B3F] text-white p-2 pl-8 rounded-md focus:outline-none"
          />
          <BiSearchAlt className="absolute top-3 left-2 text-gray-400" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4  border-b border-slate-600 pb-2">
        {["All", "USD", "BTC"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-full text-xs ${
              activeTab === tab ? "bg-gray-600" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Market List */}
      <ul>
        {markets.map((market) => (
          <li
            key={market.id}
            className="flex items-center justify-between py-2  border-gray-700"
          >
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">{market.icon}</span>
              <span>{market.pair}</span>
            </div>
            <div>
              <p>{market.price}</p>
              <p className="text-green-500">{market.change}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownCoins;
