import React, {Component} from "react";
import "./HomePage.css";
import "../../App.css";

import Navbar from "../../components/navbar/Navbar";
import WelcomeSection from "../../sections/WelcomeSection/WelcomeSection.jsx";
import InfiniteCarousel from "../../components/InfiniteCarouselSection/InfiniteCarousel.jsx";
import HackathonCountdownSection from "../../sections/HackathonCountdownSection/HackathonCountdownSection.jsx";
import AboutUsSection from "../../sections/AboutUsSection/AboutUsSection.jsx";
import TimelineSection from "../../sections/TimelineSection/TimelineSection.jsx";
import OfflineEventsSection from "../../sections/OfflineEventsSection/OfflineEventsSection.jsx";
import ThemesSection from "../../sections/ThemesSection/ThemesSection.jsx";
import JudgesSection from "../../sections/JudgesSection/JudgesSection.jsx";
import TestimonialSection from "../../sections/TestimonialSection/TestimonialSection.jsx";
import PartnersAndSponsorsSection from "../../sections/PartnersAndSponsorsSection/PartnersAndSponsorsSection.jsx";
import FAQSection from "../../sections/FAQSection/FAQSection.jsx";
import MeetOurTeamSection from "../../sections/MeetOurTeamSection/MeetOurTeamSection.jsx";
import Footer from "../../components/footer/Footer.jsx";
import PrizesSection1 from "../../sections/PrizesSection/PrizesSection";
import MorePrizesPage from "../MorePrizesPage/MorePrizesPage";
import Venue from "../../sections/venue/Venue";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <div className="hack4bengal__navbar-container">
          <Navbar />
        </div>

        <div className=" mx-auto">
          <WelcomeSection />
        </div>

        <InfiniteCarousel />

        <div className="hack4bengal_container hack4bengal_container_vertical">
          <HackathonCountdownSection />
          <AboutUsSection />
          <TimelineSection />
          <Venue />
          <OfflineEventsSection />
          <ThemesSection />
          <PrizesSection1 />
          <MorePrizesPage />
          <JudgesSection />
          {/*  <PastSpeakersSection /> */}
          <PartnersAndSponsorsSection />
          <TestimonialSection />
          <FAQSection />
          <MeetOurTeamSection />
        </div>

        <div className="hack4bengal__footer-container">
          <Footer />
        </div>
      </>
    );
  }
}
