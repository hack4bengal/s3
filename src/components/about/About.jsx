import React from "react";
import Tiger from "../../assets/images/LandingImages/Tiger.png";
import "./About.scss";

const About = () => {
  const aboutRef = React.useRef(null);
  return (
    <section className="about__container" id="about" ref={aboutRef}>
      <div className="about__tiger">
        <img src={Tiger} />
      </div>
      <h4 className="about__backdrop-text">Hack4Bengal</h4>
      <div className="about__content">
        <h2 className="about__heading">About Us</h2>
        <p className="about__description color-primary" id="description-1">
          <div className="about__tiger" id="mobile-tiger">
            <img src={Tiger} />
          </div>
          Hack4Bengal believes in building for the future, empowering people
          irrespective of their fields, to showcase their skills and creativity
          for solving real-life problems.
        </p>
        <p className="about__description">
          What started with three enthusiastic people in the year 2021, is now a
          community of over 2000 developers. Hack4Bengal has been growing from
          strength to strength and our aim is to go beyond the horizons and
          impact millions of tech talents by providing them with a platform to
          enhance their skills, collaborate and create. This time Hack4Bengal is
          back to leverage your expertise in the offline mode. See you there!
        </p>
      </div>
    </section>
  );
};

export default About;
