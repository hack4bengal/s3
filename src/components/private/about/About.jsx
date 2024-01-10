import React from "react";
import Marquee from "react-fast-marquee";
import six from "../../../assets/images/AboutImages/35.webp";
import eight from "../../../assets/images/AboutImages/43.webp";
import five from "../../../assets/images/AboutImages/5.webp";
import four from "../../../assets/images/AboutImages/7.webp";
import three from "../../../assets/images/AboutImages/five.webp";
import two from "../../../assets/images/AboutImages/four.webp";
import seven from "../../../assets/images/AboutImages/six.webp";

import "./About.scss";

const About = () => {
  return (
    <>
      <div className="about__container" id="about">
        <div className="about__header">
          <h1>Journey</h1>
          <h2>About</h2>
        </div>

        <div className="about__content">
          <div className="about__desc">
            <p >
              Hack4Bengal empowers all fields to showcase creativity in solving
              real-life problems for a brighter future.
            </p>
            <p>
              Join us for the reinvigorated Hack4Bengal! From three enthusiasts
              in 2021 to a thriving community of over 3000 developers, our
              mission is to empower tech talents. This time, we're taking it
              offline to enhance skills, foster collaboration, and create
              impact. Don't miss out - see you there!
            </p>

            <div className="about__marquee_container">
              <Marquee
                autoFill={true}
                pauseOnHover={true}
                className="about__marquee"
                speed={50}
                direction="right"
              >
                <img src={two} alt="a large group of people sitting in a room" className="mq_img" />
                <img src={three} alt="a group of people standing on a stage" className="mq_img" />
              </Marquee>

              <Marquee
                autoFill={true}
                pauseOnHover={true}
                className="about__marquee"
                speed={50}
                direction="left"
              >
                <img src={four} alt="a group of people posing for a photo" className="mq_img" />
                <img src={five} alt="a group of people standing on a stage" className="mq_img" />
                <img src={six} alt="a group of people standing in a room" className="mq_img" />
              </Marquee>
            </div>

            <h2>Our Journey so far</h2>

            <div className="about__metrics">
              <div className="about__metrics_item">
                <p>2000+</p>
                <span>Hackers</span>
              </div>
              <div className="about__metrics_item">
                <p>50+</p>
                <span>Partners</span>
              </div>

              <div className="about__metrics_item">
                <p>36+</p>
                <span>Hack hours</span>
              </div>

              <div className="about__metrics_item">
                <p>85+</p>
                <span>Events</span>
              </div>

              <div className="about__metrics_item">
                <p>220+</p>
                <span>Projects</span>
              </div>
              <div className="about__metrics_item">
                <p>40+</p>
                <span>Mentors</span>
              </div>
            </div>
          </div>

          <div className="about__marquee_container">
            <Marquee
              autoFill={true}
              pauseOnHover={true}
              className="about__marquee"
              speed={50}
              direction="right"
            >
              <img src={two} alt="a large group of people sitting in a room" className="mq_img" />
              <img src={three} alt="a group of people standing on a stage" className="mq_img" />
            </Marquee>

            <Marquee
              autoFill={true}
              pauseOnHover={true}
              className="about__marquee"
              speed={50}
              direction="left"
            >
              <img src={four} alt="a group of people posing for a photo" className="mq_img" />
              <img src={seven} alt="a group of people sitting in a room with computers" className="mq_img" />
              <img src={eight} alt="a sign on a building" className="mq_img" />
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
