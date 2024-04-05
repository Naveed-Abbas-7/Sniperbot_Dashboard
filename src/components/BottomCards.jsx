import React from "react";

const BottomCards = ({ title, paragraph, btn, children }) => {
  return (
    <div className="">
      <span className="2xl:text-[28px] text-[20px]">{title} </span>
      <p className="2xl:text-[18px] md:text-[14px] text-[10px] max-sm:text-[12px] text-[#D1D1D1] py-3">
        {paragraph}The TUF Sniper Bot is a market-leading tool for trading newly
        released tokens on decentralized exchanges. With the speed of our Sniper
        Bot, you will be able to take positions on new launches, once trading
        has been enabled on the DEXs. Using the built-in simulator, you will be
        able to predict your outcomes and protections needed.
      </p>
      <button className="md:py-2 p-1 md:px-4 px-2 border-2 rounded-2xl md:text-[16px] text-[10px]">
        {btn} See More
      </button>

      <div>{children}</div>
    </div>
  );
};

export default BottomCards;
