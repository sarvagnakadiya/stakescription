import React, { useState } from "react";
import "./allsubscription.css";
import AllPool from "./allpool";
import BG from "../../images/bg.svg";
import SpotifyB from "../../images/spotify.svg";
import Netflix from "../../images/netflix.svg";
import HuluB from "../../images/hulu.svg";
import AppleTV from "../../images/appletv.svg";
import Disney from "../../images/Disney.svg";
// import Dai from "../../images/dai.svg";
import AAVE from "../../images/aave.svg";
import Link from "../../images/link.svg";
import Uni from "../../images/uni.svg";

const AllSubscription = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="subs-main"
      style={{
        backgroundImage: `url(${BG}`,
        // backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="subs-header">All Subscription</div>
      <div className="subs-imgs-main">
        <div className="subs-imgs1">
          <img className="subs-img" onClick={togglePopup} src={HuluB} />
          <img className="subs-img" onClick={togglePopup} src={AppleTV} />
          <img className="subs-img" onClick={togglePopup} src={Disney} />
        </div>
        <div className="subs-imgs2">
          <img className="subs-img" onClick={togglePopup} src={Netflix} />
          <img className="subs-img" onClick={togglePopup} src={SpotifyB} />
        </div>
        {isOpen && (
          <AllPool
            content={
              <>
                <div className="allsub-main">
                  <div className="allsub-item">
                    <img className="allsub-img" src={AAVE} />
                    <div className="allsub-subitem">AAVE</div>
                    {/* <div className="allsub-subitem">Lorem</div> */}
                    <div className="allsub-subitem">0.1%</div>
                    <div className="allsub-subitem">0.49%</div>
                  </div>
                  {/* <div className="allsub-item">
                    <img className="allsub-img" src={Dai} />
                    <div>Name</div>
                    <div>Desc</div>
                    <div>Interest</div>
                    <div>Average Rate</div>
                  </div> */}
                  <div className="allsub-item">
                    <img className="allsub-img" src={Link} />
                    {/* <div className="allsub-subitem">LINK</div> */}
                    <div className="allsub-subitem">Lorem</div>
                    <div className="allsub-subitem">2.8%</div>
                    <div className="allsub-subitem">2.66%</div>
                  </div>
                  <div className="allsub-item">
                    <img className="allsub-img" src={Uni} />
                    {/* <div className="allsub-subitem">UNI</div> */}
                    <div className="allsub-subitem">Lorem</div>
                    <div className="allsub-subitem">0.27%</div>
                    <div className="allsub-subitem">0.24%</div>
                  </div>
                </div>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
    </div>
  );
};

export default AllSubscription;
