import React from "react";
import Marquee from "react-fast-marquee";
import HeaderData from "../../../assets/data/HeaderContent";
import { mentorContent } from "../../../assets/data/MentorsContent";
import { Header } from "../../shared";
import "./Mentors.scss";
import SingleMentors from "./singleMentors/SingleMentors";

function Mentors() {
  return (
    <section className="mentors__parent" id="mentors">
      <Header {...HeaderData.mentors} />
      <div className="mentors__container mentors__container_desktop">
        {mentorContent.map((mentor, index) => {
          return <SingleMentors mentor={mentor} key={index} />;
        })}
      </div>
      <Marquee
        autoFill={true}
        pauseOnHover={true}
        speed={50}
        direction="right"
        className="mentors__container mentors__container_mobile"
      >
        {mentorContent
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((mentor, index) => {
            return <SingleMentors mentor={mentor} key={index} />;
          })}
      </Marquee>
    </section>
  );
}

export default Mentors;
