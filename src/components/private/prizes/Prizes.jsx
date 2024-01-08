import React from "react";
import HeaderData from "../../../assets/data/HeaderContent";
import { ComingSoon, Header } from "../../shared";
import "./Prizes.scss";

const Prizes = () => {
  return (
    <>
      <div className="prizes__parent" id="prizes">
        <Header {...HeaderData.prizes} />
        <ComingSoon />
      </div>
    </>
  );
};

export default Prizes;
