import React from "react";
import searchicon from "../assets/Icons/Layer 2.png";
import bellicon from "../assets/Icons/notification-bing.png";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";

const Nav = ({ page, children }) => {
  const [toggle, settoggle] = useState(true);

  const handlemenu = () => {
    settoggle(!toggle);
  };
  return (
    <section className="bg-[#000] text-white py-6 ">
      <nav className=" flex  lg:gap-[120px] gap-[20px] px-3 max-md:hidden">
        <div className="text-[#fff] flex items-center lg:gap-[3rem] gap-[1rem]">
          <div>
            <h1 className="lg:text-[28px] text-[20px] font-semibold font-orbitron">
              0xalpha.io
            </h1>
          </div>
          <div>
            <h2 className="lg:text-[28px] text-[22px] font-semibold">{page}</h2>
            <p className="ld:text-[12px] text-[10px]">Updated on 23 may 2023</p>
          </div>
        </div>
        <div className="flex items-center gap-[36px]">
          <div className="flex gap-2 items-center">
            {/* <button className="flex border-2 py-2.5 rounded-full pr-5"> </button> */}
            <img src={searchicon} alt="" className="" />
            <input
              type="Text"
              className="bg-black text-white pl-3 rounded-full py-3"
              placeholder="Search your coind"
            />

            <button className="rounded-full bg-[#151718] p-3">
              <img src={bellicon} alt="" />
            </button>
          </div>
          <div className="flex text-sm gap-2 fo ">
            <button className="lg:text-[14px] text-[10px] border-2 lg:py-2 p-1 rounded-2xl lg:px-4 px-2">
              Portfolio
            </button>
            <button className="lg:text-[12px] text-[10px] border-2 lg:py-2 p-1 rounded-2xl lg:px-4 px-2">
              Analysis
            </button>
            <button className="lg:text-[12px] text-[10px] border-2 lg:py-2 p-1 rounded-2xl lg:px-4 px-2">
              History
            </button>
          </div>
          <div>
            <button className="lg:text-[12px] text-[10px] border-2 lg:py-3 py-2 text-sm rounded-full font-bold lg:px-4 px-2 bg-[#0B0121] lg:text-[12px] text-[10px] ">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
      <div className="text-[32px] md:hidden block absolute top-3 right-4">
        <GrMenu />
      </div>
      <div>{}</div>
    </section>
  );
};

export default Nav;
