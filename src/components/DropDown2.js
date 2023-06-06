import * as React from 'react';
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md"


const DropDown2 = ({ changeValueState1 }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    function sendValue() {
        handleOpen();
        changeValueState1("Open")
    }

    function sendValue2() {
        handleOpen();
        changeValueState1("All")
    }
    function sendValue3() {
        handleOpen();
        changeValueState1("Won")
    }
    function sendValue4() {
        handleOpen();
        changeValueState1("Lost")
    }
    function sendValue5() {
        handleOpen();
        changeValueState1("Void")
    }
    return (
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "3px", marginLeft: "10px", width: "10px", height: "7px" }}>
                {open ? <div onClick={handleOpen}><MdArrowDropUp fontSize="25px" backgroundColor="white" /></div> :
                    <div onClick={handleOpen}><MdArrowDropDown fontSize="25px" backgroundColor="white" /></div>}
            </div>

            {open ? (
                <ul style={{ position: "absolute", width: "75px", padding: "0px 0px 0px 0px", top: "31px", zIndex: '1000', left: "-55px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <li className="menu-item1" onClick={sendValue2}>
                        All
                    </li>
                    <li className="menu-item1" onClick={sendValue}>
                        Open
                    </li>
                    <li className="menu-item1" onClick={sendValue3}>
                        Won
                    </li>
                    <li className="menu-item1" onClick={sendValue4}>
                        Lost
                    </li>
                    <li className="menu-item1" onClick={sendValue5}>
                        Void
                    </li>
                </ul>
            ) : null}
            {open ? <div className="backdrop2" onClick={handleOpen}></div> : null}
        </div>
    );
};

export default DropDown2;