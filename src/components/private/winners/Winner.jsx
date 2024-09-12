import React from "react";
import { FiExternalLink } from "react-icons/fi";
import HeaderData from "../../../assets/data/HeaderContent";
import first from "../../../assets/images/PrizesImages/first.png";
import second from "../../../assets/images/PrizesImages/second.png";
import third from "../../../assets/images/PrizesImages/third.png";
import { Header } from "../../shared";
import "./Winner.scss";

const Winner = () => {
  return (
    <div className="winners_parent" id="prizes">
      <Header {...HeaderData.winner} />

      <div className="winners_container">
        <div className="first_runner_up winner_box desktop">
          <img src={second} className="prize_logo winner_logo" alt="" />
          <h1>EdgeRunners</h1>
          <p>
            Project Synode{" "}
            <a
              href="https://www.hackquest.io/en/hackathon/projects/Hack4Bengal-30-Synode-Offline-Wallet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink />
            </a>
          </p>
        </div>
        <div className="winner winner_box desktop">
          <img src={first} className="prize_logo winner_logo" alt="" />
          {/*  */}
          <h1>Bongo(n)</h1>
          <p>
            Project PAW-sitive{" "}
            <a
              href="https://www.hackquest.io/en/hackathon/projects/Hack4Bengal-30-PAW-sitive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink />
            </a>
          </p>
        </div>
        <div className="second_runner_up winner_box desktop">
          <img src={third} className="prize_logo winner_logo" alt="" />
          <h1>BengalDevs</h1>
          <p>
            Project Term AI
            <a
              href="https://www.hackquest.io/en/hackathon/projects/Hack4Bengal-30-Term-AI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink />
            </a>
          </p>
        </div>
      </div>
      <div className="winners_container mobile">
        <div className="first_runner_up winner_box">
          <img src={second} className="prize_logo winner_logo" alt="" />
          <h1>EdgeRunners</h1>
          <p>
            Project Synode{" "}
            <a
              href="https://www.hackquest.io/en/hackathon/projects/Hack4Bengal-30-Synode-Offline-Wallet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink />
            </a>
          </p>
        </div>

        <div className="second_runner_up winner_box">
          <img src={third} className="prize_logo winner_logo" alt="" />
          <h1>BengalDevs</h1>
          <p>
            Project Term AI{" "}
            <a
              href="https://www.hackquest.io/en/hackathon/projects/Hack4Bengal-30-Term-AI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Winner;
