import Lenis from "@studio-freight/lenis";
import React, { Suspense, useEffect } from "react";
import {
  About,
  Collaborators,
  FAQ,
  Landing,
  Mentors,
  Prizes,
  Sponsors,
  Testimonials,
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
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Timeline />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Prizes />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Sponsors />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Collaborators />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Mentors />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FAQ />
      </Suspense>
    </>
  );
};

export default Home;
