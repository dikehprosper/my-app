import React, {useState} from 'react'
import logo13 from "./images/logo13.png"
import logo14 from "./images/logo14.png"
import logo16 from "./images/logo16.jpg"
import logo17 from "./images/logo17.jpg"
import logo18 from "./images/logo18.jpeg"
import logo19 from "./images/logo19.jpg"
import logo20 from "./images/logo20.jpg"
import logo21 from "./images/logo21.jpeg"
import logo22 from "./images/logo22.jpeg"
import logo23 from "./images/logo23.png"
import logo24 from "./images/logo24.png"
import logo25 from "./images/logo25.png"
import logo26 from "./images/logo26.png"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';



const Body = () => {

    window.onload = function () {
        var left = document.querySelector(".marque");
        setInterval(function () {
            left.scrollBy({
                left: 459,
                top: 0,
                behavior: "smooth"
            });
        }, 6000); // repeat every 5 seconds (5000 milliseconds)
    };
    function ScrollRight() {
        var left = document.querySelector(".marque");
        left.scrollBy({
            left: -459,
            top: 0,
            behavior: "smooth"
        });
    }
    function ScrollLeft() {
        var left = document.querySelector(".marque");
        left.scrollBy({
            left: 459,
            top: 0,
            behavior: "smooth"
        });
    }

    function getTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0'); // add leading zero if necessary
        const minutes = now.getMinutes().toString().padStart(2, '0'); // add leading zero if necessary
      
        return `${hours}:${minutes}`;
    }
    const [timeString, setTimeString] = useState("")
    
    setInterval(() => {
        setTimeString(getTime());
         // or do something else with the time string
    }, 1000);

    return (
        <div className='body'> <img src={logo13} alt="logo13" className='logo13' />
            <div style={{ position: 'relative' }}> <img src={logo14} alt="logo14" className='logo14' />
                <div style={{ fontSize: "12px", color: "#ffffff80", position: 'absolute', top: "-58px", marginLeft: "8px", padding: "6px", fontWeight: "500", background: "black" }}>{timeString}</div></div>
           

            <div className='marque' position="relative">
                <div style={{
                    position: "absolute", top: "60px", left: "0", right: "335px", bottom: "-60px", backgroundColor: "rgba(0, 0, 0, 0.2"
                }} className='box-shadow'></div>
                <div style={{
                    position: "absolute", top: "138px", left: "40px",
                    padding: "5px", borderRadius: "17px", backgroundColor: "rgba(0, 0, 0, 0.5)", border: "1px solid white", display: "flex", alignItems: "center", justifyContent: "center"
                }} onClick={ScrollRight} > <IoIosArrowBack style={{ fontSize: "20px", color: "white" }} /></div>
                <img src={logo23} alt="Logo23" style={{ height: "190px", borderRadius: "4px", boxShadow: "100px -100px 100px rgba(0, 0, 0, 0.2)" }} />
                <img src={logo17} alt="Logo17" style={{ marginLeft: "10px", borderRadius: "4px", }} />
                <img src={logo18} alt="Logo18" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo19} alt="Logo19" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo20} alt="Logo20" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo21} alt="Logo21" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo22} alt="Logo22" style={{ marginLeft: "10px" }} />
                <img src={logo16} alt="Logo16" style={{ marginLeft: "10px" }} />
                <img src={logo17} alt="Logo17" style={{ marginLeft: "10px" }} />
                <img src={logo18} alt="Logo18" style={{ marginLeft: "10px" }} />
                <img src={logo19} alt="Logo19" style={{ marginLeft: "10px" }} />
                <img src={logo20} alt="Logo20" style={{ marginLeft: "10px" }} />
                <img src={logo21} alt="Logo21" style={{ marginLeft: "10px" }} />
                <img src={logo22} alt="Logo22" style={{ marginLeft: "10px" }} />
                <img src={logo16} alt="Logo16" style={{ marginLeft: "10px" }} />
                <img src={logo17} alt="Logo17" style={{ marginLeft: "10px" }} />
                <img src={logo18} alt="Logo18" style={{ marginLeft: "10px" }} />
                <img src={logo19} alt="Logo19" style={{ marginLeft: "10px" }} />
                <img src={logo20} alt="Logo20" style={{ marginLeft: "10px" }} />
                <img src={logo21} alt="Logo21" style={{ marginLeft: "10px" }} />
                <img src={logo22} alt="Logo22" style={{ marginLeft: "10px" }} />
                <img src={logo16} alt="Logo16" style={{ marginLeft: "10px" }} />
                <img src={logo17} alt="Logo17" style={{ marginLeft: "10px" }} />
                <img src={logo18} alt="Logo18" style={{ marginLeft: "10px" }} />
                <img src={logo19} alt="Logo19" style={{ marginLeft: "10px" }} />
                <img src={logo20} alt="Logo20" style={{ marginLeft: "10px" }} />
                <img src={logo21} alt="Logo21" style={{ marginLeft: "10px" }} />
                <img src={logo22} alt="Logo22" style={{ marginLeft: "10px" }} />
                <img src={logo16} alt="Logo16" style={{ marginLeft: "10px" }} />
                <img src={logo17} alt="Logo17" style={{ marginLeft: "10px" }} />
                <img src={logo18} alt="Logo18" style={{ marginLeft: "10px" }} />
                <img src={logo19} alt="Logo19" style={{ marginLeft: "10px" }} />
                <img src={logo20} alt="Logo20" style={{ marginLeft: "10px" }} />
                <img src={logo21} alt="Logo21" style={{ marginLeft: "10px" }} />
                <img src={logo22} alt="Logo22" style={{ marginLeft: "10px" }} />
                <div style={{
                    position: "absolute", top: "138px", right: "374px",
                    padding: "5px", borderRadius: "17px", backgroundColor: "rgba(0, 0, 0, 0.5)", border: "1px solid white", display: "flex", alignItems: "center", justifyContent: "center"
                }} onClick={ScrollLeft}> <IoIosArrowForward style={{ fontSize: "20px", color: "white" }} /></div>

            </div>
            <img src={logo24} alt="logo24" className='logo24' />
            <img src={logo25} alt="logo25" className='logo25' />
            
        </div>
    )
}

export default Body