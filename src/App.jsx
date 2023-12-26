import React, { Component } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import MorePrizesPage from "./pages/MorePrizesPage/MorePrizesPage";
import Terms from "./pages/Terms/Terms";
import Assets from "./pages/assets/Assets";
import Bingo from "./pages/bingo/Bingo";
import Brand from "./pages/brand/Brand";
import CodeofConduct from "./pages/coc/CodeofConduct";
import Coreteam from "./pages/coreteam/coreteam";
import Partner from "./pages/cp/cp";
import Discord from "./pages/discord/Discord";
import Evengelist from "./pages/evangelist/Evengelist";
import EventTcp from "./pages/eventTcp/EventTcp";
import Guide from "./pages/guide/Guide";
import HomePage from "./pages/home/HomePage";
import Live from "./pages/live/Live";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Register from "./pages/register/Register";
import Schedulepage from "./pages/schedule/Schedulepage";
import Venue from "./pages/venue/Venue";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
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
          <Route path="/discord" element={<Discord />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
