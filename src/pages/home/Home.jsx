import React, { Suspense } from "react";
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
  Timer,
} from "../../components/private";
import "./Home.scss";

const Home = () => {
  return (
    <div className="main_parent">
      <Landing />
      {window.innerWidth < 600 && <Marquee />}
      <Suspense fallback={<div>Loading...</div>}>
        <Timeline />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Timer />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
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
    </div>
  );
};

export default Home;
