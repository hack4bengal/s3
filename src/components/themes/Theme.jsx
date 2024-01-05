import React from "react";
import ComingSoon from "../comingsoon/ComingSoon";
import "./Theme.scss";

const Theme = ({ refs }) => {
  return (
    <>
      <div className="theme__parent" ref={refs}>
        <div className="theme__header">
          <h1>Tracks</h1>
          <h2>{window.innerWidth > 700 && "Hackathon"} Themes</h2>
        </div>

        <ComingSoon />
      </div>
    </>
  );
};

export default Theme;
