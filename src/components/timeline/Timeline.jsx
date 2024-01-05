import React from "react";
import ComingSoon from "../comingsoon/ComingSoon";
import "./Timeline.scss";

const Timeline = ({ refs }) => {
  return (
    <>
      <div className="timeline__parent" ref={refs}>
        <div className="timeline__header">
          <h1>{window.innerWidth > 700 ? "Roadmap" : "Plan"}</h1>
          <h2>{window.innerWidth > 700 && "Hackathon"} Timeline</h2>
        </div>

        <ComingSoon />
      </div>
    </>
  );
};

export default Timeline;
