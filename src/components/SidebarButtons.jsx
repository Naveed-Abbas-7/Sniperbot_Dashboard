import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const SidebarButtons = ({ img, title, LinkTo }) => {
  const location = useLocation();

  return (
    <div className="font-poppins">
      <Link to={LinkTo}>
        {" "}
        <button
          className={`flex gap-3 w-[100%] cursor-pointer items-center px-6 py-2.5 rounded-xl hover:bg-[#282c35] ${
            location.pathname === LinkTo ? "bg-[#282828]" : "bg-black"
          }`}
        >
          <div>
            <img className="w-[16px] h-[16px]" src={img} alt="" />
          </div>
          <div className="lg:block hidden">
            <h1 className="text-white text-[12px] ">{title}</h1>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default SidebarButtons;
