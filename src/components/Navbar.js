import React from 'react'
import logo4 from "./images/logo4.png"
import logo5 from "./images/logo5.png"
import logo6 from "./images/logo6.png"
import logo7 from "./images/logo7.png"
import logo8 from "./images/logo8.png"
import logo9 from "./images/logo9.png"
import logo10 from "./images/logo10.png"
import logo11 from "./images/logo11.png"
import logo15 from "./images/logo15.png"

const Navbar = () => {
    return (
        <div style={{ backgroundColor: "#23252C", marginTop: "100px", boxShadow: "0 2px 2px rgba(0, 0, 0, 0.2)", padding: "10 0px", width: "250px", display: "flex", flexDirection: "column", alignItems: "center", fontSize: "10px", position: "absolute", top: 0, left: 0, paddingTop: "10px", }}>
            <input placeholder='Search for events, teams, leagues' style={{ padding: "5px 50px 5px 5px", marginTop: "5px", position: "relative", border: "none", height: "25px", width: "67%", backgroundColor: "#4e5261", color: "#fff" }} />
            <img src={logo4} alt="Logo4" style={{ height: "34px", position: "absolute", top: "15px", right: "18px" }} />


            <ul style={{ display: "flex", listStyle: "none", flexDirection: "column", gap: "8px", alignItems: "start", width: "100%", margin: "31px 0px" }}>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500", gap: "1px" }}>
                    <img src={logo5} alt="Logo5" style={{ height: "20px" }} />    <span className='li'>Live Betting</span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }} >
                    <img src={logo6} alt="Logo6" style={{ height: "20px" }} />
                    <span className='li'>UEFA EURO 2024 - Qualification</span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo6} alt="Logo6" style={{ height: "20px" }} />
                    <span className='li'>  AFC Champions League </span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo6} alt="Logo6" style={{ height: "20px" }} />
                    <span className='li'> UEFA Champions League </span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo6} alt="Logo6" style={{ height: "20px" }} />
                    <span className='li'>  UEFA Europa League </span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo6} alt="Logo6" style={{ height: "20px" }} />
                    <span className='li'>  UEFA Europa Conference League </span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo6} alt="Logo6" style={{ height: "20px" }} />
                    <span className='li'>  England Premier League </span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo6} alt="Logo6" style={{ height: "20px" }} />
                    <span className='li'>  Spain LaLiga </span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo6} alt="Logo6" style={{ height: "20px" }} />
                    <span className='li'> Copa del Rey </span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo6} alt="Logo6" style={{ height: "20px" }} />
                    <span className='li'> England FA Cup </span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo6} alt="Logo6" style={{ height: "20px" }} />
                    <span className='li'>  Italy Serie A </span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo6} alt="Logo6" style={{ height: "20px" }} />
                    <span className='li'> Italy Coppa Italia </span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo6} alt="Logo6" style={{ height: "20px" }} />
                    <span className='li'>  Germany Bundesliga </span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo6} alt="Logo6" style={{ height: "20px" }} />
                    <span className='li'> Germany DFB Pokal </span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo6} alt="Logo6" style={{ height: "20px" }} />
                    <span className='li'> France Ligue 1 </span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo6} alt="Logo6" style={{ height: "20px" }} />
                    <span className='li'>  England Championship </span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo7} alt="Logo7" style={{ height: "20px" }} />
                    <span className='li'> ATP - Madrid Open </span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo7} alt="Logo7" style={{ height: "20px" }} />
                    <span className='li'>  WTA - Madrid Open </span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo8} alt="Logo8" style={{ height: "20px" }} />
                    <span className='li'>   NBA </span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo8} alt="Logo8" style={{ height: "20px" }} />
                    <span className='li'>  NBA Specials </span>
                </li>
                <li style={{ color: "white", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500" }}>
                    <img src={logo10} alt="Logo10" style={{ height: "20px" }} />
                    <span className='li'> F1 - Miami Grand Prix </span>
                </li>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "start", height: "57px", marginRight: "10px" }}>  <img src={logo9} alt="Logo9" style={{ height: "35px", }} /></div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "start", marginTop: "-5px" }}><img src={logo11} alt="Logo11" style={{ height: "710px", width: "110%", marginLeft: "-10px" }} /></div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "start", marginTop: "-20px" }}><img src={logo15} alt="Logo15" style={{ height: "480px", width: "110%", marginLeft: "-10px" }} /></div>
            </ul>
        </div>
    )
}

export default Navbar