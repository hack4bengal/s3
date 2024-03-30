import React, { Suspense, useEffect } from "react";
import {
  About,
  Collaborators,
  FAQ,
  Landing,
  Marquee,
  Mentors,
  Prizes,
  Sponsors,
  Testimonials,
  Timeline,
} from "../../components/private";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Landing />
      {window.innerWidth < 600 && <Marquee />}
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
