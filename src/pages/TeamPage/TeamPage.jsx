import React, {Component} from "react";
import "./Teampage.css";
import "../../App.css";
import Team from "../../sections/team/Team";
// import NavbarTeam from "../../components/navbarTeam/NavbarTeam";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
export default class TeamPage extends Component {
  render() {
    return (
      <>
        <div className="hack4bengal__navbar-container">
          <Navbar />
        </div>
        <div className="teampage_container_main">
          <Team />
        </div>

        <div className="hack4bengal__footer-container">
          <Footer doge={true} />
        </div>
      </>
    );
  }
}
