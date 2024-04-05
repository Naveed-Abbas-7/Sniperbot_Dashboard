import React from "react";

const KeyFeaturesCard = ({ name, text, children }) => {
  return (
    <div className="flex flex-col flex-wrap justify-center gap-6 rounded-2xl  items-center text-center 2xl:w-[400px] w-[300px] py-6  bg-[#140731] p-2 ">
      <h2 className="2xl:text-[54px] md:text-[42px] text-[34px]">{name}</h2>
      <p className="2xl:text-[16px] md:text-[12px] text-[10px] w-[80%] mx-auto  ">{text}</p>
      <div>{children}</div>
    </div>
  );
};

export default KeyFeaturesCard;
