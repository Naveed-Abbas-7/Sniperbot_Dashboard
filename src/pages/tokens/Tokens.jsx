import React from "react";
import Nav from "../../components/Nav";
import SideBar from "../../components/SideBar";
import TokenCard from "../../components/TokenCard";
import TrendingNFT from "../../components/TrendingNFT";
import card1img from "../../assets/tokens/card1.png";
import card2img from "../../assets/tokens/card2.png";
import card3img from "../../assets/tokens/card3.png";
import card4img from "../../assets/tokens/card4.png";
import TopCollection from "../../components/TopCollection";
import img1 from "../../assets/gallery/crypto.png";
import img2 from "../../assets/gallery/meme.png";
import img3 from "../../assets/gallery/mob.png";
import img4 from "../../assets/gallery/soup.png";
import img5 from "../../assets/gallery/frendz.png";
import img6 from "../../assets/gallery/ologo.png";
import rectangle from "../../assets/tokens/rectangle.png";
import { useState } from "react";
import BottomBar from "../../components/BottomBar";

const Tokens = () => {
  const [clicked1, setclicked1] = useState(true);
  const [clicked2, setclicked2] = useState(true);
  const [clicked3, setclicked3] = useState(true);
  const [clicked4, setclicked4] = useState(true);

  const handleclick1 = () => {
    setclicked1(!clicked1);
  };
  const handleclick2 = () => {
    setclicked2(!clicked2);
  };
  const handleclick3 = () => {
    setclicked3(!clicked3);
  };
  const handleclick4 = () => {
    setclicked4(!clicked4);
  };
  return (
    <>
      <div className="text-white">
        <div className="">
          <Nav page={"Tokens"} />
        </div>
        <div className="flex bg-[#19191A] ">
          <div className="bg-black mt-6 ml-3 rounded-md">
            <SideBar />
          </div>
          <div className=" w-full flex xl:flex-row flex-col mx-5 mt-9 justify-between border-2">
            <div className="border-2 w-full">
              <div className="flex flex-wrap gap-3 justify-around">
                <TokenCard />
                <TokenCard />
                <TokenCard />
                <TokenCard />
                <TokenCard />
              </div>
              <div className="w-full">
                <div className="py-6">
                  <span className="text-[32px] font-poppins font-semibold">
                    Trending NFTS
                  </span>
                </div>
                <div className="flex flex-wrap justify-around">
                  <TrendingNFT img={card1img} />
                  <TrendingNFT img={card2img} />
                  <TrendingNFT img={card3img} />
                  <TrendingNFT img={card4img} />
                </div>
                <div className="mt-9 ">
                  <div className="bg-black lg:w-[500px] w-full flex flex-col gap-7 pl-2 py-2 rounded-2xl shadow-md shadow-pink-700">
                    <div className="flex justify-between mx-4">
                      <span className="text-[22px] font-semibold font-poppins">
                        Top Collections
                      </span>
                      <span className="text-[12px] font-poppins">
                        Over last{" "}
                        <span className="text-[#396fa1] "> 7days</span>
                      </span>
                    </div>
                    <div className="flex gap-5">
                      <TopCollection img={img1} name={"CryptoKing"} sr={"#1"} />
                      <TopCollection img={img2} name={"Meme"} sr={"#2"} />
                      <TopCollection img={img3} name={"mob"} sr={"#3"} />
                    </div>
                    <div className="flex gap-4">
                      <TopCollection img={img4} name={"coup"} sr={"#4"} />
                      <TopCollection img={img5} name={"frendz"} sr={"#5"} />
                      <TopCollection img={img6} name={"omo Ologo"} sr={"#6"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* side div */}

            <div className="flex xl:flex-col flex-row gap-[3rem]  items-center pt-6 pb-[150px] max-md:flex-col">
              <div>
                <div className="flex flex-col bg-[#333232]  shadow-md shadow-blue-700  rounded-2xl font-poppins 2xl:w-[400px] lg:w-[330px] w-[270px] px-2">
                  <div className="ml-2 mt-4 ">
                    <button className="bg-[#AD1AAF] hidden py-4 px-[2rem] absolute right-[100px] rounded-lg top-[115px] bg-gradient-to-r from-blue-700 to-pink-700  ">
                      Live Auction
                    </button>
                    <img className="" src={rectangle} alt="" />
                  </div>
                  <div className=" flex items-center">
                    <div className="flex flex-col py-2 w-full">
                      <h3 className="text-[20px]">Ebony #2775</h3>
                      <div className="text-[12px] flex flex-col">
                        <span>10.15 ETH</span>
                        <div className="flex md:gap-[5rem] justify-between items-center">
                          <span className="text-[#861585] ">
                            Highest bid 5 WEIGHT
                          </span>
                          <div>
                            <button className="py-1 px-4 border-2 md:text-[12px] text-[10px] rounded-full">
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col bg-[#333232] shadow-md shadow-blue-700 gap-5 rounded-2xl font-poppins 2xl:w-[400px] lg:w-[330px] w-[270px] px-2 py-6">
                <div className="flex justify-between items-center ">
                  <span className="md:text-[22px] text-[18px] font-semibold">
                    Top Creators
                  </span>
                  <span className="text-[12px]">See more</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between  items-center">
                    <div className="flex gap-2 items-center">
                      <div className="">
                        <img src={img2} alt="" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px]">Crown's Diary</span>
                        <span className="text-[12px] text-[#757575]">
                          @Felixeffect
                        </span>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={handleclick1}
                        className="py-1.5 md:px-6 px-4 md:text-[12px] text-[9px] bg-gradient-to-r from-pink-500 to-blue-700 rounded-full"
                      >
                        {clicked1 ? "Follow" : "Following"}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <div className="">
                        <img src={img6} alt="" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px]">Cinderella</span>
                        <span className="text-[12px] text-[#757575]">
                          @Pharm
                        </span>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={handleclick2}
                        className="py-1.5 md:px-6 px-4 md:text-[12px] text-[9px] bg-gradient-to-r from-pink-500 to-blue-700 rounded-full"
                      >
                        {clicked2 ? "Follow" : "Following"}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between  items-center">
                    <div className="flex gap-2 items-center">
                      <div className="">
                        <img src={img5} alt="" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px]">Leinard Studio</span>
                        <span className="text-[12px] text-[#757575]">
                          @Leinard
                        </span>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={handleclick3}
                        className="py-1.5 md:px-6 px-4 md:text-[12px] text-[9px] bg-gradient-to-r from-pink-500 to-blue-700 rounded-full"
                      >
                        {clicked3 ? "Follow" : "Following"}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between  items-center">
                    <div className="flex gap-2 items-center">
                      <div className="">
                        <img src={img4} alt="" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px]">Joe Adamu</span>
                        <span className="text-[12px] text-[#757575]">
                          @jadm2
                        </span>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={handleclick4}
                        className="py-1.5 md:px-6 px-4 md:text-[12px] text-[9px] bg-gradient-to-r from-pink-500 to-blue-700 rounded-full"
                      >
                        {clicked4 ? "Follow" : "Following"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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

export default Tokens;
