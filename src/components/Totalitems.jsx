import React from "react";

const Totalitems = ({ heading, total }) => {
  return (
    <div className=" text-white font-semibold rounded-xl  font-poppins bg-black flex justify-center mt-4 ">
      <div className="py-7">
        <h2 className="2xl:text-[28px] text-[14px] max-sm:text-[24px]">{heading}</h2>
        <p className="text-[#e053b6] 2xl:text-[28px] text-[20px] max-sm:text-[24px]">{total}</p>
      </div>
    </div>
  );
};

export default Totalitems;
