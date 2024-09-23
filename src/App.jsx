import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/shared";
import Loading from "./components/shared/loading/Loading";
import Notfound from "./pages/404/Notfound";
import Forward from "./pages/Forward";
import Brand from "./pages/brand/Brand";
import Certificate from "./pages/certificate/Certificate";
import CodeofConduct from "./pages/coc/CodeofConduct";
import Events from "./pages/events/Events";
import Home from "./pages/home/Home";
import Team from "./pages/team/Team";
import Telegram from "./pages/telegram/Telegram";
import Verify from "./pages/verify/Verify";
import "./styles/Globals.scss";

const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<Loading />}>
        <main>
          {(window.location.pathname === "/" ||
            window.location.pathname === "/coc" ||
            window.location.pathname === "/brand" ||
            window.location.pathname === "/events" ||
            window.location.pathname === "/live" ||
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
              path="/guide"
              element={
                <Forward
                  pathname={"/guide"}
                  title={"Guide"}
                  url={
                    "https://hack4bengal.notion.site/Hack4Bengal-3-0-Guide-3a4e84ca957746f29a5ac22990c3db74"
                  }
                />
              }
            />

            <Route
              exact
              path="/apply"
              element={
                <Forward
                  pathname={"/apply"}
                  title={"S4 Applications"}
                  url={
                    "https://docs.google.com/forms/d/e/1FAIpQLScxL27u1UUIRi6L6I8GOpfSaLIJnW34_gfoL2_Lfy9xItgCYw/viewform"
                  }
                />
              }
            />

            <Route exact path="/coc" element={<CodeofConduct />} />
            <Route exact path="/brand" element={<Brand />} />
            <Route exact path="/tg" element={<Telegram />} />
            <Route exact path="/verify" element={<Verify />} />
            <Route exact path="/certificate" element={<Certificate />} />
            <Route exact path="/events" element={<Events />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/*" element={<Notfound />} />
          </Routes>
        </main>

        {window.location.pathname !== "/discord" && <Footer />}
      </Suspense>
    </Router>
  );
};

export default App;
