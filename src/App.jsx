import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Brand from "./pages/brand/Brand";
import CodeofConduct from "./pages/coc/CodeofConduct";
import Discord from "./pages/discord/Discord";
import Home from "./pages/home/Home";

import { Footer, Navbar } from "./components/shared";
import "./styles/Globals.scss";

const App = () => {
  const homeRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const timelineRef = React.useRef(null);
  const themeRef = React.useRef(null);
  const prizesRef = React.useRef(null);
  const sponsorsRef = React.useRef(null);
  const collaboratorsRef = React.useRef(null);
  const mentorsRef = React.useRef(null);
  const testimonialsRef = React.useRef(null);
  const faqRef = React.useRef(null);

  const refs = {
    home: homeRef,
    about: aboutRef,
    timeline: timelineRef,
    themes: themeRef,
    prizes: prizesRef,
    sponsors: sponsorsRef,
    collaborators: collaboratorsRef,
    mentors: mentorsRef,
    testimonials: testimonialsRef,
    faq: faqRef,
  };

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Navbar refs={refs} />
      <main>
        <Routes>
          <Route exact path="/" element={<Home refs={refs} />} />
          <Route exact path="/discord" element={<Discord />} />
          <Route exact path="/coc" element={<CodeofConduct refs={refs} />} />
          <Route exact path="/brand" element={<Brand refs={refs} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
