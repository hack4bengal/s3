import React from "react";
import HeaderData from "../../../assets/data/HeaderContent";
import { ComingSoon, Header } from "../../shared";
import "./Timeline.scss";

const Timeline = ({ refs }) => {
  return (
    <>
      <div className="timeline__parent" ref={refs}>
        <Header {...HeaderData.timeline} />
        <ComingSoon />
      </div>
    </>
  );
};

export default Timeline;
