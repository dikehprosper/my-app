import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Header1 from "./Header1";
import Header2 from "./Header2";



function Header() {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

   
    return (
        <div className="App">

            {!isLoggedIn && <Header1 />}
            {isLoggedIn && <Header2 />}
        </div>
    );
}

export default Header;