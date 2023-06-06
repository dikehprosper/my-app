import React, { useEffect, useState } from "react";
import Navbar2 from "../components/NavBar2";
import Body2 from "../components/Body2";
import LoadingAnimation4 from "../components/LoadingAnimation4";

const Casino = () => {
    const [isLoading3, setIsLoading3] = useState(true);

    useEffect(() => {
        // Simulate page loading delay
        const timer = setTimeout(() => {
            setIsLoading3(false);
        }, 1000);

        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);
    return isLoading3 ? (
        <LoadingAnimation4 />
    ) : (
        <div className="casino">
            <Body2 />
            <Navbar2 />
        </div>
    );
};

export default Casino;
