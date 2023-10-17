import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import TeamPage from "./pages/TeamPage/TeamPage";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import MorePrizesPage from "./pages/MorePrizesPage/MorePrizesPage";
import EventTcp from "./pages/eventTcp/EventTcp";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Terms from "./pages/Terms/Terms";
import CodeofConduct from "./pages/coc/CodeofConduct";
import Assets from "./pages/assets/Assets";
import Register from "./pages/register/Register";
import Evengelist from "./pages/evangelist/Evengelist";
import Partner from "./pages/cp/cp";
import Schedulepage from "./pages/schedule/Schedulepage";
import Guide from "./pages/guide/Guide";
import Venue from "./pages/venue/Venue";
import Brand from "./pages/brand/Brand";
import Live from "./pages/live/Live";
import Bingo from "./pages/bingo/Bingo";
import Coreteam from "./pages/coreteam/coreteam";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/prizes" element={<MorePrizesPage />} />
          <Route path="/events" element={<EventTcp />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="tnc" element={<Terms />} />
          <Route path="coc" element={<CodeofConduct />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/register" element={<Register />} />
          <Route path="/evangelist" element={<Evengelist />} />
          <Route path="/cp" element={<Partner />} />
          <Route path="/schedule" element={<Schedulepage />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/live" element={<Live />} />
          <Route path="/bingo" element={<Bingo />} />
          <Route path="/coreteam" element={<Coreteam />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
