import * as React from 'react';
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md"


const DropDown1 = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "3px", marginLeft: "10px", width: "10px", height: "7px" }}>
                {open ? <div onClick={handleOpen}><MdArrowDropUp fontSize="25px" backgroundColor="white" /></div> :
                    <div onClick={handleOpen}><MdArrowDropDown fontSize="25px" backgroundColor="white" /></div>}
            </div>

            {open ? (
                <ul style={{ position: "absolute", top: "15px", zIndex: '1000', backgroundColor: "red" }}>
                    <li className="menu-item">
                        Menu 1
                    </li>
                    <li className="menu-item">
                        Menu 2
                    </li>
                    <li className="menu-item">
                        Menu 2
                    </li>
                    <li className="menu-item">
                        Menu 2
                    </li>
                </ul>
            ) : null}

        </div>
    );
};

export default DropDown1;