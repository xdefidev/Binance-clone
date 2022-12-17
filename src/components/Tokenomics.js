import React, { useState } from "react";
import Tokenomicss from "../assets/Tokenomics";

const Tokenomics = () => {
  return (
    <div className="title-test py-5 bg-gradient-to-b from-transparent via-black to-black text-center">
      <div className="my-[20px] sm:mb-[60px] max-w-full w-[1300px] mx-auto px-5 ">
        <h1 className="font-unbounded text-gray-800 dark:text-gray-200 text-2xl sm:text-3xl md:text-4xl font-semibold ">
          Tokenomics
        </h1>
      </div>
      <Tokenomicss />
    </div>
  );
};

export default Tokenomics;
