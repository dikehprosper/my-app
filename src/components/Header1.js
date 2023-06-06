import React, { useState } from "react";
import logo from "./images/logo.png"
import logo1 from "./images/logo1.png"
import logo50 from "./images/logo50.png"
import { NavLink } from 'react-router-dom';
import { BsEyeSlashFill } from "react-icons/bs"
import { FaEye } from "react-icons/fa"
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";


function Header1() {

    const dispatch = useDispatch();

    const [activeLink, setActiveLink] = useState("");

    const handleClick = (link) => {
        setActiveLink(link);
    };


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [show, setShow] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setTimeout(() => {
            setShow(false)
            dispatch(authActions.login());
        }, 1500)
    };



    function handleClick1() {

        setShow(prevShow => !prevShow);
    }

    function handleClick2() {
        setShow(false)
    }



    return (<>
        <header style={{ height: "100px", backgroundColor: "#373a45", boxShadow: "0 2px 2px rgba(0, 0, 0, 0.2)", padding: "0 30px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "10px", zIndex: "500" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src={logo} alt="Logo" style={{ height: "72px" }} />
                <nav className="links" >
                    <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
                        <li style={{ marginRight: "11px" }}>
                            <NavLink exact to="/" className={activeLink === "" ? "" : "active"}
                                onClick={() => handleClick("")} style={{ fontSize: "15px" }}>Sports</NavLink>
                        </li>
                        <li style={{ marginRight: "11px" }}>
                            <NavLink to="/Live" className={activeLink === "" ? "" : "active"}
                                onClick={() => handleClick("")} style={{ fontSize: "15px" }}>Live</NavLink>
                        </li>
                        <li style={{ marginRight: "11px" }}>
                            <NavLink to="/casino/category/new" className={activeLink === "" ? "" : "active"}
                                onClick={() => handleClick("")} style={{ fontSize: "15px" }}>Casino</NavLink>
                        </li>
                        <li style={{ marginRight: "11px" }}>
                            <NavLink to="/Live Casino" className={activeLink === "" ? "" : "active"}
                                onClick={() => handleClick("")} style={{ fontSize: "15px" }}>Live Casino</NavLink>
                        </li>
                        <li style={{ marginRight: "11px" }}>
                            <NavLink to="/League&Races" className={activeLink === "" ? "" : "active"}
                                onClick={() => handleClick("")} style={{ fontSize: "15px" }}>League&Races</NavLink>
                        </li>
                        <li style={{ marginRight: "11px" }}>
                            <NavLink to="/Virtual" className={activeLink === "" ? "" : "active"}
                                onClick={() => handleClick("")} style={{ fontSize: "15px" }}>Virtual</NavLink>
                        </li>
                        <li style={{ marginRight: "11px" }}>
                            <NavLink to="/Lotto" className={activeLink === "" ? "" : "active"}
                                onClick={() => handleClick("")} style={{ fontSize: "15px" }}>Lotto</NavLink>
                        </li>
                        <li style={{ marginRight: "11px" }}>
                            <NavLink to="/about" className={activeLink === "" ? "" : "active"}
                                onClick={() => handleClick("")} style={{ fontSize: "15px", position: "relative" }}>
                                <img src={logo1} alt="Logo11" style={{ height: "27px", position: "absolute", top: "-25px", right: "0px" }} />

                                Super9ja
                            </NavLink>
                        </li>
                        <li style={{ marginRight: "11px" }}>
                            <NavLink to="/Firebets" className={activeLink === "" ? "" : "active"}
                                onClick={() => handleClick("")} style={{ fontSize: "15px" }}>Firebets</NavLink>
                        </li>
                        <li style={{ marginRight: "11px" }}>
                            <NavLink to="/Promotions" className={activeLink === "" ? "" : "active"}
                                onClick={() => handleClick("")} style={{ fontSize: "15px" }}>Promotions</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="links">
                <NavLink to="/Register" className={activeLink === "" ? "active" : ""}
                    onClick={() => handleClick("")} style={{ fontSize: "12px", fontWeight: "500", marginRight: "11px" }}>Register</NavLink>
                <NavLink exact to="/Forgotten-password" className={activeLink === "" ? "" : "active"}
                    onClick={() => handleClick("")} style={{ fontSize: "12px", fontWeight: "500", opacity: 0.8 }}> <span className="forgotten">Forgotten Password?</span></NavLink>
                <button className="button" onClick={handleClick1}>Login</button>

                {show ?

                    <form onSubmit={handleSubmit} className="form1">
                        <img src={logo50} alt="Logo50" style={{ height: "16px", position: "absolute", top: "-16px", right: "19px" }} />
                        <div className="form3">
                            <div className="form4">
                                <label htmlFor="username" className="label">Username</label>

                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    required
                                    className="input"
                                />


                            </div>
                            <div className="form4">
                                <label htmlFor="password" className="label">Password</label>

                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                    className="input1"
                                />


                                <div onClick={handleShowPassword} className="show-password">
                                    {showPassword ? <FaEye /> : <BsEyeSlashFill />}
                                </div>
                            </div>

                            <input type="submit" value="Log In" className="submit" />
                        </div>
                        <div className="form2">
                            <p className="p1">Don't have an account yet?</p>
                            <p className="p2">Register Now</p>
                        </div>
                    </form> : null}

            </div>
        </header>
        {show ? <div className="backdrop" onClick={handleClick2}></div> : null}
    </>
    );
}

export default Header1;
