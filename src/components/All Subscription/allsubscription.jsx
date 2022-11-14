import React, { useState, useEffect, useRef } from "react";
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
import { useAccount } from 'wagmi'
import { ethers } from "ethers";
import ss_abi from "../../artifacts/contracts/stakescription.sol/stakescription.json";
import { arrayify } from "ethers/lib/utils";
import loading_infinity from "../../images/Infinity-1s-200px.gif";
import compoundDao from "../../images/compoundDao.png";



const AllSubscription = () => {
  // let arr = [1, 2, 3];
  const CONTRACT_ADDRESS = "0x99746e1fEeFb6C8D26c95E713C7d47C6327CFA95";
  const { address, isConnecting, isDisconnected } = useAccount()
  const [data, setData] = React.useState("");
  // let planCount = 0;
  let planName = [];
  // const [planPrice, setPlanPrice] = React.useState("");
  // const [planTimePeriod, setPlanTimePeriod] = React.useState("");
  // const [planImage, setPlanImage] = React.useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [planId, setPlanId] = useState(null);
  const [itemPrice, setItemPrice] = useState();
  const [interestPrice, setInterestPrice] = useState();

  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getPlanDetails();
    // showUserPlans();
  }, [])

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [isProceedOpen, setIsProceedOpen] = useState(false);

  const toggleProceed = () => {
    setIsProceedOpen(!isProceedOpen);
  };

  const getPlansCount = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()
    const connectedContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      ss_abi.abi,
      provider
    );
    let tx = await connectedContract.countPlan();
    console.log(tx);
    return tx;


  }

  const AddDataToPopup = (e, key, price) => {
    e.preventDefault();
    console.log(key);
    console.log(price);
    console.log(price * 33);
    setPlanId(key);
    setItemPrice(price)
    setInterestPrice(price * 33);
    setIsOpen(true);
  }

  const subscribe = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner()

      const connectedContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        ss_abi.abi,
        signer
      );
      console.log("wait...")
      let id = planId + 1;
      let price = itemPrice * 33;

      // let tx = await connectedContract.subscribe(address, planId, { gasLimit: 300000000 },{ value: someValue });
      let tx = await connectedContract.subscribe(address, id, { gasLimit: 300000, value: price });
      console.log('=V======V========V======V=======V=======V=');
      console.log(tx);
      console.log("Subscribed!")
      console.log('====================================');

    }
  }

  // const showUserPlans = async () => {
  //   if (typeof window.ethereum !== "undefined") {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     await provider.send("eth_requestAccounts", []);
  //     const signer = provider.getSigner()

  //     const connectedContract = new ethers.Contract(
  //       CONTRACT_ADDRESS,
  //       ss_abi.abi,
  //       signer
  //     );
  //     console.log("wait...")
  //     let tx = await connectedContract.showUserPlans(address);
  //     console.log(tx)
  //     const userPlans = [];
  //     console.log('=V======V========V======V=======V=======V=');
  //     for (let i = 0; i < tx.length; i++) {
  //       userPlans.push(parseInt(tx[i]));
  //     }
  //     console.log(userPlans)
  //     console.log("here are all plans user've subscribed to!")
  //     console.log('====================================');
  //     return userPlans;

  //   }
  // }


  const getPlanDetails = async () => {
    let count = await getPlansCount();
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner()

      const connectedContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        ss_abi.abi,
        signer
      );
      console.log("wait...")
      for (let i = 1; i <= count; i++) {
        let tx = await connectedContract.getPlanDetails(i);
        console.log('=V======V========V======V=======V=======V=');
        console.log(tx[0]);
        planName.push({ name: tx[0], price: parseInt(tx[1]), duration: parseInt(tx[2]), image: (tx[3]) });

        console.log(parseInt(tx[1]));
        // setPlanPrice(parseInt(tx[1]));

        console.log(parseInt(tx[2]));
        // setPlanTimePeriod(parseInt(tx[2]));

        console.log(tx[3]);
        // setPlanImage(tx[3]);
        console.log('====================================');
      }
      console.log(planName);
      setData(planName);


    }
  }

  if (data.length > 0) {


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
            {data.map((item, key) => {
              return (<div className="subs-img-bgs" key={key} >
                <img className="subs-img" src={item.image} />
                <div className="subs-img-txt">{item.name}</div>
                <div className="subs-img-txt">duration: {item.duration} days</div>
                <div className="subs-img-txt">Rate: {item.price}</div>
                <button className="subs-img-btn" onClick={(e) => { AddDataToPopup(e, key, item.price) }}>Subscribe</button>
              </div>)
            })}





          </div>
          <div className="allsub-main">
            {isOpen && (
              <AllPool
                content={
                  <>
                    <div className="allsub-item-header">
                      <div className="allsub-subitem">Logo</div>
                      <div className="allsub-subitem">Name</div>
                      {/* <div className="allsub-subitem">Description</div> */}
                      {/* <div className="allsub-subitem">Interest</div> */}
                      <div className="allsub-subitem">Interest Rate</div>
                      {/* <div className="allsub-subitem">Stack Amount</div> */}
                    </div>
                    <div className="allsub-item">
                      <input type="checkbox" />
                      <img className="allsub-img" src={AAVE} />
                      <div className="allsub-subitem">AAVE</div>
                      {/* <div className="allsub-subitem">Lorem</div> */}
                      {/* <div className="allsub-subitem">0.1%</div> */}
                      <div className="allsub-subitem">3.49%</div>
                      {/* <div className="allsub-subitem">100</div> */}
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
                      <img className="allsub-img" src={compoundDao} />
                      <div className="allsub-subitem">Compound Dao</div>
                      {/* <div className="allsub-subitem">Lorem</div> */}
                      {/* <div className="allsub-subitem">2.8%</div> */}
                      <div className="allsub-subitem">8.66%</div>
                      {/* <div className="allsub-subitem">200</div> */}
                    </div>
                    <div className="allsub-item">
                      <input type="checkbox" />
                      <img className="allsub-img" src={Uni} />
                      <div className="allsub-subitem">UNI</div>
                      {/* <div className="allsub-subitem">Lorem</div> */}
                      {/* <div className="allsub-subitem">0.27%</div> */}
                      <div className="allsub-subitem">0.24%</div>
                      {/* <div className="allsub-subitem">300</div> */}
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
                    <div className="proceed-txt">{interestPrice}</div>
                    <div className="proceed-txt">Wei</div>
                    <div className="proceed-btn-main">
                      <button className="proceed-btn1" onClick={subscribe}>Pay</button>
                      <button className="proceed-btn2">Cancel</button>
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
  }
  else {
    return (
      <div className="loading-screen">
        <img className="loading-screen-image" src={loading_infinity} alt="loading" ></img>
      </div>
    );
  }
};

export default AllSubscription;
