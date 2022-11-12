import React, { useState } from "react";
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

const Profile = ({ mainContract, account }) => {
  const [isLoading, setLoading] = React.useState(true);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [buttonPopup, setButtonPopup] = useState(false);

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
        <div className="profile-header">Profile</div>
        {/* <div className="profile-top"></div> */}
        <div className="profile-position">
          <div className="profile-left">
            <img className="profile-img" src={ProfilePic} />
            <div className="profile-content-main">
              <FiUser className="profile-icon" />
              <div className="profile-content">Name</div>
            </div>
            <div className="profile-content-main">
              <HiOutlineMail className="profile-icon" />
              <div className="profile-content">email@email.com</div>
            </div>
            <div className="profile-content-main">
              <BiMobileAlt className="profile-icon" />
              <div className="profile-content">9876543210</div>
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
