import React, { useEffect, useState } from "react";
import { ComingSoon } from "../../shared";
import "./Prizes.scss";

const Prizes = ({ refs }) => {
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
      <div className="prizes__parent" ref={refs}>
        <div className="prizes__header disable-select">
          <h1>Awards</h1>
          <h2>{windowWidth > 700 && "Hackathon"} Prizes</h2>
        </div>

        <ComingSoon />
      </div>
    </>
  );
};

export default Prizes;
