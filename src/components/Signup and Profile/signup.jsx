import "./signup.scss";
import BG from "../../images/bg.svg";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { BiMobileAlt } from "react-icons/bi";
import { ethers } from "ethers";
import React, { useState } from "react";
import stakescription_abi from "../../artifacts/contracts/stakescription.sol/stakescription.json";





const SignUp = () => {
  const CONTRACT_ADDRESS = "0xED21081539Da5068e8756edB49D52c71B6fa8305";  //polygon address
  const [userAddress, setUserAddress] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const addUser = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner()
      const addr = await signer.getAddress();
      setUserAddress(addr.toString());

      const connectedContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        stakescription_abi.abi,
        signer
      );
      console.log("wait...")
      let tx = await connectedContract.addUser(name, email, number, "https://ipfs.io/ipfs/bafkreigdm7g3tgg3u34dai5lr4sj3rrbuirw56dn2kpgcifuckvee3h2ru");
      console.log('=V=====V=======V=========V=======V=====V=');
      console.log(tx);
      console.log("value set!")
      console.log('====================================');
    }
  }


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
            onChange={(e) => { setName(e.target.value) }}
          ></input>
        </div>
        <HiOutlineMail className="sign-icon" />
        <div className="sign-form-item">
          <input
            className="sign-text-field"
            type="email"
            placeholder="E-Mail"
            onChange={(e) => { setEmail(e.target.value) }}
          ></input>
        </div>
        <BiMobileAlt className="sign-icon" />
        <div className="sign-form-item">
          <input
            className="sign-text-field"
            type="tel"
            placeholder="Mobile Number"
            onChange={(e) => { setNumber(e.target.value) }}
          ></input>
        </div>
        <button className="sign-btn" onClick={addUser}>Submit</button>
      </div>
    </div>
  );
};

export default SignUp;
