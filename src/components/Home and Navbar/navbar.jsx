import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import MenuIcon from "./MenuIcon";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const Navbar = () => {
  // const [error, setError] = useState();
  let navigate = useNavigate();
  const { isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  // const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(true);
  const [connected, setConnection] = useState(false);

  const connectWallet = () => {
    connect();
  };

  useEffect(() => {
    if (isConnected) {
      setConnection(true);
    } else {
      setConnection(false);
    }
  }, [isConnected]);

  useEffect(() => {
    if (isConnected) {
      setConnection(true);
    } else {
      setConnection(false);
    }
  }, []);

  return (
    <nav className="navbar">
      {/* <Link to="/" className="nav-logo">
        <img src={logo} />
      </Link> */}
      {/* <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div> */}
      {/* <ul className={open ? "nav-links" : "nav-links active"}> */}
      <ul className="nav-links">
        <li>
          <img className="nav-logo" src={logo} />
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <div className="navtextstyle">Home</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            <div className="navtextstyle">Sign In</div>
          </Link>
        </li>
        {connected ? (
          <>
            <li className="nav-item">
              <Link to="/subscription" className="nav-link">
                <div className="navtextstyle">Explore</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                <div className="navtextstyle">Profile</div>
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="nav-disconnect"
                onClick={() => {
                  disconnect();
                }}
              >
                Disconnect
              </button>
            </li>
          </>
        ) : (
          <li className="nav-item">
            <button
              className="nav-button"
              onClick={() => {
                connectWallet();
              }}
            >
              Connect
            </button>
          </li>
        )}
      </ul>
      <div
        className="nav-ham-menu"
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <MenuIcon />
      </div>
      {menu ? (
        <div className="mobile-menu">
          <ul>
            <li>
              <span
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign In
              </span>
            </li>
            {connected ? (
              <>
                <li>
                  <span
                    onClick={() => {
                      navigate("/subscription");
                    }}
                  >
                    Explore
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => {
                      navigate("/profile");
                    }}
                  >
                    Profile
                  </span>
                </li>
                <li>
                  <button
                    className="nav-button"
                    onClick={() => {
                      disconnect();
                    }}
                  >
                    Disconnect
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button
                  className="nav-button"
                  onClick={() => {
                    connectWallet();
                  }}
                >
                  Connect
                </button>
              </li>
            )}
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
