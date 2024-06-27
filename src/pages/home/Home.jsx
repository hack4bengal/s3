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
import CommunityPartners from "../../components/private/community/CommunityPartners";
import Theme from "../../components/private/themes/Theme";
import Timer from "../../components/private/timer/Timer";
import Venue from "../../components/private/venue/Venue";
import "./Home.scss";

const Home = () => {
  return (
    <div className="main_parent">
      <Landing />
      {window.innerWidth < 600 && <Marquee />}
      <Timer />
      {/* <Timeline /> */}
      <About />
      {/* <Spotlight /> */}
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
