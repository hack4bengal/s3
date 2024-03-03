import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/shared";
import Telegram from "./pages/telegram/Telegram";
import "./styles/Globals.scss";
import Discord from "./pages/discord/Discord";
import CodeofConduct from "./pages/coc/CodeofConduct";
import Home from "./pages/home/Home";
import Brand from "./pages/brand/Brand";
import Events from "./pages/events/Events";

// const Home = lazy(() => import("./pages/home/Home"));
// const Discord = lazy(() => import("./pages/discord/Discord"));
// const CodeofConduct = lazy(() => import("./pages/coc/CodeofConduct"));
// const Brand = lazy(() => import("./pages/brand/Brand"));

const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/discord" element={<Discord />} />
          <Route exact path="/coc" element={<CodeofConduct />} />
          <Route exact path="/brand" element={<Brand />} />
          <Route exact path="/tg" element={<Telegram />} />
          <Route exact path="/events" element={<Events />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
