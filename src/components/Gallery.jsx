import React from "react";
import Nav from "./Nav";
import SideBar from "./SideBar";
import nft2 from "../assets/gallery/NFT2.png";
import TrendingNFT from "./TrendingNFT";
import TopCollection from "./TopCollection";
import img1 from "../assets/gallery/crypto.png";
import img2 from "../assets/gallery/meme.png";
import img3 from "../assets/gallery/mob.png";
import img4 from "../assets/gallery/soup.png";
import img5 from "../assets/gallery/frendz.png";
import img6 from "../assets/gallery/ologo.png";
import nftimg from "../assets/gallery/NFT1.png";

const Gallery = () => {
  return (
    <div>
      <div>
        <Nav page={"NFT Gallery"} />
      </div>
      <div className="flex bg-[#19191A]">
        <div className="bg-black mt-6 ml-3 rounded-md">
          <SideBar />
        </div>
        <div className=" w-full text-white font-poppins mt-11 border-2">
          <div className="grid grid-cols-2 gap-[3rem] ">
            <div className="bg-black flex h-[240px] shadow-md shadow-pink-700 ml-3 rounded-2xl w-[90%]">
              <div className="flex flex-col justify-around pl-2">
                <h2 className="text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 font-semibold">
                  COLLECT RARE <br /> NFT HERE
                </h2>
                <button className="py-2 px-5  rounded-lg text-[10px] w-[50%] bg-gradient-to-r from-pink-700 to-blue-700 ">
                  Explore More
                </button>
              </div>
              <div className="flex flex-col w-[140px] h-[178px] absolute left-[450px] top-[160px] shadow-sm shadow-blue-700 rounded-2xl px-2  backdrop-blur-sm pt-2">
                <img src={nft2} alt="" />
                <span className="text-[12px] text-center py-2">
                  Living of the art
                </span>
                <span className="text-[8px] text-center">$ 543,576.13</span>
              </div>
              <div className="flex flex-col  w-[140px] h-[178px] absolute left-[540px] top-[110px] z-10 backdrop-blur-sm shadow-sm shadow-blue-700 rounded-2xl px-2 pt-2 ">
                <img src={nft2} alt="" />
                <span className="text-[12px] text-center py-2">
                  Living of the art
                </span>
                <span className="text-[8px] text-center">$ 543,576.13</span>
              </div>
              <div className="flex flex-col w-[140px] h-[178px] absolute left-[630px] top-[210px] shadow-sm shadow-blue-700 rounded-2xl px-2 backdrop-blur-sm pt-2 ">
                <img src={nft2} alt="" />
                <span className="text-[12px] text-center py-2">
                  Living of the art
                </span>
                <span className="text-[8px] text-center">$ 543,576.13</span>
              </div>
            </div>
            <div className="flex bg-black h-[240px] pl-3 w-[85%] shadow-md shadow-blue-700 ml-3 rounded-2xl">
              <div className="ml-2 mt-4">
                <button className="bg-[#AD1AAF] py-4 px-[4rem] absolute rounded-sm top-[115px] bg-gradient-to-r from-blue-700 to-pink-700  ">
                  3 Days left
                </button>
                <img className="h-[200px] w-[200px]" src={nft2} alt="" />
                <button className="bg-[#AD1AAF] py-3 px-11 rounded-ee-2xl relative bottom-[25px] left-3 rounded-ss-2xl">
                  3 Days left
                </button>
              </div>
              <div className="flex flex-col justify-around items-center ml-4">
                <h3 className="text-[20px]">Ebony #2775</h3>
                <div className="text-[12px] flex flex-col">
                  <span>10.15 ETH</span>
                  <span className="text-[#861585] ">Highest bid 5 WEIGHT</span>
                </div>
                <div className="l">
                  <button className="bg-[#250c25] text-[12px] py-2 px-6">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5">
              <div className="py-2">
                <span className="text-[36px]">TRENDING NFTs</span>{" "}
              </div>
              <div className="flex gap-3 ">
                <TrendingNFT img={nft2} />
                <TrendingNFT img={nft2} />
                <TrendingNFT img={nft2} />
              </div>
            </div>
            <div className=" flex items-center mt-11">
              <div className="bg-black flex flex-col gap-7 px-3 py-3 rounded-2xl shadow-md shadow-pink-700">
                <div className="flex justify-between mx-4">
                  <span className="text-[22px]">Top Collections</span>
                  <span className="text-[12px]">
                    Over last <span className="text-[#396fa1]"> 7days</span>
                  </span>
                </div>
                <div className="flex gap-5">
                  <TopCollection img={img1} name={"CryptoKing"} sr={"#1"} />
                  <TopCollection img={img2} name={"Meme"} sr={"#2"} />
                  <TopCollection img={img3} name={"mob"} sr={"#3"} />
                </div>
                <div className="flex gap-5">
                  <TopCollection img={img4} name={"coup"} sr={"#4"} />
                  <TopCollection img={img5} name={"frendz"} sr={"#5"} />
                  <TopCollection img={img6} name={"omo Ologo"} sr={"#6"} />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
