import React, { useEffect, useState } from "react";
import ghori from "../../../assets/images/timer/ghori.png";
import letters from "../../../assets/images/timer/letters.png";
import mask from "../../../assets/images/timer/mask.png";
import "./Timeline.scss";

const Timeline = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-06-28T18:00:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
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
                <p>{timeLeft.days}</p>
                <p>Days</p>
              </div>

              <p className="colon">:</p>

              <div className="time">
                <p>{timeLeft.hours}</p>
                <p>Hours</p>
              </div>

              <p className="colon">:</p>

              <div className="time">
                <p>{timeLeft.minutes}</p>
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
