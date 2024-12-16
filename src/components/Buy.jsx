import React, { useState } from "react";
import BuyLimit from "./BuyLimit";
import BuyMarket from "./BuyMarket";
import BuyStop from "./BuyStop";

const Buy = () => {
  const [activeTab, setActiveTab] = useState("limit");

  // Function to render the active component
  const renderTabContent = () => {
    switch (activeTab) {
      case "limit":
        return <BuyLimit />;
      case "market":
        return <BuyMarket />;
      case "stop-limit":
        return <BuyStop />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full  mx-auto mt-2">
      {/* Tab Navigation */}
      <div className="flex text-xs items-center">
        <button
          className={`py-2 px-4 ${
            activeTab === "limit"
              ? " font-bold bg-[#353945] rounded-full px-2"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("limit")}
        >
          Limit
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "market"
              ? "font-bold bg-[#353945] rounded-full px-2"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("market")}
        >
          Market
        </button>
        <button
          className={`py-2 px-4 whitespace-nowrap ${
            activeTab === "stop-limit"
              ? "font-bold bg-[#353945] rounded-full px-2"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("stop-limit")}
        >
          Stop-Limit
        </button>
      </div>

      {/* Tab Content */}
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default Buy;
