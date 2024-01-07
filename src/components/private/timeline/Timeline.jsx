import React from "react";
import { ComingSoon, Header } from "../../shared";
import "./Timeline.scss";

const Timeline = ({ refs }) => {
  return (
    <>
      <div className="timeline__parent" ref={refs}>
        {/* <div className="timeline__header disable-select">
          <h1>{windowWidth > 700 ? "Roadmap" : "Plan"}</h1>
          <h2>{windowWidth > 700 && "Hackathon"} Timeline</h2>
        </div> */}
        <Header
          backWord={"Roadmap"}
          backWordMobile={"Plan"}
          frontWord={"Hackathon Timeline"}
          frontWordMobile={"Timeline"}
        />

        <ComingSoon />
      </div>
    </>
  );
};

export default Timeline;
