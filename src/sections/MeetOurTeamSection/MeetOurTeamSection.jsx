import React from "react";
import "./MeetOurTeamSection.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MeetOurTeamSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="meetourteam_section"
      id="my-team"
    >
      <div className="meetourteam_section-body" id="team">
        <div className="meetourteam_section-title">
          Wondering who all make this possible?
        </div>
        <div className="hack4bengal__team-subtitle meetourteam_section-title2 ">
          Hack4Bengal is a team of 35+ enthusiastic folks, led by 5!
        </div>
        <Link to="/team">
          <button className="meetourteam_section-button">
            Meet our Team
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default MeetOurTeamSection;
