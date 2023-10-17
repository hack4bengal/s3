import React, { Component } from "react";
import "../../App.css";
import Event from "../../sections/event/Event.js";

import NavbarTeam from "../../components/navbarTeam/NavbarTeam";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default class EventTcp extends Component {
  render() {
    return (
      <>
        <div className="hack4bengal__navbarTeam-container">
          <Navbar />
        </div>
        <div className="container mx-auto">
          <Event />
        </div>

        <div className="hack4bengal__footer-container">
          <Footer />
        </div>
      </>
    );
  }
}
