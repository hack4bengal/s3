import React from "react";
import HeaderData from "../../../assets/data/HeaderContent";
import { ComingSoon, Header } from "../../shared";
import "./Prizes.scss";
import first from "../../../assets/images/PrizesImages/first.png";
import second from "../../../assets/images/PrizesImages/second.png";
import third from "../../../assets/images/PrizesImages/third.png";

const Prizes = () => {
  return (
    <>
      <div className="prizes__parent" id="prizes">
        <Header {...HeaderData.prizes} />

        <div className="prizes_container">
          <div className="second_prize prize_box desktop">
            <img src={second} className="prize_logo first_prize_logo" alt="" />
            <h1>30K INR</h1>
            <p>1st Runner Up</p>
          </div>
          <div className="first_prize prize_box desktop">
            <img src={first} className="prize_logo first_prize_logo" alt="" />

            <h1>50K INR</h1>
            <p>Winner</p>
          </div>
          <div className="third_prize prize_box desktop">
            <img src={third} className="prize_logo first_prize_logo" alt="" />
            <h1>20K INR</h1>
            <p>2nd Runner Up</p>
          </div>
        </div>
        <div className="prizes_container mobile">
          <div className="second_prize prize_box">
            <img src={second} className="prize_logo first_prize_logo" alt="" />
            <h1>30K INR</h1>
            <p>1st Runner Up</p>
          </div>
          <div className="third_prize prize_box">
            <img src={third} className="prize_logo first_prize_logo" alt="" />
            <h1>20K INR</h1>
            <p>2nd Runner Up</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prizes;
