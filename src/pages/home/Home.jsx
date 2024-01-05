import Lenis from "@studio-freight/lenis";
import React, { useEffect } from "react";
import AboutTamal from "../../components/about/AboutTamal";
import Faq from "../../components/faq/FAQ";
import Landing from "../../components/landing/Landing";
import Marquee from "../../components/marquee/Marquee";
import Mentors from "../../components/mentors/Mentors";
import Prizes from "../../components/prizes/Prizes";
import Sponsors from "../../components/sponsors/Sponsors";
import Testimonials from "../../components/testimonials/Testimonials";
import Theme from "../../components/themes/Theme";
import Timeline from "../../components/timeline/Timeline";
import "./Home.scss";
import Collaborators from "../../components/collaborators/Collaborators";

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
      {window.innerWidth < 600 && <Marquee />}
      <AboutTamal refs={refs.about} />
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
