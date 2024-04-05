import React from "react";
import dashboard from "../assets/Icons/Dashboard.png";
import token from "../assets/Icons/Token.png";
import trade from "../assets/Icons/trade.png";
import profile from "../assets/Icons/Profile.png";
import wallet from "../assets/Icons/wallet.png";
import gallery from "../assets/Icons/Gallery.png";
import settings from "../assets/Icons/setting.png";
import logout from "../assets/Icons/power.png";
import SidebarButtons from "./SidebarButtons";

const SideBar = ({ img, title }) => {
  return (
    <>
      <div className="text-[12px] lg:w-[210px] max-lg:w-[80px] max-sm:hidden text-white flex flex-col justify-between h-screen items-center ">
        <div className="flex flex-col gap-3 mt-9">
          <div>
            <SidebarButtons
              img={dashboard}
              title={"Dashboard"}
              LinkTo={"/Dashboard"}
            />
          </div>
          <div>
            <SidebarButtons img={token} title={"Token"} LinkTo={"/Tokens"} />
          </div>
          <div>
            <SidebarButtons
              img={gallery}
              title={"NFT Gallery"}
              LinkTo={"/NFTGallery"}
            />
          </div>
          <div>
            <SidebarButtons img={trade} title={"Trading"} />
          </div>
          <div>
            <SidebarButtons
              img={profile}
              title={"Profile"}
              LinkTo={"/Profile"}
            />
          </div>
          <div>
            <SidebarButtons img={wallet} title={"Wallet"} />
          </div>
        </div>

        <div className="">
          <div>
            <SidebarButtons img={settings} title={"Setting"} />
          </div>
          <div>
            <SidebarButtons img={logout} title={"Logout"} />
          </div>
        </div>
      </div>

      
    </>
  );
};

export default SideBar;
