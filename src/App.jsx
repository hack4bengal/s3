import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Brand from "./pages/brand/Brand";
import CodeofConduct from "./pages/coc/CodeofConduct";
import Discord from "./pages/discord/Discord";
import Home from "./pages/home/Home";

import { Footer, Navbar } from "./components/shared";
import "./styles/Globals.scss";

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
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
