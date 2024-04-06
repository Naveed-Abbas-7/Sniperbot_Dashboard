import React from "react";

const HomeCards = ({ imgURL, title, paragraph, btn, bgcolor, children }) => {
  return (
    <div className="text-white text-center  py-[2rem]">
      <div className="flex flex-col gap-3 justify-center items-center">
        <img className="" src={imgURL} alt="" />
        <h2 className="2xl:text-[32px] text-[24px]">{title}</h2>
        <p className="2xl:text-[16px] text-[12px]">{paragraph}</p>
        <button className="bg-black py-3 px-11 rounded-sm">{btn}</button>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default HomeCards;
