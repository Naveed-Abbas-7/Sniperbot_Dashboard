import React from "react";
import { data } from "../data";
import Nav from "../../components/Nav";
import SideBar from "../../components/SideBar";
import { Card } from "../../components/Card";
import ListItems from "../../components/ListItems";
import loadingIcon from "../../assets/Icons/loadingicon.png";
import Trending from "../../assets/Icons/Trending.png";
import Totalitems from "../../components/Totalitems";
import HistoryCard from "../../components/HistoryCard";
import { TableCard } from "../../components/TableCard";
import BottomBar from "../../components/BottomBar";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden ">
        <div className="">
          <Nav page={"Dashboard"} />
        </div>

        <div className="flex bg-[#19191A] min-h-screen ">
          <div className="mt-6 flex flex-col bg-black rounded-md ml-3">
            <div className=" ">
              <SideBar />
            </div>
          </div>
          <div className=" w-full">
            <h1 className="text-white text-sm py-6 pl-5">
              Today's Price by marketcap
            </h1>
            <div className="flex justify-between lg:flex-row flex-col">
              <div className="flex flex-col w-full">
                {/* Card */}
                <div className="flex md:flex-row flex-col  md:mr-2 mr-7  md:gap-0 gap-6 justify-center items-center ">
                  <Card img={Trending} title={"Trending"} sub_text={"See all"}>
                    {data.treading.map((data) => (
                      <ListItems
                        key={data.title}
                        sr={data.sr}
                        imgURL={data.imgURL}
                        title={data.title}
                        minitext={data.minitext}
                        subtext={data.subtext}
                      />
                    ))}
                  </Card>
                  <Card
                    img={loadingIcon}
                    title={"Recently added"}
                    sub_text={"See all"}
                  >
                    {data.recent.map((data) => (
                      <ListItems
                        key={data.sr}
                        sr={data.sr}
                        imgURL={data.imgURL}
                        title={data.title}
                        minitext={data.minitext}
                        subtext={data.subtext}
                      />
                    ))}
                  </Card>
                </div>
                <div className="grid 2xl:gap-7 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl: mx-7 mx-3 my-5 max-sm:w-[80%] ml-7">
                  {data.totalItems.map((items) => (
                    <Totalitems
                      key={items.heading}
                      heading={items.heading}
                      total={items.total}
                    />
                  ))}
                </div>
              </div>
              <div className="bg-black rounded-2xl mr-2 xl:py-0 sm:pb-1 shadow-md shadow-blue-700 ">
                <div className="text-white flex justify-between mx-6 py-3">
                  <h2 className="text-[20px] font-semibold">History</h2>
                  <p className="text-[12px] text-green-600">See all</p>
                </div>
                <div className="flex flex-col gap-3">
                {/* <Card title={"History"} sub_text={"See all"}> */}
                {data.History.map((items) => (
                  <HistoryCard
                    key={items.title}
                    imgURL={items.imgURL}
                    title={items.title}
                    text={items.text}
                    date={items.date}
                    paragraphs={items.paragraps}
                  />
                ))}
                {/* </Card> */}
                </div>
              </div>
            </div>
            <div className="pb-[5rem]">
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

export default Dashboard;
