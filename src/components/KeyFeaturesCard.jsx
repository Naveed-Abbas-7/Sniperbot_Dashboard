import React from "react";

const KeyFeaturesCard = ({ name, text, children }) => {
  return (
    <div className="flex flex-col flex-wrap justify-center gap-6 rounded-2xl  items-center text-center   py-6  bg-[#140731] p-2 ">
      <h2 className="2xl:text-[58px] md:text-[42px] text-[34px] max-lg:text-[48px]">{name}</h2>
      <p className="2xl:text-[22px] md:text-[12px] text-[10px] max-lg:text-[20px] w-[80%] mx-auto  ">{text}</p>
      <div>{children}</div>
    </div>
  );
};

export default KeyFeaturesCard;
