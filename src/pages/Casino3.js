import React, { useState, useEffect } from "react";
import BetHistory from "../components/BetHistory";
import EmptyBetHistory from "../components/EmptyBetHistory";
import DropDown1 from "../components/DropDown1";
import DropDown2 from "../components/DropDown2";
import DropDown3 from "../components/DropDown3";
import LoadingAnimation4 from "../components/LoadingAnimation4";


function getTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // add leading zero if necessary
    const minutes = now.getMinutes().toString().padStart(2, '0'); // add leading zero if necessary

    return `${hours}:${minutes}`;
}

const Casino3 = ({ data, isLoading, isLoading1 }) => {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        setEndDate(date());
        setStartDate(time());
    }, []);

    function date() {
        const currentDate = new Date();
        const formattedEndDate = formatDate(currentDate);
        return formattedEndDate;
    }

    function time() {
        const currentDate = new Date();
        const eightDaysBefore = new Date(currentDate);
        eightDaysBefore.setDate(currentDate.getDate() - 5);
        const formattedStartDate = formatDate(eightDaysBefore);
        return formattedStartDate;
    }

    const formatDate = (date) => {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
    };




    const filteredElements = data !== null && data.filter((element) => {
        const elementDate = element.ResultDate.split(' ')[0];
        return elementDate >= startDate && elementDate <= endDate;
    });
  

    const groupedElements = filteredElements && filteredElements.reduce((acc, element) => {
        const elementDate = element.ResultDate.split(' ')[0]
        console.log(elementDate)
        if (!acc[elementDate]) {
            acc[elementDate] = [];
        }
        acc[elementDate].push(element);
        return acc;
    }, {});




    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeString(getTime());
            // or do something else with the time string
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

const [value, setValue] = useState("All")
    function changeValueState(value)  {
        setValue(value)
    }
    
    const [value1, setValue1] = useState("All")
    function changeValueState1(value) {
        setValue1(value)
    }
   
    const [isLoading3, setIsLoading3] = useState(true);

    useEffect(() => {
        // Simulate page loading delay
        const timer = setTimeout(() => {
            setIsLoading3(false);
        }, 1000);

        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (<div style={{ position: "relative" }}>{isLoading3 ?
        <LoadingAnimation4 />
        :
        <div style={{ height: "760px", width: "100vw", backgroundColor: "black" }} >
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "start",
                    alignItems: "center",
                    height: "45px",
                    borderBottom: "1px solid #373a45",
                    fontWeight: "500",
                    color: "#ffffff80",
                    fontSize: "12px",
                }}
            >
                <div
                    style={{
                        height: "16px",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        width: "123px",
                        borderRight: "1px solid #373a45",
                        paddingLeft: "4px"
                    }}
                >
                    {timeString} Africa/Lagos
                </div>
                <div style={{ marginLeft: "20px", color: "white", fontSize: "12px", cursor: "pointer" }} className="results"> Home</div>
                <div style={{ marginLeft: "15px", color: "white", fontSize: "12px", fontWeight: "bold", cursor: "pointer" }}>Bet List</div>
            </div>

            <div
                style={{
                    display: "flex",
                    width: "100vw",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "48px",
                    backgroundColor: "#373a45",
                    fontWeight: "500",
                    color: "white",
                    fontSize: "12px",
                    padding: "0px 30px",
                    marginTop: "15px"
                }}
            >
                <div
                    style={{
                        height: "16px",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        width: "323px",
                    }}
                >
                    Date: {startDate} - {endDate} <DropDown1 />
                </div>
                <div style={{ display: "flex", width: "203px", paddingRight: "50px" }}>
                    <div style={{ marginLeft: "20px", color: "white", fontSize: "12px", cursor: "pointer", display: "flex", }}>
                        Status: {value1}<DropDown2 changeValueState1={changeValueState1} />
                    </div><br />

                    <div style={{ marginLeft: "20px", color: "white", fontSize: "12px", cursor: "pointer", display: "flex", gap: "-3px" }}>
                        Game: {value}<DropDown3 changeValueState={changeValueState} />
                    </div>
                </div>
            </div>



            {data ? <BetHistory isLoading={isLoading} isLoading1={isLoading1} data={data} groupedElements={groupedElements} /> : <EmptyBetHistory isLoading={isLoading} />
            }
        </div>
    } </div>  );
}

export default Casino3;
