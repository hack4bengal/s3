import React from "react";
import blob_left from "../../assets/images/LandingImages/blob_left.png";
import blob_right from "../../assets/images/LandingImages/blob_right.png";
import victoria from "../../assets/images/LandingImages/victoria.png";
import Button from "../button/Button";
import Marquee from "../marquee/Marquee";
import "./Landing.scss";

const Landing = ({ refs }) => {
  return (
    <>
      <div className="home" ref={refs}>
        <div className="home__content">
          <div className="home__text">
            <p>Welcome To</p>
            <h1>Eastern India's</h1>
            <h2>Largest Hackathon</h2>
          </div>

          <div className="home__sub_content">
            <p>
              The largest hackathon in Eastern India, with a vision to encourage
              students to innovate and build solutions for real world problems.
            </p>

            <div className="home__buttons">
              <Button
                type="solid"
                to={"https://discord.gg/hack4bengal-2-0-920970750154899476"}
                fs={"19px"}
                fm={"14px"}
              >
                Join Discord
              </Button>
              <Button
                type="outline"
                fs={"1.2rem"}
                fm={"14px"}
                to={"https://forms.gle/pXk7cvKB9CTvhCbQ9"}
              >
                {/* {window.innerWidth > 600 ? "Check our socials" : "Check socials"} */}
                Pre-register
              </Button>
            </div>
          </div>
        </div>

        <img src={blob_left} alt="" className="blob_left" />
        <img src={blob_right} alt="" className="blob_right" />

        <img src={victoria} alt="" className="home__victoria" />

        {window.innerWidth > 600 && <Marquee />}
      </div>
    </>
  );
};

export default Landing;
