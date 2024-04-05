import React from "react";

import { Link, useLocation } from "react-router-dom";

const BottomBarButtons = ({ img, LinkTo }) => {
  const location = useLocation();

  return (
    <div className="">
      <div className="font-poppins">
        <Link to={LinkTo}>
          {" "}
          <button
            className={`flex  cursor-pointer items-center justify-center py-4 px-5 rounded-xl hover:bg-[#282c35] ${
              location.pathname === LinkTo ? "bg-[#494848]" : ""
            }`}
          >
            <div>
              <img className="w-[20px] h-[18px]" src={img} alt="" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BottomBarButtons;
