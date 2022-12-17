import React from "react";
import mobileTrade from "../assets/images/mobile-trade.png";
import desktopTrade from "../assets/images/desktop-trade.png";
import mobileFlat from "../assets/images/mobile-fiat.png";
import QrCode from "./QrCode";
import { AiFillApple } from "react-icons/ai";
import { FaAndroid } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { AiTwotoneApi } from "react-icons/ai";
import { TouchData1 } from "../data/data";

const Benefits = () => {
  return (
    <div className="w-full h-full mt-[40px] text-center mb-[50px]">
      <div className="max-w-full w-[1300px] h-full m-auto p-5">
        <div className="space-y-4 mb-[20px] sm:mb-[60px]">
          <p className="font-unbounded text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
            Benefits of BNB DADDY
          </p>
          <p className="font-unbounded text-sm sm:text-md md:text-[16px] text-gray-600 dark:text-[#848e9c]">
            Compatible with multiple devices, start trading with safety and
            convenience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {TouchData1.map((data, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="border-red-700 border-r-4 group-hover:bg-[#f5f5f5] dark:group-hover:bg-[#2b3139] p-4 rounded-md space-y-3">
                <div>
                  {/* <img src= {data.icon} alt="icons" className="w-[50px] sm:w-[65px]" /> */}
                </div>
                <div>
                  <h1 className="font-unbounded text-gray-800 dark:text-gray-200 text-md font-semibold">
                    {data.title}
                  </h1>
                </div>
                <div>
                  <p className="font-unbounded text-gray-600 dark:text-gray-400 text-sm">
                    {data.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
