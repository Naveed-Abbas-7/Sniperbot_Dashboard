import React from "react";

const ListItems = ({ sr, imgURL, title, minitext, subtext }) => {
  return (
    <div className="flex w-full justify-between bg-black py-1.5 rounded-full px-3 font-poppins">
      <div className="flex gap-2 items-center">
        <span className="text-white">{sr}</span>
        <img className="" src={imgURL} alt="" width={20} />
        <h1 className="text-white text-[12px]">
          {title}{" "}
          <span className="text-[#A1A1A1] text-[10px]"> {minitext} </span>
        </h1>
      </div>
      <p className="text-green-600 text-[12px]">{subtext}</p>
    </div>
  );
};

export default ListItems;
