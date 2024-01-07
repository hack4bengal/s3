import React from "react";
import { ComingSoon, Header } from "../../shared";
import "./Prizes.scss";

const Prizes = ({ refs }) => {
  return (
    <>
      <div className="prizes__parent" ref={refs}>
        {/* <div className="prizes__header disable-select">
          <h1>Awards</h1>
          <h2>{windowWidth > 700 && "Hackathon"} Prizes</h2>
        </div> */}
        <Header
          backWord={"Awards"}
          frontWord={"Hackathon Prizes"}
          frontWordMobile={"Prizes"}
        />
        <ComingSoon />
      </div>
    </>
  );
};

export default Prizes;
