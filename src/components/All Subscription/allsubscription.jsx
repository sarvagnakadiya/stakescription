import React, { useState } from "react";
import "./allsubscription.css";
import AllPool from "./allpool";
import Proceed from "./proceed";
import BG from "../../images/bg.svg";
import SpotifyB from "../../images/spotify-1.svg";
import Netflix from "../../images/netflix.svg";
import HuluB from "../../images/hulu-1.svg";
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

  const [isProceedOpen, setIsProceedOpen] = useState(false);

  const toggleProceed = () => {
    setIsProceedOpen(!isProceedOpen);
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
          <div className="subs-img-bgs" onClick={togglePopup}>
            <img className="subs-img" src={HuluB} />
            <div className="subs-img-txt">Hulu</div>
            <div className="subs-img-txt">Plan Duration</div>
            <div className="subs-img-txt">Rate: 200</div>
            <button className="subs-img-btn">Subscribe</button>
          </div>
          <div className="subs-img-bgs" onClick={togglePopup}>
            <img className="subs-img" src={AppleTV} />
            <div className="subs-img-txt">Apple TV</div>
            <div className="subs-img-txt">Plan Duration</div>
            <div className="subs-img-txt">Rate: 200</div>
            <button className="subs-img-btn">Subscribe</button>
          </div>
          <div className="subs-img-bgs" onClick={togglePopup}>
            <img className="subs-img" src={Disney} />
            <div className="subs-img-txt">Disney+</div>
            <div className="subs-img-txt">Plan Duration</div>
            <div className="subs-img-txt">Rate: 200</div>
            <button className="subs-img-btn">Subscribe</button>
          </div>
        </div>
        <div className="subs-imgs2">
          <div className="subs-img-bgs" onClick={togglePopup}>
            <img className="subs-img" src={Netflix} />
            <div className="subs-img-txt">Netflix</div>
            <div className="subs-img-txt">Plan Duration</div>
            <div className="subs-img-txt">Rate: 200</div>
            <button className="subs-img-btn">Subscribe</button>
          </div>
          <div className="subs-img-bgs" onClick={togglePopup}>
            <img className="subs-img" src={SpotifyB} />
            <div className="subs-img-txt">Spotify</div>
            <div className="subs-img-txt">Plan Duration</div>
            <div className="subs-img-txt">Rate: 200</div>
            <button className="subs-img-btn">Subscribe</button>
          </div>
        </div>
        <div className="allsub-main">
          {isOpen && (
            <AllPool
              content={
                <>
                  <div className="allsub-item-header">
                    <div className="allsub-subitem">Logo</div>
                    <div className="allsub-subitem">Name</div>
                    <div className="allsub-subitem">Description</div>
                    <div className="allsub-subitem">Interest</div>
                    <div className="allsub-subitem">Average Rate</div>
                    <div className="allsub-subitem">Stack Amount</div>
                  </div>
                  <div className="allsub-item">
                    <input type="checkbox" />
                    <img className="allsub-img" src={AAVE} />
                    <div className="allsub-subitem">AAVE</div>
                    <div className="allsub-subitem">Lorem</div>
                    <div className="allsub-subitem">0.1%</div>
                    <div className="allsub-subitem">0.49%</div>
                    <div className="allsub-subitem">100</div>
                  </div>
                  {/* <div className="allsub-item">
                    <img className="allsub-img" src={Dai} />
                    <div>Name</div>
                    <div>Desc</div>
                    <div>Interest</div>
                    <div>Average Rate</div>
                  </div> */}
                  <div className="allsub-item">
                    <input type="checkbox" />
                    <img className="allsub-img" src={Link} />
                    <div className="allsub-subitem">LINK</div>
                    <div className="allsub-subitem">Lorem</div>
                    <div className="allsub-subitem">2.8%</div>
                    <div className="allsub-subitem">2.66%</div>
                    <div className="allsub-subitem">200</div>
                  </div>
                  <div className="allsub-item">
                    <input type="checkbox" />
                    <img className="allsub-img" src={Uni} />
                    <div className="allsub-subitem">UNI</div>
                    <div className="allsub-subitem">Lorem</div>
                    <div className="allsub-subitem">0.27%</div>
                    <div className="allsub-subitem">0.24%</div>
                    <div className="allsub-subitem">300</div>
                  </div>
                  <button className="allsub-btn" onClick={toggleProceed}>
                    Proceed
                  </button>
                </>
              }
              handleClose={togglePopup}
            />
          )}
          {isProceedOpen && (
            <Proceed
              content={
                <>
                  <div className="proceed-txt">1000</div>
                  <div className="proceed-btn-main">
                    <button className="proceed-btn1">Yes</button>
                    <button className="proceed-btn2">No</button>
                  </div>
                </>
              }
              handleClose={toggleProceed}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AllSubscription;
