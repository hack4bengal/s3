import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/shared";
import Brand from "./pages/brand/Brand";
import CodeofConduct from "./pages/coc/CodeofConduct";
import Discord from "./pages/discord/Discord";
import Evangelist from "./pages/evangelist/Evangelist";
import Home from "./pages/home/Home";
import Telegram from "./pages/telegram/Telegram";
import "./styles/Globals.scss";
import Team from "./pages/team/Team";
// const Home = lazy(() => import("./pages/home/Home"));
// const Discord = lazy(() => import("./pages/discord/Discord"));
// const CodeofConduct = lazy(() => import("./pages/coc/CodeofConduct"));
// const Brand = lazy(() => import("./pages/brand/Brand"));

const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      {!window.location.pathname.includes("/tg") &&
        !window.location.pathname.includes("/evangelist") && <Navbar />}
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/discord" element={<Discord />} />
          <Route exact path="/coc" element={<CodeofConduct />} />
          <Route exact path="/brand" element={<Brand />} />
          <Route exact path="/tg" element={<Telegram />} />
          <Route exact path="/evangelist" element={<Evangelist />} />
          <Route exact path="/teams" element={<Team/>}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
