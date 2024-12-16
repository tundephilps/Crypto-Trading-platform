import React from "react";
import TimeSelector from "../components/TimeSelector";
import CandlestickChart from "../components/CandleStickChart";
import BuySell from "../components/BuySell";
import History from "../components/History";
import Orders from "../components/Orders";

const Dashbaord = () => {
  return (
    <div className="bg-[#1C2127] p-2">
      <div className="grid grid-cols-6 gap-1">
        <div className="col-span-5 ">
          <div className="flex gap-x-1">
            <div className="w-[80%] bg-[rgb(32,37,43)] rounded-md border border-[#262932] p-4">
              <TimeSelector />
              <CandlestickChart />
            </div>
            <div className="w-[20%] bg-[#20252b] rounded-md border border-[#262932] p-2">
              <Orders />
            </div>
          </div>
          <div className="w-full bg-[#20252b] rounded-md border border-[#262932] p-2 mt-1">
            <History />
          </div>
        </div>

        <div className="col-span-1 bg-[#20252b] h-[68%] rounded-md border border-[#262932] p-2">
          <BuySell />
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;
