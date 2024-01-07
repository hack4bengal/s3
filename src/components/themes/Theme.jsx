import React, { useState, useEffect } from "react";
import ComingSoon from "../comingsoon/ComingSoon";
import "./Theme.scss";

const Theme = ({ refs }) => {
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
      <div className="theme__parent" ref={refs}>
        <div className="theme__header disable-select">
          <h1>Tracks</h1>
          <h2>{windowWidth > 700 && "Hackathon"} Themes</h2>
        </div>

        <ComingSoon />
      </div>
    </>
  );
};

export default Theme;
