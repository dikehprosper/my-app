import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from "react-icons/bi"
import { NavLink } from 'react-router-dom';



const Navbar2 = () => {
    const [Link1, setActiveLink1] = useState(true);
    const [Link2, setActiveLink2] = useState(false);
    const [activeLink3, setActiveLink3] = useState(false);
    const [activeLink4, setActiveLink4] = useState(false);
    const [activeLink5, setActiveLink5] = useState(false);
    const [activeLink6, setActiveLink6] = useState(false);
    const [activeLink7, setActiveLink7] = useState(false);
    const [activeLink8, setActiveLink8] = useState(false);
    const [activeLink9, setActiveLink9] = useState(false);
    const [activeLink10, setActiveLink10] = useState(false);
    const [activeLink11, setActiveLink11] = useState(false);
    const [activeLink12, setActiveLink12] = useState(false);
    const [activeLink13, setActiveLink13] = useState(false);

    const handleClick1 = () => {
        setActiveLink1(true);
        setActiveLink2(false);
    };
    const handleClick2 = () => {
        setActiveLink1(false);
        setActiveLink2(true);
    };
    const handleClick3 = () => {
        setActiveLink3(false);
    };
    const handleClick4 = () => {
        setActiveLink4(false);
    };
    const handleClick5 = () => {
        setActiveLink5(false);
    };
    const handleClick6 = () => {
        setActiveLink6(false);
    };
    const handleClick7 = () => {
        setActiveLink7(false);
    };
    const handleClick8 = () => {
        setActiveLink8(false);
    };
    const handleClick9 = () => {
        setActiveLink9(false);
    };
    const handleClick10 = () => {
        setActiveLink10(false);
    };
    const handleClick11 = () => {
        setActiveLink11(false);
    };
    const handleClick12 = () => {
        setActiveLink12(false);
    };
    const handleClick13 = () => {
        setActiveLink13(false);
    };


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollPos = window.scrollY;
            if (scrollPos > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (<div style={{ backgroundColor: "#23252C", position: "absolute", top: 0, left: 0, bottom: "-278px", width: "250px", zIndex: "0", marginTop: "100px" }} className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div style={{ backgroundColor: "#23252C", boxShadow: "0 2px 2px rgba(0, 0, 0, 0.2)", padding: "10 0px", width: "250px", display: "flex", flexDirection: "column", alignItems: "center", fontSize: "10px", position: "absolute", top: 0, left: 0, paddingTop: "10px", borderBottom: "0.8px solid #ffffff75" }}>
            <input placeholder='Search' className="search1" style={{ padding: "5px 50px 5px 5px", marginTop: "5px", position: "relative", border: "none", height: "25px", width: "67%", borderRadius: "2.5px", backgroundColor: "#2c2e37", color: "#fff" }} />
            <BiSearchAlt2 style={{ fontSize: "26.5px", position: "absolute", top: "20px", right: "19px", color: "white", opacity: "0.7" }} />

            <ul className="ul2" style={{ display: "flex", listStyle: "none", flexDirection: "column", gap: "17px", alignItems: "start", width: "100%", margin: "25px 0px" }}>
                <li style={{ color: "white", display: "flex", width: "100%", alignItems: "center", fontSize: "12px", fontWeight: "500", gap: "147px", justifyItems: "space-between" }}>
                    <span className='li2'><NavLink to="/casino/category/new" style={{ fontSize: "13.2px" }} className={Link1 ? "active1" : "active2"}
                        onClick={() => handleClick1("")}>New </NavLink></span>
                    <div style={{ background: "#e6bc48", width: "25px", height: "25px", borderRadius: "13px", color: "black", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center", alignSelf: "end" }}>45</div>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500", gap: "121px", }} >

                    <span className='li2'><NavLink className={Link2 ? "active1" : "active2"} to="/casino/category/new/Popular"
                        onClick={() => handleClick2("")}>Popular </NavLink></span>
                    <div style={{ background: "#e6bc48", width: "25px", height: "25px", borderRadius: "13px", color: "black", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center" }}>21</div>

                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500", gap: "98px", }}>

                    <span className='li2'><NavLink to="/casino/category/new/TopGames" className={activeLink3 ? "active1" : ""}
                        onClick={() => handleClick3("")}>  Top Games </NavLink></span>
                    <div style={{ background: "#e6bc48", width: "25px", height: "25px", borderRadius: "13px", color: "black", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center" }}>19</div>

                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500", gap: "157px", }}>

                    <span className='li2'> <NavLink to="/casino/category/new/" style={{ fontSize: "13.2px" }} className={activeLink4 ? "active1" : ""}
                        onClick={() => handleClick4("")}>All </NavLink> </span>
                    <div style={{ background: "#e6bc48", width: "25px", height: "25px", borderRadius: "13px", color: "black", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center" }}>709</div>

                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500", gap: "94px", }}>

                    <span className='li2'>  <NavLink to="/casino/category/new/" style={{ fontSize: "13.2px" }} className={activeLink5 ? "active1" : ""}
                        onClick={() => handleClick5("")}>Drops & Wins </NavLink> </span>
                    <div style={{ background: "#e6bc48", width: "25px", height: "25px", borderRadius: "13px", color: "black", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center" }}>55</div>

                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500", gap: "97px", }}>

                    <span className='li2'>  <NavLink to="/casino/category/new/" style={{ fontSize: "13.2px" }} className={activeLink6 ? "active1" : ""}
                        onClick={() => handleClick6("")}>Table Games </NavLink>  </span>
                    <div style={{ background: "#e6bc48", width: "25px", height: "25px", borderRadius: "13px", color: "black", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center" }}>45</div>

                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500", gap: "127px", }}>

                    <span className='li2'>  <NavLink to="/casino/category/new/" style={{ fontSize: "13.2px" }} className={activeLink7 ? "active1" : ""}
                        onClick={() => handleClick7("")}>Instants </NavLink>  </span>
                    <div style={{ background: "#e6bc48", width: "25px", height: "25px", borderRadius: "13px", color: "black", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center" }}>6</div>

                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500", gap: "107px", }}>

                    <span className='li2'> <NavLink to="/casino/category/new/" style={{ fontSize: "13.2px" }} className={activeLink8 ? "active1" : ""}
                        onClick={() => handleClick8("")}>Live Casino </NavLink>   </span>
                    <div style={{ background: "#e6bc48", width: "25px", height: "25px", borderRadius: "13px", color: "black", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center" }}>22</div>

                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500", gap: "115px", }}>

                    <span className='li2'>  <NavLink to="/casino/category/new/" style={{ fontSize: "13.2px" }} className={activeLink9 ? "active1" : ""}
                        onClick={() => handleClick9("")}>TV Games </NavLink> </span>
                    <div style={{ background: "#e6bc48", width: "25px", height: "25px", borderRadius: "13px", color: "black", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center" }}>12</div>

                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500", gap: "135px", }}>

                    <span className='li2'>  <NavLink to="/casino/category/new/" style={{ fontSize: "13.2px" }} className={activeLink10 ? "active1" : ""}
                        onClick={() => handleClick10("")}>Arcade </NavLink> </span>
                    <div style={{ background: "#e6bc48", width: "25px", height: "25px", borderRadius: "13px", color: "black", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center" }}>23</div>

                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500", gap: "127px", }}>

                    <span className='li2'>  <NavLink to="/casino/category/new/" style={{ fontSize: "13.2px" }} className={activeLink11 ? "active1" : ""}
                        onClick={() => handleClick11("")}>Roulette </NavLink> </span>
                    <div style={{ background: "#e6bc48", width: "25px", height: "25px", borderRadius: "13px", color: "black", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center" }}>22</div>

                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500", gap: "123px", }}>

                    <span className='li2'> <NavLink to="/casino/category/new/" style={{ fontSize: "13.2px" }} className={activeLink12 ? "active1" : ""}
                        onClick={() => handleClick12("")}>Numbers </NavLink>  </span>
                    <div style={{ background: "#e6bc48", width: "25px", height: "25px", borderRadius: "13px", color: "black", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center" }}>7</div>

                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500", gap: "147px", justifyContent: "space-between" }}>

                    <span className='li2'>  <NavLink to="/casino/category/new/" style={{ fontSize: "13.2px" }} className={activeLink13 ? "active1" : ""}
                        onClick={() => handleClick13("")}>Slots </NavLink>  </span>
                    <div style={{ background: "#e6bc48", width: "25px", height: "25px", borderRadius: "13px", color: "black", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center" }}>593</div>

                    <div></div>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar2;