import React from "react";
import person from "../assets/gallery/user.png";
import monkey from "../assets/tokens/monkey.png";
import { FiMoreHorizontal } from "react-icons/fi";

const TokenCard = () => {
  return (
    <div className=" bg-black text-white py-2 px-1 rounded-lg md:w-[140px] w-[200px]  shadow-sm shadow-pink-700">
      <div className="text-white flex items-center gap-3">
        <img className="h-[22px] w-[22px]" src={person} alt="" />
        <h2 className="font-semibold text-[10px] font-orbitron">
          Basic copper
        </h2>
        <FiMoreHorizontal />
      </div>
      <div className="py-2 flex justify-center">
        <img src={monkey} alt="" />
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <span className="text-[11px] font-semibold font-orbitron">
            Monkey #009
          </span>
          <span className="text-[6px]">highest bid</span>
        </div>
        <div className="text-[8px]">1/1</div>
      </div>
      <div className="flex justify-between items-center mx-2">
        <span className="text-[6px]">Bid 2.93 ETH</span>
        <button className="text-[8px] py-1 px-3 rounded-full shadow-sm shadow-pink-700">
          Place a Bid
        </button>
      </div>
    </div>
  );
};

export default TokenCard;
