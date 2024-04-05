import React from "react";
import herobackground from "../../assets/home/herobackground.jpg";
import HomeCards from "../../components/HomeCards";
import { data } from "../data";
import { homedata } from "../data";
import KeyFeaturesCard from "../../components/KeyFeaturesCard";
import web3dev from "../../assets/home/web3dev.png";
import solana from "../../assets/home/solana.png";
import polygon from "../../assets/home/polygon.png";
import lachain from "../../assets/home/lachain.png";
import metamask from "../../assets/home/metamask.png";
import thegraph from "../../assets/home/the-graph.png";
import thinkdev from "../../assets/home/ThinkDev.png";
import homebg2 from "../../assets/home/homebg2.png";
import BottomCards from "../../components/BottomCards";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="font-orbitron overflow-hidden">
      <div>
        <div className="bg-blue-700 text-white py-5 bg-gradient-to-r from-pink-800 to-blue-800  ">
          <div className="md:flex hidden justify-between items-center max-sm:gap-4  px-[4rem]">
            <div>
              <span className="md:text-[30px] text-[24px]">0xalpha.io</span>
            </div>
            <div className="flex md:gap-[3rem] text-[16px] ">
              
              <div className="">
              <Link to={"./Dashboard"}><button>Dashboard</button></Link> 
              </div>
              <div>
                <span>Twitter</span>
              </div>
              <div>
                <span>Telegram</span>
              </div>
              <div>
                <span>Staking Dapp</span>
              </div>
            </div>
            <div>
              <button className="bg-[#0B0121] md:py-3 py-1 md:px-7 px-5 md:text-[16px] text-[12px] rounded-full ">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
        <div
          className="md:bg-cover"
          style={{
            height: "100vh",
            backgroundImage: `url(${herobackground})`,
            backgroundSize: "cover",
          }}
        >
          <div className=" h-screen flex items-center">
            <div className="text-white md:w-[55%] w-full mt-16  flex flex-col gap-6  pl-10 ">
              <h1 className=" md:text-[48px] text-[32px] font-semibold">
                Automate Your Crypto <br />
                <span>Trading</span> <br />
                <span>With</span>{" "}
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400 font-extrabold">
                  OXalpha SNIPER BOT
                </span>
              </h1>
              <p className="text-[#BEBEBE] border-2 md:text-[18px]  text-[14px] border-transparent border-gradient-to-r from-pink-800 to-blue-800">
                OXalpa Sniper Bot automates cryptocurrency trading, executing
                trades based on user-defined settings, making it suitable for
                both experienced and novice traders, ensuring potential profit
                maximization and risk reduction.
              </p>
              <button className="py-3 px-7 bg-gradient-to-r from-pink-800 to-blue-800 md:w-[30%] hidden   rounded-xl">
                Try it now
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-pink-800 to-blue-800  ">
          <div className="md:flex  mx-[auto] px-11 py-16">
            {homedata.map((items) => (
              <HomeCards
                key={items.title}
                imgURL={items.imgURL}
                title={items.title}
                paragraph={items.paragraph}
                btn={items.btn}
              />
            ))}
          </div>
        </div>
        <div className="bg-black w-[100%] flex justify-center text-white py-11">
          <div className="w-[80%] font-bold bg-[#0B0B0B] flex flex-wrap items-center justify-center md:text-[38px] text-[32px] py-9 gap-[92px] rounded-xl">
            <div className="flex flex-col items-center">
              <h1 className="md:text-[42px] text-[36px]  ">365,000 +</h1>
              <p className="md:text-[18px] text-[16px]">Transactions</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="md:text-[42px] text-[36px]">1000 +</h1>
              <p className="md:text-[18px] text-[16px]">Users</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="md:text-[42px] text-[36px] ">3600 +</h1>
              <p className="md:text-[18px] text-[16px]">Support Help</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="md:text-[42px] text-[36px]">10 +</h1>
              <p className="md:text-[18px] text-[16px]">Team Experts</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-black to-blue-950 text-white flex flex-col gap-11 ">
          <div className="md:text-[60px] text-[38px] flex flex-col text-center font-bold ">
            <span className="text-white">Key Features Of</span>
            <span className="text-transparent leading-tight bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400 font-extrabold">
              OXalpha Sniper Bot
            </span>
          </div>
          <div className="flex flex-wrap gap-9 mx-auto justify-center	">
            <KeyFeaturesCard
              name={"Speed"}
              text={
                "The ability to execute trades in milliseconds.Ability to work on ethereum is quick"
              }
            />
            <KeyFeaturesCard
              name={"Automation"}
              text={
                " Operating based on predefined rules and conditions, reducing the need for constant monitoring by traders."
              }
            />
            <KeyFeaturesCard
              name={"Precision"}
              text={
                " Operating based on predefined rules and conditions, reducing the need for constant monitoring by traders."
              }
            />
            <KeyFeaturesCard
              name={"Consistency"}
              text={
                " Operating based on predefined rules and conditions, reducing the need for constant monitoring by traders."
              }
            />
          </div>
        </div>
        <div className="flex flex-col md:justify-between items-center h-[90vh] max-lg:h-[120vh] max-sm:h-[120vh] pt-9 w-[100%] bg-gradient-to-r from-black to-blue-950">
          <div className="pt-9 py-9">
            <span className=" text-[38px]  text-transparent leading-tight bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400 ">
              Partners
            </span>
          </div>
          <div className="flex flex-wrap w-[70%] gap-3 items-center justify-center py-4 bg-gradient-to-r from-pink-800 to-blue-800  rounded-xl px-9">
            <div>
              <img className="sm:w-[100px] w-[60px] " src={web3dev} alt="" />
            </div>
            <div>
              <img className="sm:w-[100px] w-[60px] " src={solana} alt="" />
            </div>
            <div>
              <img className="sm:w-[100px] w-[60px] " src={metamask} alt="" />
            </div>
            <div>
              <img className="sm:w-[100px] w-[60px] " src={thegraph} alt="" />
            </div>
            <div>
              <img className="sm:w-[100px] w-[60px] " src={thinkdev} alt="" />
            </div>
            <div>
              <img className="sm:w-[100px] w-[60px] " src={polygon} alt="" />
            </div>
            <div>
              <img className="sm:w-[100px] w-[60px] " src={lachain} alt="" />
            </div>
          </div>
          <div className="text-white text-center pt-8 mb-9 ">
            <h3 className="text-[20px]">Still Have Any Questions?</h3>
            <p className="text-[18px] text-transparent leading-tight bg-clip-text bg-gradient-to-r from-pink-700 to-blue-600 py-4 ">
              Join to our discord channel to talk with one of our team members!
            </p>
            <button className="bg-black md:py-4 py-1 md:px-6 px-3 rounded-full border-2 md:text-[16px] text-[10px]">
              Open Discard
            </button>
          </div>
        </div>
        <div
          className=" bg-black bg-center md:h-screen h-[140vh] flex justify-center items-center pb-6 pt-10 "
          style={{
            backgroundImage: `url(${homebg2})`,
            backgroundSize: "cover",
          }}
        >
          <div className=" h-screen text-white flex mx-9 md:justify-between justify-center items-center ">
            <div className=" md:w-[30%]">
              <div className="flex flex-col md:gap-[3rem] gap-4 ">
                <BottomCards title={"Sniper Bot"} />
                <BottomCards title={"TUFExtracTool"} />
              </div>
            </div>
            <div className=" md:w-[30%] max-sm:hidden">
              <div className="flex flex-col md:gap-[3rem] ">
                <BottomCards title={"Tracker Bot"} />
                <BottomCards title={"NFT & Miner ETH Bot"} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-pink-900 to-blue-900 flex flex-col items-center text-white gap-[4rem] py-9 ">
          <div className="flex flex-col gap-6">
            <span className="text-[30px]">0xalpha.io</span>
            <div>
              <div className="flex gap-2">
                <span className="">
                  <IoLogoYoutube className="w-[30px] h-[22px]" />
                </span>
                <span>
                  <FaTelegramPlane className="w-[30px] h-[22px]" />
                </span>
                <span>
                  <FaTwitter className="w-[30px] h-[22px]" />
                </span>
                <span>
                  <FaDiscord className="w-[30px] h-[22px]" />
                </span>
              </div>
            </div>
          </div>
          <div>
            <span className="text-[14px]">Copyright © 2022 TUF Sniper Bot</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
