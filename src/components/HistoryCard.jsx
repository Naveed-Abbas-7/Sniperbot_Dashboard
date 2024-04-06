import React from "react";

const HistoryCard = ({ key, imgURL, title, text, date, paragraphs }) => {
  return (
    <div className="px-3 xl:py-0 py-1 font-poppins~ flex justify-between">
      <div className="flex text-white gap-3">
        <div>
          <img className="" src={imgURL} alt="" />
        </div>
        <div className="">
          <div className="flex gap-1 items-center">
            <h2 className="font-semibold 2xl:text-[18px] text-[16px] flex flex-col ">
              {title}
            </h2>
            <p className="2xl:text-[14px] text-[12px] text-green-500 ">
              {text}
            </p>
          </div>
          <div>
            <span className=" text-[#A1A1A1] 2xl:text-[14px] text-[12px] py-2 leading-1">
              {paragraphs}
            </span>
          </div>
        </div>
        
      </div>
      <div className="text-[10px] flex">
          <p className="text-[#A1A1A1]">{date}</p>
        </div>
    </div>
  );
};

export default HistoryCard;
