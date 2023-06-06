import React from 'react'
import LoadingAnimation from './LoadingAnimation'

const EmptyBetHistory = ({ isLoading }) => {
    return (
        <div className="load" style={{ position: "relative", height: "625px", margin: "15px", width: "100vw", display: "flex" }}>
            <div style={{
                height: "625px",
                display: "flex",
                alignItems: "center",
                width: "52.5%",
                overflow: "scroll",
                justifyContent: "center",
                backgroundColor: "#2B2F37",

            }}>
                {isLoading ? (
                    <LoadingAnimation /> // Render the loading logo component while isLoading is true
                ) : (
                    <div style={{ marginBottom: "410px", color: "white", fontWeight: "bold", fontSize: "15px", opacity: "0.8" }}>
                        Sorry, your filter did not match any bets.
                    </div>
                )}
            </div>

            <div style={{
                height: "625px",
                display: "flex",
                width: "44.4%",
                backgroundColor: "#2B2F37",
                margin: "0px 0px 0px 15px",
                overflow: "scroll",
                justifyContent: "space-between",
                alignItems: "start",

            }}>

            </div>
        </div>
    )
}

export default EmptyBetHistory