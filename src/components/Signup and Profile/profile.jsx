import React, { useState, useEffect } from "react";
import "./profile.scss";
import EditProfile from "./editprofile";
import BG from "../../images/bg.svg";
import ProfilePic from "../../images/man.png";
import AAVE from "../../images/aave.svg";
import Link from "../../images/link.svg";
import Uni from "../../images/uni.svg";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { BiMobileAlt } from "react-icons/bi";
import { ethers } from "ethers";
import ss_abi from "../../artifacts/contracts/stakescription.sol/stakescription.json";

const Profile = ({ mainContract, account }) => {

  const CONTRACT_ADDRESS = "0xc892caEe8eca7734A66F2d6Bb69F123e610dB9fc";

  const [userAddress, setUserAddress] = useState("");
  const [isLoading, setLoading] = React.useState(true);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [buttonPopup, setButtonPopup] = useState(false);

  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userNumber, setUserNumber] = React.useState("");
  const [userImage, setUserImage] = React.useState("");

  useEffect(() => {
    getUserDetails();
  }, [])

  const getUserDetails = async () => {
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
      let tx = await connectedContract.getUserDetails("0xDaB4984b2F4e06d207f73678935A649ae6969490");

      console.log('=V======V========V======V=======V=======V=');
      console.log(tx[0]);
      setUserName(tx[0]);

      console.log(tx[1]);
      setUserEmail(tx[1]);

      console.log(parseInt(tx[2]));
      setUserNumber(parseInt(tx[2]));

      console.log(tx[4]);
      setUserImage(tx[4]);

      console.log("Data Fetched!");
      console.log('====================================');

    }
  }

  return (
    <div
      className="profile-main"
      style={{
        backgroundImage: `url(${BG}`,
        // backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {buttonPopup && (
        <EditProfile
          closeModal={setButtonPopup}
          mainContract={mainContract}
          account={account}
          name={name}
          email={email}
          designation={designation}
        />
      )}
      <div className="profile-sub">

        {/* <div className="profile-top"></div> */}
        <div className="profile-position">
          <div className="profile-left">
            <div className="profile-header">Profile</div>
            <img className="profile-img" src={userImage} />
            <div className="profile-content-main">
              <FiUser className="profile-icon" />
              <div className="profile-content">{userName}</div>
            </div>
            <div className="profile-content-main">
              <HiOutlineMail className="profile-icon" />
              <div className="profile-content">{userEmail}</div>
            </div>
            <div className="profile-content-main">
              <BiMobileAlt className="profile-icon" />
              <div className="profile-content">{userNumber}</div>
            </div>
          </div>
          <div className="profile-right">
            <div className="profile-sub-header">Previous Subscription</div>
            <div className="profile-right-main">
              <div className="profile-right-sub">
                <img className="profile-right-icon" src={AAVE} />
                <div className="profile-right-txt">AAVE</div>
              </div>
              <div className="profile-right-sub">
                <img className="profile-right-icon" src={Link} />
                <div className="profile-right-txt">LINK</div>
              </div>
              <div className="profile-right-sub">
                <img className="profile-right-icon" src={Uni} />
                <div className="profile-right-txt">UNI</div>
              </div>
              <div className="profile-right-sub">
                <img className="profile-right-icon" src={AAVE} />
                <div className="profile-right-txt">AAVE</div>
              </div>
              <div className="profile-right-sub">
                <img className="profile-right-icon" src={Link} />
                <div className="profile-right-txt">LINK</div>
              </div>
              <div className="profile-right-sub">
                <img className="profile-right-icon" src={Uni} />
                <div className="profile-right-txt">UNI</div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setButtonPopup(true);
          }}
          className="profile-btn"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
