import React, { useState, useEffect } from "react";
import LoadingAnimation from "./LoadingAnimation";
import LoadingAnimation1 from "./LoadingAnimation1";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import moneywon from "./images/moneywon.png";
import image from "./images/49ja-image.png";
import betZero from "./images/betZero.png";

const BetHistory = ({ isLoading, data, groupedElements }) => {
    
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };



    const [isCheckCalled, setIsCheckCalled] = useState(false)
  const [activeElement, setActiveElement] = useState();
  const handleClick = (element) => {
    setActiveElement(element);
  };

    const reversedGroupedElements = Object.entries(groupedElements).reverse().reduce(
        (acc, [date, elements]) => {
            acc[date] = elements.reverse();
            return acc;
        },
        {}
    );

  console.log(reversedGroupedElements);
  
  const [isLoading1, setIsLoading1] = useState(false);

  useEffect(() => {
    if (activeElement) {
      setIsLoading1(true);

      // Simulating a 2-second delay
      const timer = setTimeout(() => {
        setIsLoading1(false);
      }, 1000);

      // Clean up the timer on component unmount or when activeElement changes
      return () => clearTimeout(timer);
    }
  }, [activeElement]);

  const total =
    activeElement &&
    activeElement.resultBalls.reduce((sum, number) => sum + number, 0);

  function getWordFromNumber() {
    if (total >= 152 && total <= 279) {
      return "Hi";
    } else if (total >= 21 && total <= 148) {
      return "Lo";
    } else if (total >= 149 && total <= 151) {
      return "Mid";
    } else {
      return "Unknown";
    }
  }
    
    
    function findMissingNumbers() {
        return activeElement && activeElement.selectedBalls.filter(number => !activeElement.resultBalls.includes(number))
            .map(number => number);
    }

    const missingNumbers = findMissingNumbers();
  
    const reversedGroupedElements1 = Object.entries(reversedGroupedElements)
  return (
    <div
      className="load"
      style={{
        position: "relative",
        height: "625px",
        margin: "15px",
        width: "100vw",
        display: "flex",
        overflow: "auto",
        scrollbar: "visible",
      }}
    >
      <div
        style={{
          height: "625px",
          display: "flex",
          alignItems: "start",
          width: "52.5%",
          overflow: "scroll",
          justifyContent: "start",
          backgroundColor: "#373a45",
        }}
      >
        {isLoading ? (
          <div
            style={{
              height: "625px",
              display: "flex",
              alignItems: "center",
              width: "52.5%",
              justifyContent: "center",
              backgroundColor: "#373a45",
            }}
          ></div>
        ) : (
          <div
            style={{
              height: "625px",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "start",
              backgroundColor: "#373a45",
              borderRadius: "2px",
            }}
          >
                          {reversedGroupedElements1.map(([date, elements], index) => {
              function formatDate() {
                const dateParts = date.split("/");
                const day = parseInt(dateParts[0]);
                const month = parseInt(dateParts[1]);
                const year = parseInt(dateParts[2]);

                const months = [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ];

                const monthName = months[month - 1];

                let daySuffix = "th";
                if (day === 1 || day === 21 || day === 31) {
                  daySuffix = "st";
                } else if (day === 2 || day === 22) {
                  daySuffix = "nd";
                } else if (day === 3 || day === 23) {
                  daySuffix = "rd";
                }

                const formattedDate = `${day}${daySuffix} ${monthName} ${year}`;

                return formattedDate;
              }
                // const reversedElements = reversedGroupedElements.map((element) => element).reverse();

                let reversedElements = [...elements].reverse();
                
                              console.log(reversedGroupedElements1[0][1][reversedGroupedElements1[0][1].length - 1]);


               

                
                function check() {
                    if (!isCheckCalled && reversedElements.length > 0) {
                        handleClick(reversedGroupedElements1[0][1][0]);
                        console.log(true);
                        setIsCheckCalled(true)
                    }
                }
                
                check()
             
                              
                              

              return (
                <div key={date}>
                  <div
                    style={{
                      backgroundColor: "#373a45",
                      height: "32px",
                      width: "100%",
                      color: "white",
                      paddingLeft: "13px",
                      fontSize: "13px",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {formatDate()}
                  </div>
                  {reversedElements.map((element) => {
                    const formattedTotalBalance =
                      element.AmountWon && element.AmountWon.toFixed(2);
                    let TotalStake =
                      element.TotalStake && Number(element.TotalStake);
                    const formattedTotalBalance1 =
                      TotalStake && TotalStake.toFixed(2);

                    return (
                      <div
                        key={element.id}
                        style={{
                          backgroundColor:
                            activeElement === element ? "#424653" : "#2C2E37",
                          display: "flex",
                          justifyContent: "space-between",
                          color: "white",
                          height: "78px",
                          borderBottom: "1px solid #383A44",
                          alignItems: "space-between",
                        }}
                            onClick={() => handleClick(element)}
                            className={` ${element === hoveredIndex ? 'hovered' : ''}`}
                            onMouseEnter={() => handleMouseEnter(element)}
                            onMouseLeave={handleMouseLeave}
                           
                      >
                        <div
                          style={{
                            backgroundColor:
                              activeElement === element ? "#424653" : "#2C2E37",
                            display: "flex",
                            paddingLeft: "13px",
                            flexDirection: "column",
                            justifyContent: "center",
                            color: "white",
                            height: "78px",
                            borderBottom: "1px solid #383A44",
                                    alignItems: "space-evenly",
                            
                                }}
                                className={`${element === hoveredIndex ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter(element)}
                                onMouseLeave={handleMouseLeave}
                        >
                          <p>
                            {" "}
                            <span
                              style={{
                                fontSize: "11px",
                                fontWeight: "bold",
                                color: "#96969B",
                              }}
                            >
                              {" "}
                              Bet ID:
                            </span>{" "}
                            <span style={{ fontSize: "13px", color: "white" }}>
                              {" "}
                              {element.id2}
                            </span>
                          </p>
                          <p>
                            {" "}
                            <span
                              style={{
                                fontSize: "11px",
                                fontWeight: "bold",
                                color: "#96969B",
                              }}
                            >
                              {" "}
                              Placed:{" "}
                            </span>{" "}
                            <span style={{ fontSize: "12px", color: "white" }}>
                              {" "}
                              {element.BetTime}{" "}
                            </span>
                          </p>
                          <p>
                            {" "}
                            <span
                              style={{
                                fontSize: "12px",
                                fontWeight: "bold",
                                color: "#96969B",
                              }}
                            >
                              Status:
                            </span>{" "}
                            <span
                              style={{
                                position: "relative",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: element.status.includes("Won")
                                  ? "#23A21C"
                                  : "#E04C4C",
                              }}
                            >
                              {element.status}{" "}
                              {element.status.includes("Won") ? (
                                <span> &#8358;</span>
                              ) : null}{" "}
                              <span>{formattedTotalBalance}</span>
                            </span>
                          </p>
                        </div>

                        <div
                          style={{
                            backgroundColor:
                              activeElement === element ? "#424653" : "#2C2E37",
                            display: "flex",
                            paddingLeft: "13px",
                            paddingRight: "20px",
                            marginTop: "11px",
                            flexDirection: "column",
                            justifyContent: "start",
                            color: "white",
                            height: "50px",

                            alignItems: "end",
                                }}
                                className={` ${element === hoveredIndex ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter(element)}
                                onMouseLeave={handleMouseLeave}
                        >
                          <p>
                            {" "}
                            <span
                              style={{
                                fontSize: "12px",
                                fontWeight: "bold",
                                color: "#96969B",
                              }}
                            >
                              Game:
                            </span>{" "}
                            <span
                              style={{
                                position: "relative",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "white",
                              }}
                            >
                              {element.gameName}
                            </span>
                          </p>
                          <p>
                            {" "}
                            <span
                              style={{
                                fontSize: "12px",
                                fontWeight: "bold",
                                color: "#96969B",
                              }}
                            >
                              Stake:
                            </span>{" "}
                            <span
                              style={{
                                position: "relative",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "white",
                              }}
                            >
                              {formattedTotalBalance1}
                            </span>
                          </p>
                        </div>
                        {/* Additional JSX for each rendered element */}
                      </div>
                    );
                  })}
                </div>
              );
            })}

            {activeElement && (
              <div
                style={{
                  height: "580px",
                  display: "flex",
                  width: "44.4vw",
                  backgroundColor: "white",
                  position: "absolute",
                  top: "45px",
                  left: "771px",
                  overflow: "auto",
                  borderRadius: "0px 0px 2px 2px",
                }}
              >
                {isLoading1 ? (
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      width: "100%",
                      backgroundColor: "#2C2E37",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <LoadingAnimation1 />{" "}
                  </div> // Render the loading logo component while isLoading is true
                ) : (
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      height: "700px",
                      flexDirection: "column",
                      overflow: "auto",
                    }}
                  >
                    <div
                      style={{
                        height: "68px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img src={image} alt="" height="58px" />
                    </div>
                    <div
                      style={{
                        height: "38px",
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        fontWeight: "500",
                        background: "#6F6E6E",
                        paddingLeft: "15px",
                      }}
                    >
                      Summary
                    </div>
                    <div
                      style={{
                        height: "38px",
                        fontSize: "13px",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        color: "black",
                        background: "#FFFFFE",
                        paddingLeft: "15px",
                      }}
                    >
                      <span
                        style={{
                          height: "100%",
                          width: "100px",
                          display: "flex",
                          alignItems: "center",
                          borderRight: "2px solid #C6C6C6",
                        }}
                      >
                        Bet Reference
                      </span>
                      <span
                        style={{
                          height: "100%",
                          width: "200px",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "15px",
                        }}
                      >
                        {activeElement.id}
                      </span>
                    </div>
                    <div
                      style={{
                        height: "38px",
                        fontSize: "13px",
                        display: "flex",
                        color: "black",
                        alignItems: "center",
                        background: "#ECECEC",
                        paddingLeft: "15px",
                      }}
                    >
                      <span
                        style={{
                          height: "100%",
                          width: "100px",
                          display: "flex",
                          alignItems: "center",
                          borderRight: "2px solid #C6C6C6",
                        }}
                      >
                        Bet Date
                      </span>
                      <span
                        style={{
                          height: "100%",
                          width: "200px",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "15px",
                        }}
                      >
                        {activeElement.BetDate} {activeElement.BetTime}
                      </span>
                    </div>
                    <div
                      style={{
                        height: "38px",
                        fontSize: "13px",
                        display: "flex",
                        color: "black",
                        alignItems: "center",
                        background: "#FFFFFE",
                        paddingLeft: "15px",
                      }}
                    >
                      <span
                        style={{
                          height: "100%",
                          width: "100px",
                          display: "flex",
                          alignItems: "center",
                          borderRight: "2px solid #C6C6C6",
                        }}
                      >
                        Result Date
                      </span>
                      <span
                        style={{
                          height: "100%",
                          width: "200px",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "15px",
                        }}
                      >
                        {" "}
                        {activeElement.ResultDate} {activeElement.ResultTime}{" "}
                      </span>
                    </div>
                    <div
                      style={{
                        height: "38px",
                        fontSize: "13px",
                        display: "flex",
                        color: "black",
                        alignItems: "center",
                        background: "#ECECEC",
                        paddingLeft: "15px",
                      }}
                    >
                      <span
                        style={{
                          height: "100%",
                          width: "100px",
                          display: "flex",
                          alignItems: "center",
                          borderRight: "2px solid #C6C6C6",
                        }}
                      >
                        Total Stake
                      </span>
                      <span
                        style={{
                          height: "100%",
                          width: "200px",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "15px",
                        }}
                      >
                        {" "}
                        &#8358; {activeElement.TotalStake}
                      </span>
                    </div>
                    <div
                      style={{
                        height: "38px",
                        fontSize: "13px",
                        display: "flex",
                        color: "black",
                        alignItems: "center",
                        background: "#FFFFFE",
                        paddingLeft: "15px",
                      }}
                    >
                      <span
                        style={{
                          height: "100%",
                          width: "100px",
                          display: "flex",
                          alignItems: "center",
                          borderRight: "2px solid #C6C6C6",
                        }}
                      >
                        Result
                      </span>
                      <span
                        style={{
                          height: "100%",
                          width: "200px",
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "15px",
                          color: activeElement.status.includes("Won")
                            ? "#23A21C"
                            : "#89191F",
                        }}
                      >
                        {activeElement.status}{" "}
                        {activeElement.status.includes("Won") ? (
                          <span style={{ marginLeft: "5px" }}>
                            {" "}
                       &#8358; {activeElement && parseFloat(activeElement.AmountWon.toFixed(2)).toString()}
                          </span>
                        ) : (
                          <span style={{ marginLeft: "5px" }}> &#8358; 0</span>
                        )}{" "}
                      </span>
                    </div>
                    <div
                      style={{
                        height: "38px",
                        fontSize: "13px",
                        display: "flex",
                        color: "black",
                        alignItems: "center",
                        background: "#ECECEC",
                        paddingLeft: "15px",
                      }}
                    >
                      <span
                        style={{
                          height: "100%",
                          width: "100px",
                          display: "flex",
                          alignItems: "center",
                          borderRight: "2px solid #C6C6C6",
                        }}
                      >
                        Draw ID
                      </span>
                      <span
                        style={{
                          height: "100%",
                          width: "200px",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "15px",
                        }}
                      >
                        {activeElement.drawId}
                      </span>
                    </div>
                    <div
                      style={{
                        height: "38px",
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        fontWeight: "500",
                        background: "#6F6E6E",
                        paddingLeft: "15px",
                      }}
                    >
                      {" "}
                      Result
                    </div>
                    <div
                      style={{
                        height: "85px",
                        fontSize: "13px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "end",
                        color: "white",
                        fontWeight: "500",
                        gap: "5.5px",
                      }}
                    >
                      {activeElement.resultBalls.map((number) => {
                        let background;
                        let color;

                        if (number === 49) {
                          background = "#c9d916";
                          color = "black";
                        } else if (number % 3 === 2) {
                          background =
                            "radial-gradient(ellipse at center,#4378dc 0,#1e47a7 100%)";
                          color = "white";
                        } else if (number % 3 === 1) {
                          background =
                            "radial-gradient(ellipse at center,#e6351c 0,#a62110 100%)";
                          color = "white";
                        } else {
                          background =
                            "radial-gradient(ellipse at center,#3abc28 0,#31a421 100%)";
                          color = "white";
                        }

                        return (
                          <div
                            style={{
                              background,
                              color,
                              width: "45px",
                              borderRadius: "25px",
                              height: "45px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontSize: "26px",
                              fontWeight: "900",
                              fontFamily: "Arial",
                            }}
                          >
                            {number}
                          </div>
                        );
                      })}
                    </div>
                    <div
                      style={{
                        height: "44px",
                        fontSize: "15.5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "black",
                        gap: "5.5px",
                        borderBottom: " 2px solid #6F6E6E",
                      }}
                    >
                      Total: {total} ({getWordFromNumber()})
                    </div>

                    <div
                      style={{
                        height: "90px",
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "center",
                        color: "black",
                        justifyContent: "center",
                        background: "#FFFFFF",
                      }}
                    >
                      <img src={betZero} alt="" height="52px" />
                    </div>
                    <div
                      style={{
                        height: "38px",
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "center",
                        color: "black",

                        background: "#D0CFCF",
                        paddingLeft: "15px",
                      }}
                    >
                      {" "}
                      Selections
                    </div>
                    <div
                      style={{
                        height: "65px",
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "center",
                        color: "black",
                        justifyContent: "start",
                        background: "#FFFFFF",
                        marginLeft: "5px",
                        gap: "8px",
                      }}
                    >
                      {activeElement.selectedBalls.map((number) => {
                        let background;
                        let color;

                        if (number === 49) {
                          background = "#c9d916";
                          color = "white";
                        } else if (number % 3 === 2) {
                          background =
                            "radial-gradient(ellipse at center,#4378dc 0,#1e47a7 100%)";
                          color = "white";
                        } else if (number % 3 === 1) {
                          background =
                            "radial-gradient(ellipse at center,#e6351c 0,#a62110 100%)";
                          color = "white";
                        } else {
                          background =
                            "radial-gradient(ellipse at center,#3abc28 0,#31a421 100%)";
                          color = "white";
                        }

                        return (
                          <div
                            style={{
                              background,
                              color,
                              width: "28px",
                              borderRadius: "14px",
                              height: "28px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontSize: "17px",
                              fontWeight: "900",
                              fontFamily: "Arial",
                              position: "relative",
                            }}
                          >
                            <span
                              style={{
                                textShadow: "2px 2px  rgba(0, 0, 0, 1.95)",
                                zIndex: "1000",
                              }}
                            >
                              {" "}
                              {number}
                            </span>
                            <div class="line"></div>
                          </div>
                        );
                      })}
                    </div>
                    <div
                      style={{
                        height: "38px",
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "center",
                        color: "black",

                        background: "#D0CFCF",
                        paddingLeft: "15px",
                      }}
                    >
                      {" "}
                      Matched Numbers
                    </div>
                    <div
                      style={{
                        height: "65px",
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "center",
                        color: "black",
                        justifyContent: "start",
                                                      background: "#FFFFFF",
                                                      marginLeft: "5px"  ,
                                               gap:"8px"
                      }}
                                              >
                                                  {missingNumbers.map(number => {
                                                      let background;
                                                      let color;

                                                      if (number === 49) {
                                                          background = "#c9d916";
                                                          color = "white";
                                                      } else if (number % 3 === 2) {
                                                          background =
                                                              "radial-gradient(ellipse at center,#4378dc 0,#1e47a7 100%)";
                                                          color = "white";
                                                      } else if (number % 3 === 1) {
                                                          background =
                                                              "radial-gradient(ellipse at center,#e6351c 0,#a62110 100%)";
                                                          color = "white";
                                                      } else {
                                                          background =
                                                              "radial-gradient(ellipse at center,#3abc28 0,#31a421 100%)";
                                                          color = "white";
                                                      }
                                                      return <div
                                                          style={{
                                                              background,
                                                              color,
                                                              width: "28px",
                                                              borderRadius: "14px",
                                                              height: "28px",
                                                              display: "flex",
                                                              justifyContent: "center",
                                                              alignItems: "center",
                                                              fontSize: "18px",
                                                              fontWeight: "900",
                                                              fontFamily: "Arial",
                                                              position: "relative",
                                                          }}
                                                      >{number}</div> // Display each missing number
                                                  })}                    

                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <div
        style={{
          height: "625px",
          display: "flex",
          width: "44.4%",
          backgroundColor: "#2C2E37",
          margin: "0px 0px 0px 15px",
          overflow: "scroll",
          justifyContent: "space-between",
          alignItems: "start",
          borderRadius: "2px 2px 0px 0px",
        }}
      >
        <div
          style={{
            backgroundColor: "#393945",
            width: "100%",
            height: "43px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              color: "white",
              marginLeft: "13px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IoIosArrowBack fontSize="20px" />
          </span>
          <span
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            49ja
          </span>
          <span
            style={{
              marginRight: "13px",
              fontWeight: "bold",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IoIosArrowForward fontSize="20px" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BetHistory;
