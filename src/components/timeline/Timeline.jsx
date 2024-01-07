import React, { useState, useEffect } from "react";
import ComingSoon from "../comingsoon/ComingSoon";
import "./Timeline.scss";

const Timeline = ({ refs }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="timeline__parent" ref={refs}>
        <div className="timeline__header disable-select">
          <h1>{windowWidth > 700 ? "Roadmap" : "Plan"}</h1>
          <h2>{windowWidth > 700 && "Hackathon"} Timeline</h2>
        </div>

        <ComingSoon />
      </div>
    </>
  );
};

export default Timeline;
