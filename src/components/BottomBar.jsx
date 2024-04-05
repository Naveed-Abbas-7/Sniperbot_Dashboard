import React from "react";
import dashboard from "../assets/Icons/Dashboard.png";
import token from "../assets/Icons/Token.png";
import trade from "../assets/Icons/trade.png";
import profile from "../assets/Icons/Profile.png";
import wallet from "../assets/Icons/wallet.png";
import gallery from "../assets/Icons/Gallery.png";
import { Link, useLocation } from "react-router-dom";
import BottomBarButtons from "./BottomBarButtons";

const BottomBar = ({ img, LinkTo }) => {
  return (
    <div className="sm:hidden block w-full justify-center">
      <div className="flex bg-black justify-around py-5">
        <div>
          <BottomBarButtons img={dashboard} LinkTo={"/Dashboard"} />
        </div>
        <div>
          <BottomBarButtons img={token} LinkTo={"/Tokens"} />
        </div>
        <div>
          <BottomBarButtons img={gallery} LinkTo={"/Tokens"} />
        </div>
        <div>
          <BottomBarButtons img={wallet} />
        </div>
        <div>
          <BottomBarButtons img={profile} LinkTo={"/Profile"} />
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
