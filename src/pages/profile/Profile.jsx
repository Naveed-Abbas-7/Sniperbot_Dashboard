import React from "react";
import Nav from "../../components/Nav";
import SideBar from "../../components/SideBar";
import { TableCard } from "../../components/TableCard";
import profilepic from "../../assets/Icons/profile/profilepic.png";
import ethereum from "../../assets/Icons/profile/ethereum.png";
import unsplash from "../../assets/Icons/profile/unsplash.png";
import unspash2 from "../../assets/Icons/profile/unsplash2.png";
import BottomBar from "../../components/BottomBar";

const Profile = () => {
  return (
    <>
      <div className="text-white">
        <div>
          <Nav page={"Profile"} />
        </div>
        <div className="bg-[#19191A] flex font-poppins ">
          <div className="bg-black mt-6 ml-3 rounded-md">
            <SideBar />
          </div>
          <div className="w-full flex justify-center flex-col">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-center mt-3">
                <img
                  className="w-[170px] h-[170px] shadow-lg shadow-pink-800 rounded-full"
                  src={profilepic}
                  alt=""
                />
                <span className="text-[28px] font-semibold">Alexim</span>
              </div>
              <div className="flex justify-center md:gap-11 gap-5">
                <div className="flex flex-col items-center">
                  <span className="bg-black py-4 flex justify-center rounded-2xl text-[18px]  md:w-[70px] w-[60px] font-semibold">
                    120
                  </span>
                  <span className="text-[14px] font-semibold">Asset</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="bg-black py-4 flex justify-center rounded-2xl text-[18px] md:w-[70px] w-[60px] font-semibold">
                    10K
                  </span>
                  <span className="text-[14px] font-semibold">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="bg-black py-4 flex justify-center rounded-2xl text-[18px] md:w-[70px] w-[60px] font-semibold">
                    70K
                  </span>
                  <span className="text-[14px] font-semibold">Likes</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="bg-black py-4 flex justify-center rounded-2xl text-[18px] md:w-[70px] w-[60px] font-semibold">
                    60
                  </span>
                  <span className="text-[14px] font-semibold">Bidding</span>
                </div>
              </div>
              <div className="flex md:gap-[5rem] gap-[3rem] justify-center flex-wrap">
                <div className="flex gap-[3rem] bg-black px-3 py-2 rounded-2xl ">
                  <div className="flex gap-3 items-center">
                    <div>
                      <img src={unspash2} alt="" />
                    </div>
                    <div className="flex flex-col text-[14px]">
                      <span className="font-semibold">Crystal_Art</span>
                      <span className="text-[#67E8F9]">by dssgvdg</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#67E8F9] text-[12px]">New Bid</span>
                    <span className="text-[14px] font-semibold">6.2 ETH</span>
                    <span className="text-[#67E8F9] text-[10px]">3m ago</span>
                  </div>
                </div>
                <div className="flex gap-[3rem] bg-black px-3 py-2 rounded-2xl ">
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={unsplash} alt="" />
                    </div>
                    <div className="flex flex-col text-[14px]">
                      <span className="font-semibold">Creative_Art</span>
                      <span className="text-[#67E8F9]">by dssgvdg</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#67E8F9] text-[12px]">New Bid</span>
                    <span className="text-[14px] font-semibold">7.50 ETH</span>
                    <span className="text-[#67E8F9] text-[10px]">3m ago</span>
                  </div>
                </div>
                <div className="flex gap-[3rem] bg-black px-3 py-2 rounded-2xl items-center ">
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={ethereum} alt="" />
                    </div>
                    <div className="flex flex-col text-[14px]">
                      <span className="text-[20px]">4668 ETH</span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[16px] font-semibold">Add </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <TableCard />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full fixed bottom-0 ">
        <BottomBar />
      </div>
    </>
  );
};

export default Profile;
