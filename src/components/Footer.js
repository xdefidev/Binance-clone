import React from "react";
import { FooterData } from "../data/data";
import AccordionFooter from "./AccordionFooter";

const Footer = () => {
  return (
    <div className="bg-[#9d0208] pt-[60px] p-5 lg:px-[54px]">
      <div className=" max-w-full w-[1300px] h-full m-auto border-b border-b-gray-500 border-opacity-20 pb-[25px]">
        <div className="hidden md:flex flex-wrap gap-4">
          {FooterData.map((data, index) => (
            <div key={index} className="flex-auto space-y-2">
              <h1 className="font-unbounded text-[#e4e7eb] font-semibold text-lg">
                {data.item}
              </h1>
              <div
                key={index}
                className={`${
                  data.item == "Join the Community"
                    ? `flex flex-wrap gap-4 items-center`
                    : "block space-y-2"
                } `}
              >
                {data.subItem.map((subData, index) => (
                  <div
                    key={index}
                    className={`${
                      data.item == "Join the Community"
                        ? "lg:flex-none"
                        : "flex-1"
                    }space-y-6 group`}
                  >
                    <a
                      href="#"
                      className="w-full text-[#e4e7eb] group-hover:text-[#e4e7eb] dark:group-hover:text-[#e4e7eb] dark:text-[#e4e7eb] text-sm inline-block font-unbounded "
                    >
                      {subData}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Accordion Footer */}
        <div className="block md:hidden">
          <AccordionFooter />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-[35px] text-sm text-[#e4e7eb] dark:text-[#848e9c]">
        <p>BNBDADDY © {new Date().getUTCFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
