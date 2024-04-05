import React from "react";

export function Card({ image, heading, sub_text, ...props }) {
  const { img, title, subtext } = props;

  return (
    <div className="flex flex-col w-full text-[16px] gap-4 border font-poppins rounded-2xl border-black py-3 pl-2 ml-3 pr-2 shadow-md shadow-pink-700  ">
      <div className="text-white flex justify-between  ">
        <div className="flex gap-3">
          <img src={props.img} alt="" />
          <h6>{props.title}</h6>
        </div>
        <span className="text-green-500 text-[14px]">See all</span>
      </div>
      <div className="flex flex-col gap-3 ">{props.children}</div>
    </div>
  );
}
