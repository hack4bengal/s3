import React, { useEffect, useState } from "react";
import ghori from "../../../assets/images/timer/ghori.png";
import letters from "../../../assets/images/timer/letters.png";
import mask from "../../../assets/images/timer/mask.png";
import "./Timeline.scss";

const Timeline = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const targetDateTime = new Date(2024, 6, 28, 18);

  const updateTime = () => {
    const now = new Date();
    const difference = targetDateTime - now;

    // Check if target date has passed
    if (difference <= 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      return;
    }

    const remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const remainingMinutes = Math.floor(
      (difference % (1000 * 60 * 60)) / (1000 * 60)
    );

    setDays(remainingDays);
    setHours(remainingHours);
    setMinutes(remainingMinutes);
  };

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup function to stop timer on unmount
  }, []);

  return (
    <>
      <div className="timeline__parent" id="timeline">
        <div className="body">
          <img src={ghori} alt="" className="ghori" />

          <div className="timer">
            <h1 className="header_1">
              Journey <br /> Begins In
            </h1>

            <div className="countdown">
              <div className="time">
                <p>{days}</p>
                <p>Days</p>
              </div>

              <p className="colon">:</p>

              <div className="time">
                <p>{hours.toString().padStart(2, "0")}</p>
                <p>Hours</p>
              </div>

              <p className="colon">:</p>

              <div className="time">
                <p>{minutes.toString().padStart(2, "0")}</p>
                <p>Mins</p>
              </div>
            </div>
          </div>
        </div>
        <img src={mask} alt="" className="mask" />
        <img src={letters} alt="" className="letters" />
      </div>
    </>
  );
};

export default Timeline;
