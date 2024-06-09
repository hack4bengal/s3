import React from "react";
import Marquee from "react-fast-marquee";
import HeaderData from "../../../assets/data/HeaderContent";
import { mentorContent } from "../../../assets/data/MentorsContent";
import { ComingSoon, Header } from "../../shared";
import "./Mentors.scss";
import SingleMentors from "./singleMentors/SingleMentors";

function Mentors() {
  return (
    <section className="mentors__parent" id="mentors">
      <Header {...HeaderData.mentors} />
      <ComingSoon />
    </section>
  );
}

export default Mentors;
