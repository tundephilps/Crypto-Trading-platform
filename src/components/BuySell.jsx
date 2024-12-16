import React, { useState } from "react";
import Buy from "./Buy";
import Sell from "./Sell";

const BuySell = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Buy", component: <Buy />, borderColor: "border-green-500" },
    { label: "Sell", component: <Sell />, borderColor: "border-[#ff554a]" },
  ];

  return (
    <div className="text-white">
      <div className="bg-[#1c1f24] p-1 rounded-lg w-full flex items-center justify-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-auto w-full py-2 border-slate-700 text-xs focus:outline-none transition-all ${
              activeTab === index
                ? `bg-[#21262c] rounded-lg border ${tab.borderColor}`
                : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].component}</div>
    </div>
  );
};

export default BuySell;
