import React from "react";
import HeaderData from "../../../assets/data/HeaderContent";
import { ComingSoon, Header } from "../../shared";
import "./Timeline.scss";

const Timeline = () => {
  return (
    <>
      <div className="timeline__parent" id="timeline">
        <Header {...HeaderData.timeline} />
        <ComingSoon />
      </div>
    </>
  );
};

export default Timeline;
