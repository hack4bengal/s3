import React from "react";
import { ComingSoon, Header } from "../../shared";
import "./Theme.scss";

const Theme = ({ refs }) => {
  return (
    <>
      <div className="theme__parent" ref={refs}>
        <Header
          backWord={"Tracks"}
          frontWord={"Hackathon Themes"}
          frontWordMobile={"Themes"}
        />

        <ComingSoon />
      </div>
    </>
  );
};

export default Theme;
