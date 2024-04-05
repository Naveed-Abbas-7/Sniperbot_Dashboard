import { images } from "../utils";

const {
  Dashboard,
  Token,
  Gallery,
  trade,
  wallet,
  Profile,
  Trending,
  Uniswap,
  Tether,
  WazirX,
  Pinkcoin,
  Stacks,
  Symbol,
  sushiswap,
  akash,
  quorum,
  cream,
  bitcoin,
  bitstamp,
  dec,
  greengraph,
  redgraph,
  inc,
  star,
  more,
  tether,
  setting,
  logout,
  instruction1,
  instruction2,
  instruction3,
  instruction4,
} = images;

const sideBar = [
  {
    imgURL: Dashboard,
    title: "Dashboard",
  },
  {
    imgURL: Token,
    title: "Tokens",
  },
  {
    imgURL: Gallery,
    title: "NFT Gallery",
  },
  {
    imgURL: trade,
    title: "Trading",
  },
  {
    imgURL: wallet,
    title: "Wallet",
  },
  {
    imgURL: Profile,
    title: "Profile",
  },
];
export default sideBar;
export const herotitle = [
  {
    imgURL: Trending,
    title: "Trending",
    sub_text: "see all",
  },
];

export const data = {
  treading: [
    {
      sr: 1,
      imgURL: Tether,
      title: "Tether",
      minitext: "USDT",
      subtext: "+0.40%",
    },
    {
      sr: 2,
      imgURL: Uniswap,
      title: "Uniswap",
      minitext: "UNI",
      subtext: "+2.30%",
    },
    {
      sr: 3,
      imgURL: WazirX,
      title: "WazirX",
      minitext: "WRX",
      subtext: "-0.6%",
    },
  ],
  recent: [
    {
      sr: 1,
      imgURL: WazirX,
      title: "Pinoxa",
      minitext: "PINO",
      subtext: "$0.000314",
    },
    {
      sr: 2,
      imgURL: Uniswap,
      title: "Stacks",
      minitext: "STK",
      subtext: "$0.0008765",
    },
    {
      sr: 3,
      imgURL: Tether,
      title: "Symbol",
      minitext: "SYB",
      subtext: "$0.0000123",
    },
  ],
  History: [
    {
      imgURL: sushiswap,
      title: "SushiSwaap",
      text: "+$345.90",
      date: "11 march 23",
      paragraps: "Bitcoins Evolution™. 234000 Satisfied Customers..",
    },
    {
      imgURL: akash,
      title: "Akash",
      text: "-$29.80",
      date: "11 march 23",
      paragraps: "Akash is a decentralized with smart contract functionality",
    },
    {
      imgURL: quorum,
      title: "Quorum",
      text: "+$1567.00",
      date: "11 march 23",
      paragraps: "Quorum is a peer-to-peer cryptocurrency.",
    },
    {
      imgURL: cream,
      title: "Cream",
      text: "+$67.00",
      date: "11 march 23",
      paragraps:
        "Cream Evolution™. 234000 Satisfied Customers From 107 Countries.",
    },
  ],

  totalItems: [
    {
      heading: "Net Worth",
      total: "$277308.0",
    },
    {
      heading: "Total rewards",
      total: "$0.98",
    },
    {
      heading: "Total assets",
      total: "$277308.0",
    },
    {
      heading: "Total dept",
      total: "$800",
    },
  ],
};

export const homedata = [
  {
    imgURL: instruction1,
    title: "Sign-Up and KYC",
    paragraph:
      " Participating in the ChainGPT Pad requires that you signup and pass KYC",
    btn: "Sign-Up >",
  },
  {
    imgURL: instruction2,
    title: "Verify Wallet",
    paragraph:
      " Participating in the ChainGPT Pad requires that you signup and pass KYC",
    btn: "Verify >",
  },
  {
    imgURL: instruction3,
    title: "Stake $CGPT",
    paragraph:
      " Participating in the ChainGPT Pad requires that you signup and pass KYC",
    btn: "Stack >",
  },
  {
    imgURL: instruction4,
    title: "Regester for a Sale",
    paragraph:
      " Participating in the ChainGPT Pad requires that you signup and pass KYC",
    btn: "Regester",
  },
];
