import React from "react";
import ghori from "../../../assets/images/timer/ghori.png";
import letters from "../../../assets/images/timer/letters.png";
import mask from "../../../assets/images/timer/mask.png";
import "./Timeline.scss";

const Timeline = () => {
  return (
    <>
      <div className="timeline__parent" id="timeline">
        {/* <Header {...HeaderData.timeline} /> */}
        {/* <ComingSoon /> */}

        <div className="body">
          <img src={ghori} alt="" className="ghori" />

          <div className="timer">
            <h1 className="header_1">
              Journey <br /> Begins In
            </h1>

            <div className="countdown">
              <div className="time">
                <p>25</p>
                <p>Days</p>
              </div>

              <p className="colon">:</p>

              <div className="time">
                <p>25</p>
                <p>Hours</p>
              </div>

              <p className="colon">:</p>

              <div className="time">
                <p>25</p>
                <p>Mins</p>
              </div>
              {/* <p className="colon">:</p>

              <div className="time">
                <p>25</p>
                <p>Secs</p>
              </div> */}
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
