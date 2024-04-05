import React from "react";

const HomeCards = ({ imgURL, title, paragraph, btn, bgcolor, children }) => {
  return (
    <div className="text-white  py-[2rem] ">
      <div className="flex flex-col gap-3 justify-center items-center">
        <img className="w-[160px] h-[140px]" src={imgURL} alt="" />
        <h2 className="text-[24px]">{title}</h2>
        <p className="text-[12px] mx-7">{paragraph}</p>
        <button className="bg-black py-2 px-11 rounded-sm">{btn}</button>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default HomeCards;
