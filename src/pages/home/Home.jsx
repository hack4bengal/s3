import React from "react";
import {
  About,
  FAQ,
  Landing,
  Marquee,
  Mentors,
  Prizes,
  Sponsors,
  Testimonials,
} from "../../components/private";
import Timer from "../../components/private/timer/Timer";
import "./Home.scss";

const Home = () => {
  return (
    <div className="main_parent">
      <Landing />
      {window.innerWidth < 600 && <Marquee />}
      <Timer />
      <About />
      <Prizes />
      <Sponsors />
      <Mentors />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
