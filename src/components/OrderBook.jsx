import React from "react";
import Order1 from "../assets/Order1.png";

import Order2 from "../assets/Order2.png";
import Order3 from "../assets/Order3.png";
import { MdArrowDropDown } from "react-icons/md";

const OrderBook = () => {
  // Example data for the order book
  const orders = [
    { price: 36920.12, amount: 0.758965, total: 28020.98, type: "sell" },
    { price: 36920.12, amount: 0.758965, total: 28020.98, type: "sell" },
    { price: 36920.12, amount: 0.758965, total: 28020.98, type: "sell" },
    { price: 36920.12, amount: 0.758965, total: 28020.98, type: "sell" },
    { price: 36920.12, amount: 0.758965, total: 28020.98, type: "sell" },
    { price: 36641.2, amount: 0.758965, total: 36641.2, type: "mid" }, // Mid price
    { price: 36920.12, amount: 0.758965, total: 28020.98, type: "buy" },
    { price: 36920.12, amount: 0.758965, total: 28020.98, type: "buy" },
    { price: 36920.12, amount: 0.758965, total: 28020.98, type: "buy" },
    { price: 36920.12, amount: 0.758965, total: 28020.98, type: "buy" },
    { price: 36920.12, amount: 0.758965, total: 28020.98, type: "buy" },
  ];

  return (
    <div className=" mx-auto  text-white py-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between pb-2 cursor-pointer">
        <div className="inline-flex space-x-1">
          <div className="bg-slate-600 p-2 rounded-sm">
            <img src={Order1} className="h-4 w-4" />
          </div>
          <div className="hover:bg-slate-600 p-2 rounded-sm">
            <img src={Order1} className="h-4 w-4" />
          </div>{" "}
          <div className="hover:bg-slate-600 p-2 rounded-sm">
            <img src={Order1} className="h-4 w-4" />
          </div>
        </div>
        <div className="inline-flex items-center gap-2 bg-slate-700 p-1 rounded-md">
          <p className="text-xs">10</p>
          <MdArrowDropDown />
        </div>
      </div>

      {/* Table Header */}
      <div className="flex justify-between text-gray-400 text-xs pb-2 border-b border-gray-700">
        <span>
          Price
          <br /> (USDT)
        </span>
        <span className="text-end">
          Amounts
          <br /> (BTC)
        </span>
        <span>Total</span>
      </div>

      {/* Table Rows */}
      <div>
        {orders.map((order, index) => (
          <div
            key={index}
            className={`flex justify-between py-1 text-sm ${
              order.type === "sell"
                ? "text-red-400"
                : order.type === "buy"
                ? "text-green-400"
                : "text-green-300 font-semibold"
            } ${
              order.type === "mid"
                ? "text-2xl flex justify-center items-center"
                : ""
            }`}
          >
            {order.type === "mid" ? (
              // Center Mid Price
              <div className="flex w-full space-x-6 text-base items-center justify-center">
                <p> {order.price} </p> <span className="text-green-500">↑</span>{" "}
                <p className="text-white">{order.price} </p>
              </div>
            ) : (
              // Sell/Buy Rows
              <>
                <span>{order.price.toFixed(2)}</span>
                <span>{order.amount.toFixed(6)}</span>
                <span>{order.total.toFixed(2)}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderBook;
