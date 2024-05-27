import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/shared";
import Notfound from "./pages/404/Notfound";
import Forward from "./pages/Forward";
import Brand from "./pages/brand/Brand";
import Cloud from "./pages/cloud101/Cloud101";
import CodeofConduct from "./pages/coc/CodeofConduct";
import Evangelist from "./pages/evangelist/Evangelist";
import Events from "./pages/events/Events";
import Home from "./pages/home/Home";
import Team from "./pages/team/Team";
import Telegram from "./pages/telegram/Telegram";
import "./styles/Globals.scss";

const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      {(window.location.pathname === "/" ||
        window.location.pathname === "/coc" ||
        window.location.pathname === "brand" ||
        window.location.pathname === "/events" ||
        window.location.pathname === "team") && <Navbar />}
      <main>
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
          <Route exact path="/coc" element={<CodeofConduct />} />
          <Route exact path="/brand" element={<Brand />} />
          <Route exact path="/tg" element={<Telegram />} />
          <Route exact path="/cloud-101" element={<Cloud />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/evangelist" element={<Evangelist />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/*" element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
