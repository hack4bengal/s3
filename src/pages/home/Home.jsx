import React from "react";
import {
  About,
  FAQ,
  Landing,
  Marquee,
  Mentors,
  Sponsors,
  Testimonials,
} from "../../components/private";
import CommunityPartners from "../../components/private/community/CommunityPartners";
import Venue from "../../components/private/venue/Venue";
import Winner from "../../components/private/winners/Winner";
import "./Home.scss";

const Home = () => {
  return (
    <div className="main_parent">
      <Landing />
      {window.innerWidth < 600 && <Marquee />}
      <Winner />
      <About />

      <Venue />
      {/* <Theme />
      <Prizes /> */}
      <Mentors />
      <Sponsors />
      <CommunityPartners />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
