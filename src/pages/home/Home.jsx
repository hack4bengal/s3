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

const Home = ({ refs }) => {
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
      <Landing refs={refs.home} />
      {/* {window.innerWidth < 600 && <Marquee />} */}
      <About refs={refs.about} />
      <Timeline refs={refs.timeline} />
      <Prizes refs={refs.prizes} />
      <Theme refs={refs.themes} />
      <Sponsors refs={refs.sponsors} />
      <Collaborators refs={refs.collaborators} />
      <Mentors refs={refs.mentors} />
      <Testimonials refs={refs.testimonials} />
      <Faq refs={refs.faq} />
    </>
  );
};

export default Home;
