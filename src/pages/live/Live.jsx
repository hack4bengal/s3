import React, { useEffect, useState } from "react";

//Asset imports
import GrayRightSign from '../../assets/images/livepage/GrayRightSign.svg';
import RedLeftSign from '../../assets/images/livepage/RedLeftSign.svg';
import RedStar from '../../assets/images/livepage/RedStar.svg';
import WhiteStar from '../../assets/images/livepage/WhiteStar.svg';
import SpeedSign01 from '../../assets/images/livepage/SpeedSign01.svg';
import SpeedSign02 from '../../assets/images/livepage/SpeedSign02.svg';
import SpeedSign03 from '../../assets/images/livepage/SpeedSign03.svg';

// Css imports
import "./Live.scss";
import EventSection from "./EventSection";

const Live = () => {
  // const LiveDate = new Date("2024-06-25T18:00:00");
  const LiveDate = new Date("2024-06-28T18:30:00");

  const calculateTimeLeft = () => {
    // const targetDate = new Date("2024-06-27T06:00:00");
    const targetDate = new Date("2024-06-30T06:30:00");
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
    <div className="livepage_parent">
      <div className="livepage_body">
        <div className="timer_section">
          {
            Date.now() > LiveDate ? (
              <div className="timer">
                <div className="time_left">
                  <img src={RedStar} alt="design-prop-03" />
                  <p>Time left</p>
                  <img src={WhiteStar} alt="design-prop-04" />
                </div>

                <div className="countdown">
                  <img className="left_rectangle" src={RedLeftSign} alt="design-prop-01" />
                  <img className="right_rectangle" src={GrayRightSign} alt="design-prop-02" />

                  <div className="speed_sign">
                    <img className="sign_1" src={SpeedSign01} alt="design-prop-05" />
                    <img className="sign_2" src={SpeedSign02} alt="design-prop-06" />
                    <img className="sign_3" src={SpeedSign03} alt="design-prop-07" />
                  </div>

                  <div className="time">
                    <p>
                      {timeLeft?.days > 0 ?
                        `${timeLeft?.hours + timeLeft?.days * 24}`
                        : (timeLeft?.hours < 10
                          ? `0${timeLeft?.hours}` : timeLeft?.hours)
                      }
                    </p>
                    <p>Hours</p>
                  </div>

                  <span className="colon">:</span>

                  <div className="time">
                    <p>
                      {timeLeft?.minutes < 10
                        ? `0${timeLeft?.minutes}`
                        : timeLeft?.minutes}
                    </p>
                    <p>Minutes</p>
                  </div>

                  <span className="colon">:</span>

                  <div className="time">
                    <p>
                      {timeLeft?.seconds < 10
                        ? `0${timeLeft?.seconds}`
                        : timeLeft?.seconds}
                    </p>
                    <p>Seconds</p>
                  </div>
                </div>

              </div>
            ) : (
              <div className="starting-soon">
                <img src={RedStar} alt="design-prop-03" />
                <p>Starting Soon...</p>
                <img src={WhiteStar} alt="design-prop-04" />
              </div>
            )
          }
        </div>
        <EventSection />
      </div>
    </div>
  );
};

export default Live;
