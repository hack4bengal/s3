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
import Timeline from "../../components/private/timeline/Timeline";
import "./Home.scss";
import Venue from "../../components/private/venue/Venue";
import Theme from "../../components/private/themes/Theme";
import CommunityPartners from "../../components/private/community/CommunityPartners";

const Home = () => {
  return (
    <div className="main_parent">
      <Landing />
      {window.innerWidth < 600 && <Marquee />}
      <Timer />
      {/* <Timeline /> */}
      <About />
      <Venue />
      <Theme />
      <Prizes />
      <Mentors />
      <Sponsors />
      <CommunityPartners />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
