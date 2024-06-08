import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/shared";
import Loading from "./components/shared/loading/Loading";
import Notfound from "./pages/404/Notfound";
import Forward from "./pages/Forward";
import Brand from "./pages/brand/Brand";
import Cloud from "./pages/cloud101/Cloud101";
import CodeofConduct from "./pages/coc/CodeofConduct";
import Evangelist from "./pages/evangelist/Evangelist";
import Events from "./pages/events/Events";
import Home from "./pages/home/Home";
import Surprise from "./pages/surprise/Surprise";
import Team from "./pages/team/Team";
import Telegram from "./pages/telegram/Telegram";
import "./styles/Globals.scss";
import Register from "./pages/registration/Register";

const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<Loading />}>
        <main>
          {(window.location.pathname === "/" ||
            window.location.pathname === "/coc" ||
            window.location.pathname === "/brand" ||
            window.location.pathname === "/events" ||
            window.location.pathname === "/team") && <Navbar />}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/discord"
              element={
                <Forward
                  pathname={"/discord"}
                  title={"Discord"}
                  url={"https://discord.gg/hack4bengal"}
                />
              }
            />
            <Route
              exact
              path="/community"
              element={
                <Forward
                  pathname={"/community"}
                  title={"Community Partners"}
                  url={"https://lu.ma/H4B-community-partners"}
                />
              }
            />
            <Route
              exact
              path="/howto"
              element={
                <Forward
                  pathname={"/howto"}
                  title={"Registration Walkthrough"}
                  url={
                    "https://www.instagram.com/reel/C7y9O1Ly4nk/?igsh=amYyamVtMDVlcmRi"
                  }
                />
              }
            />
            <Route
              exact
              path="/call-for-mentors"
              element={
                <Forward
                  pathname={"/call-for-mentors"}
                  title={"Call for Mentors"}
                  url={"https://lu.ma/9fkggmb3"}
                />
              }
            />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/coc" element={<CodeofConduct />} />
            <Route exact path="/brand" element={<Brand />} />
            <Route exact path="/tg" element={<Telegram />} />
            <Route exact path="/cloud-101" element={<Cloud />} />
            <Route exact path="/events" element={<Events />} />
            <Route exact path="/evangelist" element={<Evangelist />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/load" element={<Loading />} />
            {/* <Route exact path="/surprise" element={<Register />} /> */}
            <Route exact path="/*" element={<Notfound />} />
          </Routes>
        </main>

        {window.location.pathname !== "/surprise" &&
          window.location.pathname !== "/register" && <Footer />}
      </Suspense>
    </Router>
  );
};

export default App;
