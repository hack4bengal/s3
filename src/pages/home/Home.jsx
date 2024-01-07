import Lenis from "@studio-freight/lenis";
import React, { useEffect } from "react";
import {
  About,
  Collaborators,
  Faq,
  Landing,
  Mentors,
  Prizes,
  Sponsors,
  Testimonials,
  Theme,
  Timeline,
} from "../../components/private";
import "./Home.scss";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Landing />
      {/* {window.innerWidth < 600 && <Marquee />} */}
      <About />
      <Timeline />
      <Prizes />
      <Theme />
      <Sponsors />
      <Collaborators />
      <Mentors />
      <Testimonials />
      <Faq />
    </>
  );
};

export default Home;
