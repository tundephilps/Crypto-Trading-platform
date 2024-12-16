import React, { useState } from "react";
import RecentTrades from "./RecentTrades";
import OrderBook from "./OrderBook";

const Orders = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Order Book", component: <OrderBook /> },
    { label: "Recent trades", component: <RecentTrades /> },
  ];

  return (
    <div className=" text-white">
      <div className=" bg-[#1c1f24]   p-1 rounded-lg w-full whitespace-nowrap items-center flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-auto w-full py-2  border-slate-700 text-xs focus:outline-none ${
              activeTab === index ? "bg-[#21262c] rounded-lg border-r-0" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="">{tabs[activeTab].component}</div>
    </div>
  );
};

export default Orders;
