import React from "react";
import Marquee from "react-fast-marquee";
import six from "../../../assets/images/AboutImages/35.jpg";
import eight from "../../../assets/images/AboutImages/43.jpg";
import five from "../../../assets/images/AboutImages/5.jpg";
import four from "../../../assets/images/AboutImages/7.jpg";
import three from "../../../assets/images/AboutImages/five.jpg";
import two from "../../../assets/images/AboutImages/four.jpg";
import seven from "../../../assets/images/AboutImages/six.jpg";

import "./About.scss";

const About = ({ refs }) => {
  return (
    <>
      <div className="about__container" ref={refs}>
        <div className="about__header">
          <h1>Journey</h1>
          <h2>About</h2>
        </div>

        <div className="about__content">
          <div className="about__desc">
            <p>
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
                <iframe
                  src="https://www.youtube.com/embed/JbkBnTpfpmw"
                  title="The Hack4Bengal Recap | 2023"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <img src={two} alt="" className="mq_img" />
                <img src={three} alt="" className="mq_img" />
              </Marquee>

              <Marquee
                autoFill={true}
                pauseOnHover={true}
                className="about__marquee"
                speed={50}
                direction="left"
              >
                <img src={four} alt="" className="mq_img" />
                <img src={five} alt="" className="mq_img" />
                <img src={six} alt="" className="mq_img" />
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
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/JbkBnTpfpmw"
                title="The Hack4Bengal Recap | 2023"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <img src={two} alt="" className="mq_img" />
              <img src={three} alt="" className="mq_img" />
            </Marquee>

            <Marquee
              autoFill={true}
              pauseOnHover={true}
              className="about__marquee"
              speed={50}
              direction="left"
            >
              <img src={four} alt="" className="mq_img" />
              <img src={seven} alt="" className="mq_img" />
              <img src={eight} alt="" className="mq_img" />
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
