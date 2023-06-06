import * as React from 'react';
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md"


const DropDown3 = ({ changeValueState }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    function sendValue() {
        handleOpen();
        changeValueState("49ja")
    }

    function sendValue2() {
        handleOpen();
        changeValueState("All")
    }
    return (
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "3px", marginLeft: "10px", width: "10px", height: "7px" }}>
                {open ? <div onClick={handleOpen}><MdArrowDropUp fontSize="25px" backgroundColor="white" /></div> :
                    <div onClick={handleOpen}><MdArrowDropDown fontSize="25px" backgroundColor="white" /></div>}
            </div>

            {open ? (
                <ul style={{ position: "absolute", width: "150px", padding: "0px 0px 0px 0px", top: "31px", zIndex: '1000', left: "-122px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <li className="menu-item" onClick={sendValue2}>
                        All
                    </li>
                    <li className="menu-item" onClick={sendValue}>
                        49ja
                    </li>

                </ul>
            ) : null}
            {open ? <div className="backdrop1" onClick={handleOpen}></div> : null}
        </div>
    );
};

export default DropDown3;