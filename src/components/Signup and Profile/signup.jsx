import React from "react";
import "./signup.scss";
import BG from "../../images/bg.svg";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { BiMobileAlt } from "react-icons/bi";

const SignUp = () => {
  return (
    <div
      className="sign-main"
      style={{
        backgroundImage: `url(${BG}`,
        // backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="sign-sub">
        <div className="sign-header">SignUp</div>
        <FiUser className="sign-icon" />
        <div className="sign-form-item">
          <input
            className="sign-text-field"
            type="text"
            placeholder="Name"
          ></input>
        </div>
        <HiOutlineMail className="sign-icon" />
        <div className="sign-form-item">
          <input
            className="sign-text-field"
            type="email"
            placeholder="E-Mail"
          ></input>
        </div>
        <BiMobileAlt className="sign-icon" />
        <div className="sign-form-item">
          <input
            className="sign-text-field"
            type="tel"
            placeholder="Mobile Number"
          ></input>
        </div>
        <button className="sign-btn">Submit</button>
        <button className="sign-btn">Upload</button>
      </div>
    </div>
  );
};

export default SignUp;
