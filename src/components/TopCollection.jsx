import React from "react";

import diamond from "../assets/gallery/diamond.png";

const TopCollection = ({ sr, name, img }) => {
  return (
    <div className="flex items-center gap-1 w-full ">
      <div className="md:text-[12px] text-[10px]">{sr}</div>
      <div>
        <img className="w-[38px] h-[38px]" src={img} alt="" />
      </div>
      <div>
        <div className="lg:text-[14px] text-[12px]">{name} </div>
        <div className="flex gap-2">
          <span className="lg:text-[11px] text-[9px]">Floor price</span>
          <span className="flex gap-1 items-center">
            <img className="lg:w-[10px] w-[8px] lg:h-[15px] h-[11px]" src={diamond} alt="" />
            <span className="lg:text-[12px] text-[9px]">21</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopCollection;
