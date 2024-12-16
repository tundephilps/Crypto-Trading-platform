import React, { useState } from "react";

// Define your components for each tab
const OpenOrders = () => {
  return (
    <div className="p-4 items-center text-center flex flex-col justify-center py-32 ">
      <h2 className="text-lg font-bold">No Open Orders</h2>
      <p className="w-[30vw] text-center items-center justify-center flex">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar
        nullam sit imperdiet pulvinar.
      </p>
    </div>
  );
};

const Positions = () => {
  return (
    <div className="p-4 items-center text-center py-32">
      <h2 className="text-lg font-bold">No Open Positions</h2>{" "}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar
        nullam sit imperdiet pulvinar.
      </p>
    </div>
  );
};

const OrderHistory = () => {
  return (
    <div className="p-4 items-center text-center py-32">
      <h2 className="text-lg font-bold">No Open Order History</h2>{" "}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar
        nullam sit imperdiet pulvinar.
      </p>
    </div>
  );
};

const TradeHistory = () => {
  return (
    <div className="p-4 items-center text-center py-32">
      <h2 className="text-lg font-bold">No Trade History</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar
        nullam sit imperdiet pulvinar.
      </p>
    </div>
  );
};

const History = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Open Orders", component: <OpenOrders /> },
    { label: "Positions", component: <Positions /> },
    { label: "Order History", component: <OrderHistory /> },
    { label: "Trade History", component: <TradeHistory /> },
  ];

  return (
    <div className=" text-white">
      <div className=" bg-[#1c1f24]   p-1 rounded-lg w-[607px]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-8 py-2  border-slate-700  focus:outline-none ${
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

export default History;
