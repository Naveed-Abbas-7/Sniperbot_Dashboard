import React from "react";
import user from "../assets/gallery/user.png";
import fire from "../assets/gallery/fire.png";
import eth from "../assets/gallery/eth.png";

const TrendingNFT = ({ onclick, img }) => {
  return (
    <div
      className="bg-black flex flex-col  py-1 px-2
     rounded-xl shadow-md shadow-blue-700 "
    >
      <div>
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="flex gap-2  items-center">
        <div>
          <img className="2xl:w-[40px] w-[30px]" src={user} alt="" />
        </div>
        <div className="flex flex-col py-1">
          <span className="2xl:text-[12px] max-sm:text-[16px]">MoonFall</span>
          <span className="text-[8px] max-sm:text-[12px]">By @JSmith</span>
        </div>
      </div>
      <div className="flex justify-around py-2  ">
        <div className="flex gap-1 mt-1">
          <span className="2xl:text-[12px] text-[9px] max-sm:text-[16px] ">On Sale</span>
          <span>
            <img className="" src={fire} alt="" />
          </span>
        </div>
        <div>
          <span className="2xl:text-[12px] flex text-[10px] max-sm:text-[16px]">
            <img src={eth} alt="" />
            4.89 ETH
          </span>
          <span className=" 2xl:text-[10px] text-[8px] max-sm:text-[14px]">($ 654,874.86)</span>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="py-1.5 px-9  rounded-lg 2xl:text-[14px] text-[10px] max-sm:text-[16px] shadow-sm shadow-pink-700 bg-[#1e081f] ">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default TrendingNFT;
