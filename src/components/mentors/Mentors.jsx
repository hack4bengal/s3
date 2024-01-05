import React from "react";
import Marquee from "react-fast-marquee";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { mentorContent } from "../../assets/data/MentorsContent";
import "./Mentors.scss";

function Mentors({ refs }) {
  return (
    <section className="mentors__parent" ref={refs}>
      <div className="mentors__header">
        <h1>Experts</h1>
        <h2>{window.innerWidth > 700 ? "Previous" : "Past"} Mentors</h2>
      </div>

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
