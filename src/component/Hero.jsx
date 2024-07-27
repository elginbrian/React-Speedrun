import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-6">Grow with data.</h1>
        <div className="flex justify-center md:mt-0 mt-4">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold">Fast, flexible financing for</p>
          <ReactTyped className="text-yellow-400 md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2" strings={["BTB", "BTC", "SASS"]} typeSpeed={120} backSpeed={140} loop />
        </div>
        <p className="md:text-xl text-l font-bold text-gray-500 mt-6">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
