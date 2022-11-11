import React, { useState } from "react";
import "./profile.scss";
import EditProfile from "./editprofile";
import BG from "../../images/bg.svg";
import ProfilePic from "../../images/man.png";
import SpotifyB from "../../images/spotify-1.svg";
import Netflix from "../../images/netflix.svg";
import HuluB from "../../images/hulu-1.svg";
import AppleTV from "../../images/appletv.svg";
import Disney from "../../images/Disney.svg";

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
        <img className="profile-img" src={ProfilePic} />
        <div className="profile-top">
          <div className="profile-content">Adam</div>
          <div className="profile-content">adam@gmail.com</div>
          <div className="profile-content">9898983161</div>
        </div>
        <div className="profile-position">
          <div className="profile-left">
            <div className="profile-sub-header">Previous Subscription</div>
          </div>
          <div className="profile-right">
            <div className="profile-sub-header">All Subscription</div>
            <img className="profile-btn-img" src={SpotifyB} />
            <img className="profile-btn-img" src={Netflix} />
            <img className="profile-btn-img" src={AppleTV} />
            {/* <img className="profile-btn-img" src={HuluB} /> */}
            <img className="profile-btn-img" src={Disney} />
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
