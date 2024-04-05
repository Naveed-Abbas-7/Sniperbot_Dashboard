import React from "react";
import bitcoin from "../assets/Icons/Bigcardassests/bitcoin.png";
import bitstamp from "../assets/Icons/Bigcardassests/bitstamp.png";
import dec from "../assets/Icons/Bigcardassests/dec.png";
import inc from "../assets/Icons/Bigcardassests/inc.png";
import greengraph from "../assets/Icons/Bigcardassests/greengraph.png";
import redgraph from "../assets/Icons/Bigcardassests/redgraph.png";
import star from "../assets/Icons/Bigcardassests/star.png";
import more from "../assets/Icons/Bigcardassests/more.png";
import tether from "../assets/Icons/Tether.png";
import sushiswap from "../assets/Icons/sushiswap.png";

export const TableCard = () => {
  const bigCarddata = [
    {
      img: star,
      sr: "2",
      logo: tether,
      name: "Tether",
      subtext: "USDT",
      price: "$1.00",
      img3: inc,
      time1: "0.22%",
      img4: dec,
      time2: "3.22%",
      marketcap: "$218,533,780",
      volume: "$5,763203,118",
      last7days: redgraph,
      action: more,
    },
    {
      img: star,
      sr: "1",
      logo: bitcoin,
      name: "Bitcoin",
      subtext: "BTC",
      price: "$235.59",
      img3: dec,
      time1: "5.12%",
      img4: inc,
      time2: "1.12%",
      marketcap: "$23,2533,780",
      volume: "$52,723,118",
      last7days: greengraph,
      action: more,
    },
    {
      img: star,
      sr: "8",
      logo: sushiswap,
      name: "Sushiswap",
      subtext: "SUSHI",
      price: "$0.8802",
      img3: inc,
      time1: "0.6%",
      img4: inc,
      time2: "3.60%",
      marketcap: "$805,063,780",
      volume: "$236,182,776",
      last7days: greengraph,
      action: more,
    },
    {
      img: star,
      sr: "9",
      logo: bitstamp,
      name: "Bitstamp",
      subtext: "BIT",
      price: "$0.102",
      img3: inc,
      time1: "0.8%",
      img4: dec,
      time2: "1.90%",
      marketcap: "$1,00,630,844",
      volume: "$2,36,620,566",
      last7days: redgraph,
      action: more,
    },
  ];
  return (
    <div className="">
      <div className="text-white pt-9 mt-9 mx-7 py-7 font-poppins">
        <div className="">
          <table className="w-full ">
            <thead className=" bg-gradient-to-r text-[12px] from-blue-800 to-pink-900  ">
              <tr className="  ">
                <td className="py-[1.5rem]"></td>
                <td>#</td>
                <td className="">Name</td>
                <td>Price</td>
                <td>14H</td>
                <td className="max-sm:hidden">Market</td>
                <td>7D</td>
                <td className="max-md:hidden">Volume</td>
                <td className="max-lg:hidden">Last 7 days</td>
                <td className="max-sm:hidden">Action</td>
              </tr>
            </thead>
            <tbody className="">
              {bigCarddata.map((data) => (
                <tr
                  key={data.name}
                  className="border-b-2 border-b-pink-800 2xl:text-[16px] text-[12px] max-sm:text-[10px]	"
                >
                  <td className="py-[1.5rem]">
                    <img src={data.img} alt="" />
                  </td>
                  <td>{data.sr}</td>
                  <td>
                    <div className="flex items-center gap-1">
                      <img src={data.logo} alt="" width={24} />
                      <span>{data.name}</span>
                      <span className="text-[#A1A1A1] text-[11px]">
                        {data.subtext}
                      </span>
                    </div>
                  </td>
                  <td>{data.price}</td>
                  <td>
                    <div className="flex items-center gap-1">
                      <img src={data.img3} alt="" />
                      <span>{data.time1}</span>
                    </div>
                  </td>
                  <td className="max-sm:hidden">{data.marketcap}</td>
                  <td>
                    <div className="flex items-center gap-1">
                      <img src={data.img4} alt="" />
                      <span>{data.time2} </span>
                    </div>
                  </td>
                  <td className="max-md:hidden">{data.volume}</td>
                  <td className="max-lg:hidden">
                    <img src={data.last7days} alt="" />
                  </td>
                  <td className="max-sm:hidden">
                    <img src={data.action} alt="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
