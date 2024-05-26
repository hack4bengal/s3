import React from "react";
import blob_left from "../../../assets/images/LandingImages/blob_left.webp";
import blob_right from "../../../assets/images/LandingImages/blob_right.webp";
import victoria from "../../../assets/images/LandingImages/victoria.png";
import {Marquee} from "../../private";
import {Button} from "../../shared";
import "./Landing.scss";

const Landing = () => {
  return (
    <>
      <div className="home" id="home">
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
              <Button type="solid" to={"https://discord.gg/hack4bengal"}>
                Join Discord
              </Button>
              <Button type="outline" to={"https://forms.gle/pXk7cvKB9CTvhCbQ9"}>
                Pre-register
              </Button>
            </div>
          </div>
        </div>

        <img
          src={blob_left}
          alt="Left side red gradient"
          className="blob_left"
        />
        <img
          src={blob_right}
          alt="Right side white gradient"
          className="blob_right"
        />

        <img
          src={victoria}
          alt="a building with a dome and a statue on top"
          className="home__victoria"
          fetchpriority="high"
        />

        {window.innerWidth > 600 && <Marquee />}
      </div>
    </>
  );
};

export default Landing;
