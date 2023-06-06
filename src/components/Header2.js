import React, { useState } from "react";
import logo from "./images/logo.png";
import logo1 from "./images/logo1.png";
import logo51 from "./images/logo51.png";
import Profile from "./images/Profile-image.png";
import { NavLink } from "react-router-dom";
import { BsEyeSlashFill } from "react-icons/bs";
import { TbReload } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaEye } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

function Header2({ totalBalance }) {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link);
  };



  const [show, setShow] = useState(false);
    const dispatch = useDispatch();
  const handleSubmit = () => {
    setTimeout(() => {
      setShow(false)
      dispatch(authActions.logout());
      },1500)
    
    };  

  function handleClick1() {
    setShow(true);
  }

  function handleClick2() {
    setShow(false);
  }
  const formattedTotalBalance = totalBalance ? totalBalance.toFixed(2) : '0.00';



  return (
    <>
      <header
        style={{
          height: "100px",
          backgroundColor: "#373a45",
          boxShadow: "0 2px 2px rgba(0, 0, 0, 0.2)",
          padding: "0 30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "10px",
          zIndex: "500",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ height: "72px" }} />
          <nav className="links">
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <li style={{ marginRight: "11px" }}>
                <NavLink
                  exact
                  to="/"
                  className={activeLink === "" ? "" : "active"}
                  onClick={() => handleClick("")}
                  style={{ fontSize: "15px" }}
                >
                  Sports
                </NavLink>
              </li>
              <li style={{ marginRight: "11px" }}>
                <NavLink
                  to="/Live"
                  className={activeLink === "" ? "" : "active"}
                  onClick={() => handleClick("")}
                  style={{ fontSize: "15px" }}
                >
                  Live
                </NavLink>
              </li>
              <li style={{ marginRight: "11px" }}>
                <NavLink
                  to="/simulate"
                  className={activeLink === "" ? "" : "active"}
                  onClick={() => handleClick("")}
                  style={{ fontSize: "15px" }}
                >
                  Simulate
                </NavLink>
              </li>
              <li style={{ marginRight: "11px" }}>
                <NavLink
                  to="/casino/category/new"
                  className={activeLink === "" ? "" : "active"}
                  onClick={() => handleClick("")}
                  style={{ fontSize: "15px" }}
                >
                  Casino
                </NavLink>
              </li>
              <li style={{ marginRight: "11px" }}>
                <NavLink
                  to="/Live Casino"
                  className={activeLink === "" ? "" : "active"}
                  onClick={() => handleClick("")}
                  style={{ fontSize: "15px" }}
                >
                  Live Casino
                </NavLink>
              </li>
              <li style={{ marginRight: "11px" }}>
                <NavLink
                  to="/League&Races"
                  className={activeLink === "" ? "" : "active"}
                  onClick={() => handleClick("")}
                  style={{ fontSize: "15px" }}
                >
                  League&Races
                </NavLink>
              </li>
              <li style={{ marginRight: "11px" }}>
                <NavLink
                  to="/Virtual"
                  className={activeLink === "" ? "" : "active"}
                  onClick={() => handleClick("")}
                  style={{ fontSize: "15px" }}
                >
                  Virtual
                </NavLink>
              </li>
              <li style={{ marginRight: "11px" }}>
                <NavLink
                  to="/Lotto"
                  className={activeLink === "" ? "" : "active"}
                  onClick={() => handleClick("")}
                  style={{ fontSize: "15px" }}
                >
                  Lotto
                </NavLink>
              </li>
              <li style={{ marginRight: "11px" }}>
                <NavLink
                  to="/about"
                  className={activeLink === "" ? "" : "active"}
                  onClick={() => handleClick("")}
                  style={{ fontSize: "15px", position: "relative" }}
                >
                  <img
                    src={logo1}
                    alt="Logo11"
                    style={{
                      height: "27px",
                      position: "absolute",
                      top: "-25px",
                      right: "0px",
                    }}
                  />
                  Super9ja
                </NavLink>
              </li>
              <li style={{ marginRight: "11px" }}>
                <NavLink
                  to="/Firebets"
                  className={activeLink === "" ? "" : "active"}
                  onClick={() => handleClick("")}
                  style={{ fontSize: "15px" }}
                >
                  Firebets
                </NavLink>
              </li>
              <li style={{ marginRight: "11px" }}>
                <NavLink
                  to="/Promotions"
                  className={activeLink === "" ? "" : "active"}
                  onClick={() => handleClick("")}
                  style={{ fontSize: "15px" }}
                >
                  Promotions
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="links">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavLink
              to="/Register"
              className={activeLink === "" ? "active" : ""}
              onClick={() => handleClick("")}
              style={{
                fontSize: "12px",
                fontWeight: "500",
                marginRight: "11px",
              }}
            >
              Make a Deposit
            </NavLink>

            <button
              className="button4"
              onClick={handleClick1}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding:"1px 2px 1px 6px"
              }}
            >
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "500",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                
                }}
              >
                <img src={Profile} alt ="" style={{ height: "25px", color: "white", marginRight:"3px" }} />
                 My Account
              </span>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "500",
                  fontSize: "12px",
                marginLeft:"10px"
                
                }}
              >
                {formattedTotalBalance}
                <IoMdArrowDropdown
                  style={{ fontSize: "14px", color: "white" }}
                />
              </span>
            </button>
          </div>

          {show ? (
            <div className="profile1-1">
            <div className="profile" >
              <div className="profile3">
                <div className="profile8">
                  <div className="profile12">REELSTATS1</div>
                  <div className="profile6">ID: 17517587</div>
                </div>
                <div className="profile13">
                  <FaEye style={{ fontSize: "17px", fontWeight: "600" }} />{" "}
                  &nbsp;{" "}
                  <TbReload style={{ fontSize: "16px", fontWeight: "600" }} />
                </div>
              </div>
              <div className="profile3">
                <div className="profile8">
                  <div className="profile6">WITHDRAWABLE</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      fontWeight: "500",
                      fontSize: "12px",
                    }}
                  >
                    <img src={logo51} alt="logo51" style={{ height: "13px", marginRight: "3px" }} />   {formattedTotalBalance}
                   
                  </div>
                </div>
              </div>
              <div className="profile5">
                <div className="profile1">My Account</div>
                  <NavLink to="/casino/category/new/bet" className="profile1-1-1" style={{ color: "white" }} onClick={handleClick2}> <div className="profile1">My Bets</div>  </NavLink> 
                <div className="profile1">Cashier</div>
                <div className="profile1">Messages</div>
                <div className="profile1">Sport Bonus</div>
                <div className="profile1">Bonus Casino</div>
                <div className="profile1">Bet9ja Rewards</div>
                  <NavLink to="/casino/category/new" className="profile14" style={{ color: "white" }} onClick={handleSubmit}>Logout</NavLink>
              </div>{" "}
            </div></div>
          ) : null}
        </div>
      </header>
      {show ? <div className="backdrop" onClick={handleClick2}></div> : null}
    </>
  );
}

export default Header2;
