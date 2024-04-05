import React from "react";

const Totalitems = ({ heading, total }) => {
  return (
    <div className=" text-white font-semibold rounded-xl w-[170px] font-poppins bg-black flex justify-center">
      <div className="py-7">
        <h2 className="text-[16px]">{heading}</h2>
        <p className="text-[#e053b6] text-[20px]">{total}</p>
      </div>
    </div>
  );
};

export default Totalitems;
