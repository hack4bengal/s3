import React from "react";
import Marquee from "react-fast-marquee";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import HeaderData from "../../../assets/data/HeaderContent";
import { mentorContent } from "../../../assets/data/MentorsContent";
import { Header } from "../../shared";
import "./Mentors.scss";

function Mentors() {
  return (
    <section className="mentors__parent" id="mentors">
      <Header {...HeaderData.mentors} />

      <div className="mentors__container mentors__container_desktop">
        {mentorContent.map((mentor, index) => {
          return (
            <div className="nft" key={index}>
              <div className="main">
                <img className="tokenImage" src={mentor?.image} alt="NFT" />
                <div className="mentor__info">
                  <h2>{mentor?.name}</h2>
                  <p className="description">{mentor?.designation}</p>
                  <p className="description">{mentor?.company}</p>
                </div>
                <hr />
                <div className="mentor__social_wrapper">
                  <a
                    href={mentor?.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaXTwitter />
                  </a>

                  <a
                    href={mentor?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Marquee
        autoFill={true}
        pauseOnHover={true}
        speed={50}
        direction="right"
        className="mentors__container mentors__container_mobile"
      >
        {mentorContent.map((mentor, index) => {
          return (
            <div className="nft" key={index}>
              <div className="main">
                <img className="tokenImage" src={mentor?.image} alt="NFT" />
                <div className="mentor__info">
                  <h2>{mentor?.name}</h2>
                  <p className="description">{mentor?.designation}</p>
                  <p className="description">{mentor?.company}</p>
                </div>
                <hr />
                <div className="mentor__social_wrapper">
                  <a
                    href={mentor?.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaXTwitter />
                  </a>

                  <a
                    href={mentor?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Marquee>
    </section>
  );
}

export default Mentors;
