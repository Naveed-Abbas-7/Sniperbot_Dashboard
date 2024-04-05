import React from "react";

const HistoryCard = ({ key, imgURL, title, text, date, paragraphs }) => {
  return (
    <div className="px-5 xl:py-0 py-2 ">
      <div className="flex text-white justify-between ">
        <div className=" flex gap-2">
          <img className="2xl:w-[40px] w-[30px]" src={imgURL} alt="" />
          <h2 className="font-semibold 2xl:text-[18px] text-[16px] flex flex-col">{title}</h2>
          <p className="2xl:text-[14px] text-[12px] text-green-500">{text}</p>
        </div>
        <div className="text-[12px]">
          <p className="text-[#A1A1A1]">{date}</p>
        </div>
      </div>
      <span className=" text-[#A1A1A1] 2xl:text-[14px] text-[12px]">{paragraphs}</span>
    </div>
  );
};

export default HistoryCard;
